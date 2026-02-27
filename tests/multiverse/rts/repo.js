'use strict';

function attack(entity){
    console.log(webgl_characters[webgl_character_id].selected, 'is attacking', entity.id);
}

function build({
  build,
  id,
  placeholder,
} = {}){
    const player = webgl_characters[id];
    const properties = tech[build];
    if(player.power < properties.power){
        return;
    }
    const selected = entity_entities[player.selected];
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
        x = selected.attach_x;
        y = selected.attach_y;
        z = selected.attach_z;

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

function death(entity){
    if(entity.making){
        entity_entities[entity.making].making = '';
    }

    entity_remove({
      'entities': [
        entity.id,
      ],
    });
}

function handle_ai(player){
}

function handle_picking(event){
    if(core_key_shift
      || event.target.id !== 'canvas'){
        return;
    }

    if(build_placeholder.length){
        if(core_pointer.down_0){
            build({
              'id': webgl_character_id,
              'build': build_placeholder,
            });

        }else if(core_pointer.down_1){
            placeholder_hide();
        }

        return;
    }

    const player = webgl_characters[webgl_character_id];
    const selected = entity_entities[player.selected];
    if(core_pointer.down_1
      && !selected){
        return;
    }

    const entity = webgl_pick_entity();
    if(core_pointer.down_0){
        select(entity.team ? entity.id : '');

    }else if(entity
      && core_pointer.down_1
      && selected.team === player.id
      && selected.time === 0){
        if(entity.id === selected.id){
            entity.destination_x = entity.attach_x;
            entity.destination_y = entity.attach_y;
            entity.destination_z = entity.attach_z;
            return;
        }

        const properties = tech[selected.type];
        const moveable = properties.type === 'unit'
          || properties.builds.length;
        if(!entity.team){
            if(moveable){
                move(selected);
            }

            return;
        }

        const owned = entity.team === player.id;
        if(moveable){
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
                'picking_xyz': true,
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
    const selected = entity_entities[player.selected];

    const id = type + entity_id_count;
    webgl_entity_create({
      'entities': [{
        'attach_x': x,
        'attach_y': y,
        'attach_z': z,
        'destination_x': x,
        'destination_y': y,
        'destination_z': z,
        'id': id,
        'making': selected?.id || '',
        'picking': true,
        'team': team,
        'time': time,
        'type': type,
        'vertex_colors': player.color,
        ...tech[type].properties,
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
          'life': 100,
          'power': 100,
          'speed': .5,
          'time': 100,
          'type': 'unit',
          'properties': {
            'life': 100,
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
          'builds': ['Builder'],
          'life': 1000,
          'power': 1000,
          'speed': 0,
          'time': 200,
          'type': 'building',
          'properties': {
            'life': 1000,
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
          'life': 500,
          'power': 250,
          'speed': 0,
          'time': 150,
          'type': 'building',
          'properties': {
            'life': 500,
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
        core_html({
          'parent': core_elements.build,
          'properties': {
            'id': prefixed,
            'innerHTML': id + '<br>' + tech[id].type + '<br>Power ' + tech[id].power + '<br>Time ' + tech[id].time,
            'onclick': function(){
                if(build_placeholder === id){
                    placeholder_hide();
                    return;
                }

                build({
                  'build': id,
                  'id': webgl_character_id,
                  'placeholder': tech[id].type === 'building',
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
        const selected = entity_entities[player.selected];
        placeholder.position_x = selected.destination_x;
        placeholder.position_y = selected.destination_y;
        placeholder.position_z = selected.destination_z;
        entity_entities._rts_placeholder_move_entity.draw = Math.abs(selected.attach_x - selected.destination_x) > 1
          || Math.abs(selected.attach_y - selected.destination_y) > 1
          || Math.abs(selected.attach_z - selected.destination_z) > 1;

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

    for(const id in entity_entities){
        const entity = entity_entities[id];
        if(!entity.team){
            continue;
        }

        if(tech[entity.type].type === 'building'){
            if(entity.making){
                const making = entity_entities[entity.making];
                if(Math.abs(entity.attach_x - making.attach_x) < 1
                  && Math.abs(entity.attach_y - making.attach_y) < 1
                  && Math.abs(entity.attach_z - making.attach_z) < 1){
                    if(entity.time > 0){
                        entity.time--;
                        if(entity.time === 0){
                            const made = entity_entities[entity.making];
                            made.destination_x = entity.destination_x;
                            made.destination_y = entity.destination_y;
                            made.destination_z = entity.destination_z;
                            entity.making = '';
                        }
                    }
                }
            }
            continue;
        }

        if(Math.abs(entity.attach_x - entity.destination_x) > 1
          || Math.abs(entity.attach_y - entity.destination_y) > 1
          || Math.abs(entity.attach_z - entity.destination_z) > 1){
            const speed = tech[entity.type].speed;
            const angle_xz = Math.atan2(
              entity.attach_z - entity.destination_z,
              entity.attach_x - entity.destination_x
            );
            entity.attach_x -= core_round({
              'number': Math.cos(angle_xz) * speed,
            });
            entity.attach_z -= core_round({
              'number': Math.sin(angle_xz) * speed,
            });

        }else if(entity.time > 0){
            entity.time--;

            if(entity.time === 0){
                entity.making = '';
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
    const selected = entity_entities[player.selected];
    core_ui_update({
      'classname': true,
      'ids': {
        'life': selected?.life,
        'life_max': tech[selected?.type]?.life,
        'making': selected?.making,
        'making_time': selected?.time || '',
        'power': player.power,
        'selected': player.selected,
        'speed': tech[selected?.type]?.speed,
        'team': selected?.team,
        'type': selected?.type,
      },
    });
    for(const element in core_elements){
        if(element.startsWith('build_')){
            const id = element.slice(6);
            core_elements[element].style.borderColor = webgl_characters[webgl_character_id].power < tech[id].power
              ? '#f00'
              : '#999';
        }
    }
}
