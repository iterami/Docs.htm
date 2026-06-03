'use strict';

function attack(character){
    console.log(webgl_characters[webgl_character_id].selected, 'is attacking', character.id);
}

function build({
  build,
  id,
  placeholder,
} = {}){
    const player = webgl_characters[id];
    const properties = tech[build].character;
    if(player.power < properties.power){
        return;
    }

    const selected = webgl_characters[player.selected];
    if(selected.time > 0){
        return;
    }

    if(placeholder === true){
        placeholder_show(build);
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

    player.power -= properties.power;
    const making = make({
      'team': player.id,
      'time': properties.time,
      'type': build,
      'x': x,
      'y': y,
      'z': z,
    });
    selected.making = making;
    selected.time = properties.time;

    update_ui();
}

function distance_destination(character){
    return math_distance({
      'x0': character.position_x,
      'y0': character.position_y,
      'z0': character.position_z,
      'x1': character.destination_x,
      'y1': character.destination_y,
      'z1': character.destination_z,
    }) > character.speed
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
              'build': build_placeholder,
              'id': webgl_character_id,
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
    const entity = pixelbuffer.picked;
    const character = webgl_characters[pixelbuffer.picked.attach_to];

    if(button === 0){
        select(character.team ? character.id : '');

    }else if(character
      && button === 2
      && selected.team === player.id
      && selected.time === 0){
        if(character.id === selected.id){
            character.destination_x = entity.position_x;
            character.destination_y = entity.position_y;
            character.destination_z = entity.position_z;
            return;
        }

        const properties = tech[selected.type].character;
        const moveable = properties.type === 'unit'
          || properties.builds.length;
        if(!character.team){
            if(moveable){
                move(selected);
            }

            return;
        }

        const owned = character.team === player.id;
        if(moveable){
            if(owned){
                move(selected);

            }else{
                attack(character);
            }

        }else if(!owned){
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
            'collision': false,
            'draw': false,
            'picking_exclude': true,
            'vertex_colors': [
              1, 1, 1, 1,
            ],
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
                'vertex_colors': [
                  .2, .8, .2, 1,
                ],
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
              'all': {
                'texture': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'position_y': 5,
              'size_x': 20,
              'size_y': 10,
              'size_z': 20,
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
        'camera': 90,
        'x': -75,
        'z': -75,
      },
      {
        'camera': 180,
        'x': 75,
        'z': -75,
      },
      {
        'x': -75,
        'z': 75,
      },
      {
        'camera': 270,
        'x': 75,
        'z': 75,
      },
    ];
    team_create({
      ...spawn_properties,
      ...core_random_splice(spawns),
    });
    team_create({
      'id': 'Enemy',
      ...spawn_properties,
      ...core_random_splice(spawns),
    });
}

function make({
  team,
  time,
  type,
  x = 0,
  y = 0,
  z = 0,
} = {}){
    const player = webgl_characters[team];
    const selected = webgl_characters[player.selected];

    const id = team + '_' + type + entity_id_count;
    webgl_character_init({
      'id': id,
      'collides': true,
      'level': 0,
      'spawn': {
        'position_x': x,
        'position_y': y,
        'position_z': z,
      },

      ...tech[type].character,
      'destination_x': x,
      'destination_y': y,
      'destination_z': z,
      'making': selected?.id || '',
      'team': team,
      'time': time,
      'type': type,

      'entities': [{
        ...tech[type].entity,
        'id': id,
        'attach_to': id,
        'picking': true,
        'vertex_colors': player.color,
      }],
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
            'builds': [
              'Factory',
              'Turret',
            ],
            'life': 100,
            'power': 100,
            'speed': .5,
            'time': 100,
            'type': 'unit',
          },
          'entity': {
            'texture': 'grid.png',
            'vertices': [
              3, .03, -3,
              -3, .03, -3,
              -3, .03, 3,
              3, .03, 3,
            ],
          },
        },
        'Factory': {
          'character': {
            'builds': ['Builder'],
            'life': 1000,
            'power': 1000,
            'speed': 0,
            'time': 200,
            'type': 'building',
          },
          'entity': {
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
          'character': {
            'builds': [],
            'life': 500,
            'power': 250,
            'speed': 0,
            'time': 150,
            'type': 'building',
          },
          'entity': {
            'texture': 'grid.png',
            'vertices': [
              5, .02, -5,
              -5, .02, -5,
              -5, .02, 5,
              5, .02, 5,
            ],
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
            'innerHTML': id + '<br>' + properties.type + '<br>Power ' + properties.power + '<br>Time ' + properties.time,
            'onclick': function(){
                if(build_placeholder === id){
                    placeholder_hide();
                    return;
                }

                build({
                  'build': id,
                  'id': webgl_character_id,
                  'placeholder': properties.type === 'building',
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
    placeholder.vertices = tech[id].entity.vertices;

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
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'build_placeholder': '',
        'tech': {},
      },
      'info': '<button class=medium id=new_game type=button>Start RTS Test</button><br><br>Power: <span class=power></span><br>'
        + 'Selected: <span class=selected></span><br>'
        + 'Life: <span class=life></span>/<span class=life_max></span><br>'
        + 'Speed: <span class=speed></span><br>'
        + 'Team: <span class=team></span><br>'
        + 'Type: <span class=type></span><br>'
        + 'Making: <span class=making></span> <span class=making_time></span>',
      'keybinds': {
        'ArrowDown': {
          'down': function(){
              rotate_camera(180);
          },
        },
        'ArrowLeft': {
          'down': function(){
              rotate_camera(270);
          },
        },
        'ArrowRight': {
          'down': function(){
              rotate_camera(90);
          },
        },
        'ArrowUp': {
          'down': function(){
              rotate_camera(0);
          },
        },
      },
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
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': 'Power: <span id=power></span><br>'
        + 'Selected: <span id=selected></span><br>'
        + 'Life: <span id=life></span>/<span id=life_max></span><br>'
        + 'Speed: <span id=speed></span><br>'
        + 'Team: <span id=team></span><br>'
        + 'Type: <span id=type></span><br>'
        + 'Making: <span id=making></span> <span id=making_time></span>'
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
    if(player.selected){
        const placeholder = webgl_characters._rts_placeholder_move;
        const selected = webgl_characters[player.selected];
        placeholder.position_x = selected.destination_x;
        placeholder.position_y = selected.destination_y;
        placeholder.position_z = selected.destination_z;
        entity_entities._rts_placeholder_move_entity.draw = distance_destination(selected);

        core_ui_update({
          'classname': true,
          'ids': {
            'making': selected.making,
            'making_time': selected.time || '',
          },
        });
    }
    if(build_placeholder.length){
        const placeholder = webgl_characters._rts_placeholder_build;
        placeholder.position_x = webgl_picked_x;
        placeholder.position_y = webgl_picked_y;
        placeholder.position_z = webgl_picked_z;
    }

    for(const id in webgl_characters){
        const character = webgl_characters[id];
        if(!character.type){
            continue;
        }

        const properties = tech[character.type].character;
        if(properties.type === 'building'){
            if(character.making){
                const making = webgl_characters[character.making];
                if(math_distance({
                    'x0': character.position_x,
                    'y0': character.position_y,
                    'z0': character.position_z,
                    'x1': making.position_x,
                    'y1': making.position_y,
                    'z1': making.position_z,
                  }) < making.speed){
                    if(character.time > 0){
                        character.time--;
                        if(character.time === 0){
                            making.destination_x = character.destination_x;
                            making.destination_y = character.destination_y;
                            making.destination_z = character.destination_z;
                            character.making = '';
                        }
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

            if(character.time > 0){
                character.time--;

                if(character.time === 0){
                    character.making = '';
                }
            }
        }
    }
}

function rotate_camera(degrees, id){
    webgl_camera_rotate({
      'character': id || webgl_character_id,
      'set': true,
      'y': degrees,
    });
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
              ? 'inline-block'
              : 'none';
        }
    }

    update_ui();
}

function team_create({
  camera = 0,
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
      'lock': {
        'camera_rotate_x': 60,
        'position_y': 5,
      },
      'power': power,
      'selected': '',
      'spawn': {
        'position_x': x,
        'position_y': y,
        'position_z': z,
      },
      'speed': 2,
    });
    rotate_camera(
      camera,
      id
    );
    make({
      'team': id,
      'time': 0,
      'type': 'Builder',
      'x': x,
      'y': y,
      'z': z,
    });
}

function update_ui(){
    const player = webgl_characters[webgl_character_id];
    const selected = webgl_characters[player.selected];
    const properties = tech[selected?.type]?.character;

    core_ui_update({
      'classname': true,
      'ids': {
        'life': selected?.life,
        'life_max': properties?.life,
        'making': selected?.making,
        'making_time': selected?.time || '',
        'power': player.power,
        'selected': player.selected,
        'speed': properties?.speed,
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
