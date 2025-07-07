'use strict';

function attack(pick){
    console.log(webgl_characters[webgl_character_id].selected, 'is attacking', pick.id);
}

// Required args: id, build
function build(args){
    const player = webgl_characters[args.id];
    if(player.building[args.build]){
        return;
    }

    const cost = tech[args.build].cost;
    if(player.power < cost){
        return;
    }

    const position = webgl_get_position(entity_entities[player.selected]);
    player.power -= cost;
    player.building[args.build] = {
      'id': args.build,
      'time': tech[args.build].time,
      'x': position.x + 20,
      'y': position.y,
      'z': position.z,
    };
    update_ui();
}

function handle_picking(event){
    if(core_key_shift
      || event.target.id !== 'canvas'){
        return;
    }

    const character = webgl_characters[webgl_character_id];
    const selected = entity_entities[character.selected];
    if(core_pointer.down_1
      && !selected){
        return;
    }

    const pick = webgl_pick_entity();
    if(!pick.entity){
        return;
    }
    const entity = pick.entity;

    if(core_pointer.down_0){
        select(entity.team ? entity.id : '');

    }else if(core_pointer.down_1
      && selected.team === character.id){
        const properties = tech[selected.type];
        if(!entity.team){
            if(properties.type === 'unit'){
                move(entity);

            }else if(properties.builds.length){
                rally(entity);
            }

            return;
        }

        const owned = entity.team === character.id;
        if(properties.type === 'unit'){
            if(owned){
                move(entity);

            }else{
                attack(entity);
            }

        }else if(properties.builds.length){
            rally(entity);

        }else if(!owned){
            attack(entity);
        }
    }
}

function level_placeholders(){
    return [
      {
        'id': '_rts_placeholder_build',
        'spawn': false,
        'entities': [
          {
            'id': '_rts_placeholder_build_entity',
            'alpha': .5,
            'collision': false,
            'draw': false,
            'vertex_colors': [
              1, 1, 1, 1,
            ],
            'vertices': [
              1, 1, -1,
              -1, 1, -1,
              -1, 1, 1,
              1, 1, 1,
            ],
          },
        ],
      },
      {
        'id': '_rts_placeholder_move',
        'spawn': false,
        'entities': [
          {
            'id': '_rts_placeholder_move_entity',
            'alpha': .5,
            'collision': false,
            'draw': false,
            'vertex_colors': [
              1, 1, 1, 1,
            ],
            'vertices': [
              1, 1, -1,
              -1, 1, -1,
              -1, 1, 1,
              1, 1, 1,
            ],
          },
        ],
      },
    ];
}

function level_properties(){
    return {
      'camera_zoom': 50,
      'camera_zoom_max': 100,
      'camera_zoom_min': 20,
      'picking': 2,
    };
}

function load_testmap(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'characters': [
          ...level_placeholders(),
          {
            'id': 'rts_testmap',
            'spawn': false,
            'entities': [
              {
                'id': 'base',
                'picking': true,
                'texture': 'lavaleaf.png',
                'vertex_colors': [
                  .2, .8, .2, 1,
                ],
                'vertices': [
                  100, 0, -50,
                  -100, 0, -50,
                  -100, 0, 50,
                  100, 0, 50,
                ],
              },
              {
                'id': 'wall_n',
                'attach_y': 10,
                'attach_z': -50,
                'rotate_x': 90,
                'texture': 'lavaleaf.png',
                'vertex_colors': [
                  .8, .4, 0, 1,
                ],
                'vertices': [
                  100, 0, -10,
                  -100, 0, -10,
                  -100, 0, 10,
                  100, 0, 10,
                ],
              },
              {
                'id': 'wall_w',
                'attach_x': -100,
                'attach_y': 10,
                'rotate_z': 270,
                'texture': 'lavaleaf.png',
                'vertex_colors': [
                  .8, .4, 0, 1,
                ],
                'vertices': [
                  10, 0, -50,
                  -10, 0, -50,
                  -10, 0, 50,
                  10, 0, 50,
                ],
              },
            ],
          },
        ],
      },
    });

    team_create({
      'power': 10000,
      'x': -75,
    });
    team_create({
      'id': 'enemy',
      'x': 75,
    });
}

// Required args: team, type, x, y, z
function make(args){
    args = core_args({
      'args': args,
      'defaults': {
        'x': 0,
        'y': 1,
        'z': 0,
      },
    });

    const id = args.type + entity_id_count;
    webgl_entity_create({
      'character': 'rts_testmap',
      'entities': [{
        'attach_to': 'rts_testmap',
        'attach_x': args.x,
        'attach_y': args.y,
        'attach_z': args.z,
        'id': id,
        'picking': true,
        'team': args.team,
        'type': args.type,
        ...tech[args.type].properties,
      }],
    });
}

function move(pick){
    console.log(webgl_characters[webgl_character_id].selected, 'is moving to', pick.id);
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new base? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    core_object_reset(tech);
    Object.assign(
      tech,
      {
        'Builder': {
          'builds': [
            'Factory',
            'Turret',
          ],
          'cost': 100,
          'time': 100,
          'type': 'unit',
          'properties': {
            'texture': 'grid.png',
            'vertices': [
              4, 0, -4,
              -4, 0, -4,
              -4, 0, 4,
              4, 0, 4,
            ],
          },
        },
        'Factory': {
          'builds': ['Builder'],
          'cost': 1000,
          'time': 200,
          'type': 'building',
          'properties': {
            'texture': 'grid.png',
            'vertices': [
              10, 0, -10,
              -10, 0, -10,
              -10, 0, 10,
              10, 0, 10,
            ],
          },
        },
        'Turret': {
          'builds': [],
          'cost': 250,
          'time': 150,
          'type': 'building',
          'properties': {
            'texture': 'grid.png',
            'vertices': [
              5, 0, -5,
              -5, 0, -5,
              -5, 0, 5,
              5, 0, 5,
            ],
          },
        },
      }
    );
    for(const id in tech){
        core_html({
          'parent': core_elements.build,
          'properties': {
            'id': 'build_' + id,
            'innerHTML': id + '<br>' + tech[id].cost + ', ' + tech[id].time,
            'onclick': function(){
                build({
                  'id': webgl_character_id,
                  'build': id,
                });
            },
            'style': 'display:none',
            'type': 'button',
          },
          'store': 'build_' + id,
          'type': 'button',
        });
    }

    load_testmap();
    update_ui();
}

function rally(pick){
    console.log(webgl_characters[webgl_character_id].selected, 'rally point set to', pick.id);
}

function repo_escape(){
    if(webgl === 0
      && !core_menu_open){
        new_game();
    }
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(event){
            if(webgl !== 0){
                event.preventDefault();
            }
        },
      },
      'events': {
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'tech': {},
      },
      'info': '<button id=new_game type=button>Start RTS Test</button><br><br>Power: <span class=power></span><br>'
        + 'Selected: <span class=selected></span><br>'
        + 'Team: <span class=team></span><br>'
        + 'Type: <span class=type></span>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'pointerdown': {
          'todo': handle_picking,
        },
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': 'Power: <span id=power></span><br>'
        + 'Selected: <span id=selected></span><br>'
        + 'Team: <span id=team></span><br>'
        + 'Type: <span id=type></span>'
        + '<div id=build></div>'
        + '<div id=progress></div>',
      'ui_elements': [
        'build',
        'progress',
      ],
    });
}

function repo_logic(){
    for(const id in webgl_characters){
        const character = webgl_characters[id];
        if(!character.building){
            continue;
        }

        for(const building in character.building){
            const build = character.building[building];
            build.time--;
            if(build.time <= 0){
                make({
                  'team': character.id,
                  'type': build.id,
                  'x': build.x,
                  'y': build.y,
                  'z': build.z,
                });
                delete character.building[building];
            }
        }
    }

    let progress_ui = '';
    const building = webgl_characters[webgl_character_id].building;
    for(const progress in building){
        progress_ui += building[progress].id + ': ' + building[progress].time + '<br>';
    }
    core_ui_update({
      'class': true,
      'ids': {
        'progress': progress_ui,
      },
      'todo': 'innerHTML',
    });
}

function select(id){
    const character = webgl_characters[webgl_character_id];
    character.selected = id;

    if(character.selected === ''
      || entity_entities[character.selected].team !== character.id){
        for(const id in tech){
            core_elements['build_' + id].style.display = 'none';
        }

    }else{
        const builds = tech[entity_entities[character.selected].type].builds;
        for(const id in tech){
            core_elements['build_' + id].style.display = builds.includes(id)
              ? 'inline-block'
              : 'none';
        }
    }
    update_ui();
}

function stats(){
    return {
      'building': {},
      'camera_zoom': 50,
      'controls': 'rts',
      'level': -1,
      'lock': {
        'camera_rotate_x': 60,
        'position_y': 5,
      },
      'selected': '',
      'speed': 2,
    };
}

function team_create(args){
    args = core_args({
      'args': args,
      'defaults': {
        'id': webgl_character_id,
        'power': 0,
        'x': 0,
        'y': 1,
        'z': 0,
      },
    });

    webgl_character_init({
      ...stats(),
      'id': args.id,
      'power': args.power,
      'spawn': {
        'position_x': args.x,
        'position_y': args.y,
        'position_z': args.z,
      },
    });
    make({
      'team': args.id,
      'type': 'Builder',
      'x': args.x,
      'y': args.y,
      'z': args.z,
    });
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    const selected = entity_entities[character.selected];
    core_ui_update({
      'class': true,
      'ids': {
        'power': character.power,
        'selected': character.selected,
        'team': selected?.team,
        'type': selected?.type,
      },
    });
}
