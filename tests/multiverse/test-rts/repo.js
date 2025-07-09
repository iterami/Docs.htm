'use strict';

function attack(entity){
    console.log(webgl_characters[webgl_character_id].selected, 'is attacking', entity.id);
}

// Required args: id, build
function build(args){
    const player = webgl_characters[args.id];
    const properties = tech[args.build];
    if(player.power < properties.cost){
        return;
    }

    placeholder_hide();

    let x = webgl_picked_x;
    let y = webgl_picked_y;
    let z = webgl_picked_z;
    if(properties.type === 'unit'){
        const selected = entity_entities[player.selected];
        x = selected.attach_x;
        y = selected.attach_y;
        z = selected.attach_z;
    }

    player.power -= properties.cost;
    const id = make({
      'team': player.id,
      'type': args.build,
      'x': x,
      'y': y,
      'z': z,
    })
    player.building[id] = properties.time;

    update_ui();
}

function handle_picking(event){
    if(core_key_shift
      || event.target.id !== 'canvas'){
        return;
    }

    if(build_placeholder.length > 0){
        if(core_pointer.down_0){
            build({
              'id': webgl_character_id,
              'build': build_placeholder,
            });
            return;

        }else if(core_pointer.down_1){
            placeholder_hide();
            return;
        }
    }

    const player = webgl_characters[webgl_character_id];
    const selected = entity_entities[player.selected];
    if(core_pointer.down_1
      && !selected){
        return;
    }

    const entity = webgl_pick_entity();
    if(!entity){
        return;
    }

    if(core_pointer.down_0){
        select((entity.team && !player.building[entity.id]) ? entity.id : '');

    }else if(core_pointer.down_1
      && selected.team === player.id){
        const properties = tech[selected.type];
        if(!entity.team){
            if(properties.type === 'unit'
              || properties.builds.length){
                move(selected);
            }

            return;
        }

        const owned = entity.team === player.id;
        if(properties.type === 'unit'
          || properties.builds.length){
            if(owned){
                move(selected);

            }else{
                attack(entity);
            }

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
              0, 0, 0,
              0, 0, 0,
              0, 0, 0,
              0, 0, 0,
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
              2, 3, -2,
              -2, 3, -2,
              -2, 3, 2,
              2, 3, 2,
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
                'picking_xyz': true,
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
      'id': 'Enemy',
      'x': 75,
    });
}

// Required args: team, type, x, y, z
function make(args){
    args = core_args({
      'args': args,
      'defaults': {
        'x': 0,
        'y': 0,
        'z': 0,
      },
    });

    let destination_x = args.x;
    let destination_y = args.y;
    let destination_z = args.z;
    if(webgl_characters[args.team].selected
      && tech[args.type].type === 'unit'){
        const selected = entity_entities[webgl_characters[args.team].selected];
        destination_x = selected.destination_x;
        destination_y = selected.destination_y;
        destination_z = selected.destination_z;
    }

    const id = args.type + entity_id_count;
    webgl_entity_create({
      'character': 'rts_testmap',
      'entities': [{
        'attach_to': 'rts_testmap',
        'attach_x': args.x,
        'attach_y': args.y,
        'attach_z': args.z,
        'destination_x': destination_x,
        'destination_y': destination_y,
        'destination_z': destination_z,
        'id': id,
        'picking': true,
        'team': args.team,
        'type': args.type,
        ...tech[args.type].properties,
      }],
    });
    return id;
}

function move(entity){
    entity.destination_x = webgl_picked_x;
    entity.destination_y = webgl_picked_y;
    entity.destination_z = webgl_picked_z;
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new base? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    placeholder_hide();
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
              4, 1, -4,
              -4, 1, -4,
              -4, 1, 4,
              4, 1, 4,
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
              10, .01, -10,
              -10, .01, -10,
              -10, .01, 10,
              10, .01, 10,
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
              5, .01, -5,
              -5, .01, -5,
              -5, .01, 5,
              5, .01, 5,
            ],
          },
        },
      }
    );
    core_elements.build.textContent = '';
    for(const id in tech){
        delete core_elements['build_' + id];
        core_html({
          'parent': core_elements.build,
          'properties': {
            'id': 'build_' + id,
            'innerHTML': id + '<br>' + tech[id].cost + ', ' + tech[id].time,
            'onclick': function(){
                if(tech[id].type === 'unit'){
                    build({
                      'id': webgl_character_id,
                      'build': id,
                    });

                }else if(build_placeholder === id){
                    placeholder_hide();

                }else{
                    placeholder_show(id);
                }
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

function placeholder_hide(){
    build_placeholder = '';
    const placeholder = entity_entities._rts_placeholder_build_entity;
    if(placeholder){
        placeholder.draw = false;
    }
}

function placeholder_show(id){
    const placeholder = entity_entities._rts_placeholder_build_entity;
    placeholder.vertices = tech[id].properties.vertices;

    webgl.bindVertexArray(placeholder.vao);
    webgl_buffer_set({
      'attribute': webgl_shaders.default.attributes.vertexPosition,
      'data': placeholder.vertices,
      'size': 3,
    });

    build_placeholder = id;
    placeholder.draw = true;
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
        'build_placeholder': '',
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
        const player = webgl_characters[id];
        if(!player.building){
            continue;
        }

        for(const building in player.building){
            if(player.building[building]-- <= 0){
                delete player.building[building];
            }
        }
    }

    const player = webgl_characters[webgl_character_id];
    if(player.selected){
        const placeholder = webgl_characters._rts_placeholder_move;
        const selected = entity_entities[player.selected];
        placeholder.position_x = selected.destination_x;
        placeholder.position_y = selected.destination_y;
        placeholder.position_z = selected.destination_z;
        entity_entities._rts_placeholder_move_entity.draw = Math.abs(selected.attach_x - selected.destination_x) > 1
          || Math.abs(selected.attach_y - selected.destination_y) > 1
          || Math.abs(selected.attach_z - selected.destination_z) > 1;
    }
    if(build_placeholder.length){
        const placeholder = webgl_characters._rts_placeholder_build;
        placeholder.position_x = webgl_picked_x;
        placeholder.position_y = webgl_picked_y;
        placeholder.position_z = webgl_picked_z;
    }

    let progress_ui = '';
    const building = player.building;
    for(const id in building){
        progress_ui += id + ': ' + building[id] + '<br>';
    }
    core_ui_update({
      'class': true,
      'ids': {
        'progress': progress_ui,
      },
      'todo': 'innerHTML',
    });

    for(const id in entity_entities){
        const entity = entity_entities[id];
        if(!entity.team
          || webgl_characters[entity.team].building[id]
          || tech[entity.type].type !== 'unit'){
            continue;
        }

        if(Math.abs(entity.attach_x - entity.destination_x) > 1
          || Math.abs(entity.attach_y - entity.destination_y) > 1
          || Math.abs(entity.attach_z - entity.destination_z) > 1){
            const angle_xz = Math.atan2(
              entity.attach_z - entity.destination_z,
              entity.attach_x - entity.destination_x
            );
            entity.attach_x -= core_round({
              'number': Math.cos(angle_xz),
            });
            entity.attach_z -= core_round({
              'number': Math.sin(angle_xz),
            });
        }
    }
}

function select(id){
    const player = webgl_characters[webgl_character_id];
    player.selected = id;

    if(player.selected === ''
      || entity_entities[player.selected].team !== player.id){
        entity_entities._rts_placeholder_move_entity.draw = false;
        for(const id in tech){
            core_elements['build_' + id].style.display = 'none';
        }

    }else{
        const builds = tech[entity_entities[player.selected].type].builds;
        for(const id in tech){
            core_elements['build_' + id].style.display = builds.includes(id)
              ? 'inline-block'
              : 'none';
        }
    }
    update_ui();
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
      'building': {},
      'camera_zoom': 50,
      'controls': 'rts',
      'id': args.id,
      'level': -1,
      'lock': {
        'camera_rotate_x': 60,
        'position_y': 5,
      },
      'power': args.power,
      'selected': '',
      'spawn': {
        'position_x': args.x,
        'position_y': args.y,
        'position_z': args.z,
      },
      'speed': 2,
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
    const player = webgl_characters[webgl_character_id];
    const selected = entity_entities[player.selected];
    core_ui_update({
      'class': true,
      'ids': {
        'power': player.power,
        'selected': player.selected,
        'team': selected?.team,
        'type': selected?.type,
      },
    });
}
