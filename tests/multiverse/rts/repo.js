'use strict';

function attack(character){
    console.log(webgl_characters[webgl_character_id].selected, 'is attacking', character.id);
}

function build({
  id,
  placeholder,
  type,
} = {}){
    const player = webgl_characters[id];
    const properties = tech[type].character;
    if(player.power < properties.power){
        return;
    }

    const selected = webgl_characters[player.selected];
    if(selected.time > 0){
        return;
    }

    if(placeholder === true){
        placeholder_show(type);
        return;
    }

    placeholder_hide();

    let x = webgl_picked_x;
    let y = webgl_picked_y;
    let z = webgl_picked_z;

    if(properties.type === 'unit'){
        x = selected.position_x;
        y = selected.position_y;
        z = selected.position_z;

    }else if(properties.type === 'building'){
        selected.destination_x = x;
        selected.destination_y = y;
        selected.destination_z = z;
    }

    selected.making = make({
      'power': properties.power,
      'team': player.id,
      'time': properties.time,
      'type': type,
      'x': x,
      'y': y,
      'z': z,
    });
}

function camera_reset(){
    const player = webgl_characters[webgl_character_id];
    if(!player){
        return;
    }

    player.camera_rotate_x = 60;
    player.camera_rotate_y = 0;
    player.camera_zoom = 50;
    player.rotate_x = 0;
    player.rotate_y = 0;
    core_escape(false);
}

function distance_destination(character){
    return math_distance({
      'x0': character.position_x,
      'y0': character.position_y,
      'z0': character.position_z,
      'x1': character.destination_x,
      'y1': character.destination_y,
      'z1': character.destination_z,
    }) > character.speed;
}

function handle_ai(player){
}

function handle_picking(event){
    if(core_menu_open
      || core_key_shift
      || event.target.id !== 'canvas'){
        return;
    }

    const button = event.button;

    if(build_placeholder.length){
        if(button === 0){
            build({
              'id': webgl_character_id,
              'type': build_placeholder,
            });

        }else if(button === 1){
            placeholder_hide();
        }

        return;
    }

    const player = webgl_characters[webgl_character_id];
    const selected = webgl_characters[player.selected];
    if(button === 2
      && !selected){
        return;
    }

    const pixelbuffer = webgl_pick_entity({
      'start': 2,
    });
    if(!pixelbuffer.picked){
        return;
    }
    const character = webgl_characters[pixelbuffer.picked.attach_to];

    if(button === 0){
        select(character.team ? character.id : '');

    }else if(character
      && button === 2
      && selected.team === player.id
      && selected.id !== selected.making){
        if(selected.id === character.id){
            selected.destination_x = selected.position_x;
            selected.destination_y = selected.position_y;
            selected.destination_z = selected.position_z;
            return;
        }

        const properties = tech[selected.type].character;
        const unit = properties.type === 'unit';
        const friendly = !character.team || character.team === player.id;

        if(unit){
            if(selected.making){
                webgl_characters[selected.making].making = '';
                selected.making = '';
                selected.time = 0;
            }

            if(friendly
              && character.time > 0
              && !character.making){
                character.making = selected.id;
                selected.making = character.id;
                selected.time = character.time;
                selected.destination_x = character.position_x;
                selected.destination_y = character.position_y;
                selected.destination_z = character.position_z;

                return;
            }
        }

        if(friendly){
            move(selected);

        }else{
            attack(character);
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
            'collision': false,
            'draw': false,
            'picking_exclude': true,
            'vertex_colors': [1, 1, 1, 1,],
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
            'collision': false,
            'draw': false,
            'picking_exclude': true,
            'vertex_colors': [1, 1, 1, 1,],
            'vertices': [
              1.5, .1, -1.5,
              -1.5, .1, -1.5,
              -1.5, .1, 1.5,
              1.5, .1, 1.5,
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
            'id': '_rts',
            'base': true,
            'spawn': false,
            'entities': [
              {
                'id': 'base',
                'picking': true,
                'texture': 'lavaleaf.png',
                'vertex_colors': [.2, .8, .2, 1,],
                'vertices': [
                  100, 0, -100,
                  -100, 0, -100,
                  -100, 0, 100,
                  100, 0, 100,
                ],
              },
            ],
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'obstacle',
              'bottom': {
                'exclude': true,
              },
              'picking': true,
              'position_y': 5,
              'size_x': 20,
              'size_y': 10,
              'size_z': 100,
              'texture': 'lavaleaf.png',
            },
          },
        ],
      },
    });

    const spawn_properties = {
      'power': 2000,
    };
    const spawns = [
      {
        'x': -75,
        'z': -75,
      },
      {
        'x': 75,
        'z': -75,
      },
      {
        'x': -75,
        'z': 75,
      },
      {
        'x': 75,
        'z': 75,
      },
    ];
    team_create({
      ...spawn_properties,
      ...core_random_splice(spawns),
    });
    for(let team = 0; team < core_storage_data.enemies; team++){
        team_create({
          'id': 'Enemy' + team,
          ...spawn_properties,
          ...core_random_splice(spawns),
        });
    }
}

function make({
  power = 0,
  team,
  time = 0,
  type,
  x = 0,
  y = 0,
  z = 0,
} = {}){
    const character = tech[type].character;
    const player = webgl_characters[team];
    const prefab = tech[type].prefab;
    const selected = webgl_characters[player.selected];

    player.power -= power;
    if(selected){
        selected.time = time;
    }

    const id = team + '_' + type + entity_id_count;
    webgl_character_init({
      'id': id,
      'collide_bottom': 0,
      'collide_xy': prefab.size_x / 2,
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'life': time > 0 ? 1 : character.life_max,
      'lives': 1,
      'position_x': x,
      'position_y': y,
      'position_z': z,
      'spawn': false,

      ...character,
      'destination_x': x,
      'destination_y': y,
      'destination_z': z,
      'making': (time > 0 && character.type === 'unit')
        ? id
        : (selected?.id || ''),
      'team': team,
      'time': time,
      'type': type,
    });
    webgl_primitive_cuboid({
      ...prefab,
      'prefix': id,
      'character': id,
      'bottom': {
        'exclude': true
      },
      'picking': true,
      'position_y': y + prefab.size_y / 2,
      'vertex_colors': player.color,
    });

    return id;
}

function move(character){
    character.destination_x = webgl_picked_x;
    character.destination_y = webgl_picked_y;
    character.destination_z = webgl_picked_z;
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
          'character': {
            'build_radius': 5,
            'builds': [
              'Factory',
              'Turret',
            ],
            'life_max': 100,
            'power': 100,
            'speed': .2,
            'time': 100,
            'type': 'unit',
          },
          'prefab': {
            'placeholder': [
              3, .03, -3,
              -3, .03, -3,
              -3, .03, 3,
              3, .03, 3,
            ],
            'size_x': 6,
            'size_y': 2,
            'size_z': 6,
            'texture': 'grid.png',
          },
        },
        'Factory': {
          'character': {
            'build_radius': 20,
            'builds': ['Builder'],
            'life_max': 1000,
            'power': 1000,
            'speed': 0,
            'time': 200,
            'type': 'building',
          },
          'prefab': {
            'placeholder': [
              10, .01, -10,
              -10, .01, -10,
              -10, .01, 10,
              10, .01, 10,
            ],
            'size_x': 20,
            'size_y': 10,
            'size_z': 20,
            'texture': 'grid.png',
          },
        },
        'Turret': {
          'character': {
            'build_radius': 10,
            'builds': [],
            'life_max': 500,
            'power': 250,
            'speed': 0,
            'time': 150,
            'type': 'building',
          },
          'prefab': {
            'placeholder': [
              4, .02, -4,
              -4, .02, -4,
              -4, .02, 4,
              4, .02, 4,
            ],
            'texture': 'grid.png',
            'size_x': 8,
            'size_y': 16,
            'size_z': 8,
          },
        },
      }
    );
    for(const element in core_elements){
        if(element.startsWith('build_')){
            delete core_elements[element];
        }
    }
    core_elements.build.textContent = '';
    for(const id in tech){
        const prefixed = 'build_' + id;
        const properties = tech[id].character;
        core_html({
          'parent': core_elements.build,
          'properties': {
            'id': prefixed,
            'innerHTML': id + ' ' + properties.power + 'power ' + properties.time + 'time',
            'onclick': function(){
                if(build_placeholder === id){
                    placeholder_hide();
                    return;
                }

                build({
                  'id': webgl_character_id,
                  'placeholder': properties.type === 'building',
                  'type': id,
                });
            },
            'style': 'display:none',
            'type': 'button',
          },
          'store': prefixed,
          'type': 'button',
        });
    }

    load_testmap();
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
    placeholder.vertices = tech[id].prefab.placeholder;

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
    audio_state_all(!core_menu_open);

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
                core_escape(true);
                event.preventDefault();
            }
        },
      },
      'events': {
        'camera_reset': {
          'onclick': camera_reset,
        },
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'build_placeholder': '',
        'tech': {},
      },
      'info': '<button class=medium id=new_game type=button>Start RTS Test</button><button id=camera_reset type=button>Reset Camera</button><br>'
        + '<table><tr><td>Power<td class=power>'
        + '<tr><td>Selected<td class=selected>'
        + '<tr><td>Life<td><span class=life></span>/<span class=life_max></span>'
        + '<tr><td>Speed<td class=speed>'
        + '<tr><td>Team<td class=team>'
        + '<tr><td>Type<td class=type>'
        + '<tr><td>Making<td><span class=making></span> <span class=making_time></span></table>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
        'pointerdown': {
          'todo': webgl_pick,
        },
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerup': {
          'todo': handle_picking,
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage': {
        'enemies': 3,
      },
      'storage_controls': true,
      'storage_menu': '<table><tr><td><input class=mini id=enemies max=3 min=0 step=1 type=number><td>Enemies</table>',
      'title': 'Docs.htm',
      'ui': '<table><tr><td>Power<td id=power>'
        + '<tr><td>Selected<td id=selected>'
        + '<tr><td>Life<td><span id=life></span>/<span id=life_max></span>'
        + '<tr><td>Speed<td id=speed>'
        + '<tr><td>Team<td id=team>'
        + '<tr><td>Type<td id=type>'
        + '<tr><td>Making<td><span id=making></span> <span id=making_time></span></table>'
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
        if(player.color
          && id !== webgl_character_id){
            handle_ai(player);
        }
    }

    const player = webgl_characters[webgl_character_id];
    const selected = webgl_characters[player.selected];

    if(selected?.team === player.id){
        const placeholder = webgl_characters._rts_placeholder_move;
        placeholder.position_x = selected.destination_x;
        placeholder.position_y = selected.destination_y;
        placeholder.position_z = selected.destination_z;
        entity_entities._rts_placeholder_move_entity.draw = distance_destination(selected);
    }
    if(build_placeholder.length){
        const placeholder = webgl_characters._rts_placeholder_build;
        placeholder.position_x = webgl_picked_x;
        placeholder.position_y = webgl_picked_y;
        placeholder.position_z = webgl_picked_z;
    }

    for(const id in webgl_characters){
        const character = webgl_characters[id];
        if(!character.type
          || character.id === character.making){
            continue;
        }

        const properties = tech[character.type].character;
        if(properties.type === 'building'){
            if(character.making
              && character.time > 0){
                const making = webgl_characters[character.making];
                if(math_distance({
                    'x0': character.position_x,
                    'y0': character.position_y,
                    'z0': character.position_z,
                    'x1': making.position_x,
                    'y1': making.position_y,
                    'z1': making.position_z,
                  }) < properties.build_radius){
                    character.time--;
                    character.life = Math.min(
                      character.life + Math.ceil(properties.life_max / properties.time),
                      character.life_max
                    );
                    making.time--;
                    if(character.time <= 0){
                        making.destination_x = character.destination_x;
                        making.destination_y = character.destination_y;
                        making.destination_z = character.destination_z;
                        character.making = '';
                        making.making = '';
                    }
                }
            }
            continue;
        }

        if(distance_destination(character)){
            const angle_xz = Math.atan2(
              character.position_z - character.destination_z,
              character.position_x - character.destination_x
            );
            character.change_position_x = core_round({
              'number': Math.cos(angle_xz) * -properties.speed,
            });
            character.change_position_z = core_round({
              'number': Math.sin(angle_xz) * -properties.speed,
            });

        }else{
            character.change_position_x = 0;
            character.change_position_z = 0;
        }
    }

    core_ui_update({
      'classname': true,
      'ids': {
        'life': selected?.life,
        'life_max': selected?.life_max,
        'making': selected?.making,
        'making_time': selected?.time || '',
        'power': player.power,
        'selected': player.selected,
        'speed': tech[selected?.type]?.character?.speed,
        'team': selected?.team,
        'type': selected?.type,
      },
    });
    for(const element in core_elements){
        if(element.startsWith('build_')){
            core_elements[element].style.borderColor = player.power < tech[element.slice(6)].character.power
              ? '#f00'
              : '#999';
        }
    }
}

function select(id){
    const player = webgl_characters[webgl_character_id];
    player.selected = id;

    if(player.selected === ''
      || webgl_characters[player.selected].team !== player.id){
        entity_entities._rts_placeholder_move_entity.draw = false;
        for(const id in tech){
            core_elements['build_' + id].style.display = 'none';
        }

    }else{
        const builds = tech[webgl_characters[player.selected].type].character.builds;
        for(const id in tech){
            core_elements['build_' + id].style.display = builds.includes(id)
              ? 'block'
              : 'none';
        }
    }
}

function team_create({
  id = webgl_character_id,
  power = 0,
  x = 0,
  y = 0,
  z = 0,
} = {}){
    webgl_character_init({
      'camera_zoom': 50,
      'color':  webgl_vertexcolorarray({
        'vertexcount': 1,
      }),
      'controls': 'rts',
      'id': id,
      'level': -1,
      'power': power,
      'selected': '',
      'spawn': {
        'camera_rotate_x': 60,
        'position_x': x,
        'position_y': y,
        'position_z': z,
      },
      'speed': 2,
    });
    make({
      'team': id,
      'type': 'Builder',
      'x': x,
      'y': y,
      'z': z,
    });
}
