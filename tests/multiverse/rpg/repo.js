'use strict';

function debug_xp(){
    if(!webgl_characters[webgl_character_id]){
        return;
    }

    webgl_stat_modify({
      'stat': 'level_xp',
      'target': webgl_characters[webgl_character_id],
      'value': Number(document.getElementById('debug_xp').value),
    });
}

function heal(){
    const character = webgl_characters[webgl_character_id];
    if(!character
      || (character.life >= character.life_max
         && character.mana >= character.mana_max)
      || character.life <= 0){
        return;
    }

    character.life = character.life_max;
    character.mana = character.mana_max;

    update_ui();
}

function item_drop(item){
}

function item_pickup(item){
}

function item_toggle(item){
}

function kill(id){
    if(webgl_characters[id].team !== 0
      && webgl_characters[id].level >= webgl_characters[webgl_character_id].level - 10){
        webgl_stat_modify({
          'stat': 'level_xp',
          'target': webgl_characters[id],
        });
    }

    if(Math.random() < webgl_characters[id].drop_chance){
        item_drop(webgl_characters[id].drops[core_random_integer(webgl_characters[id].drops.length)]);
    }
}

function level_properties(){
    return {
      'camera_zoom_min': 10,
      'picking': 2,
      'y_min': -100,
    };
}

function load_cave(id){
    if(id !== webgl_character_id){
        return;
    }

    if(floor > 0){
        webgl_stat_modify({
          'stat': 'level_xp',
          'target': webgl_characters[webgl_character_id],
          'value': floor,
        });
    }
    floor++;
    const cave_length = Math.random() * (200 + floor) + 150 + floor;
    const cave_length_half = cave_length / 2;
    const cave_offset = 25;
    const cave_width = Math.random() * 100 + 100;
    const cave_width_half = cave_width / 2;

    const lava = [];
    const npcs = [];
    for(let i = 0; i < floor; i++){
        const lava_x = Math.random() * 21 + 2;
        const lava_z = Math.random() * 21 + 2;
        lava.push({
          'id': 'lava_' + i,
          'attach_x': Math.random() * cave_width - cave_width_half,
          'attach_y': .01,
          'attach_z': Math.random() * cave_length - cave_length_half,
          'event_range': 0,
          'event_todo': [
            {
              'stat': 'life',
              'value': -1,
            },
          ],
          'texture': 'lavaleaf.png,.1,.1',
          'vertex_colors': [
            1, 0, 0, 1,
          ],
          'vertices': [
            lava_x, 0, -lava_z,
            -lava_x, 0, -lava_z,
            -lava_x, 0, lava_z,
            lava_x, 0, lava_z,
          ],
        });
        const npc_id = 'npc_enemy_' + i;
        npcs.push({
          ...stats(1),
          'id': npc_id,
          'level': floor,
          'model': {
            'top': {
              'event_range': 5,
              'event_todo': [
                {
                  'todo': 'webgl_character_hit',
                  'type': 'function',
                  'value': {
                    'id': npc_id,
                    'target': '_target',
                    'xz': .3,
                    'y': .5,
                  },
                },
                {
                  'stat': 'life',
                  'target': '_target',
                  'value': -10,
                },
              ],
            },
          },
          'spawn': {
            'position_x': Math.random() * cave_width - cave_width_half,
            'position_z': Math.random() * cave_length - cave_length_half,
          },
        });
    }

    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'fog_end': 100 + core_random_integer(50),
        'spawn': {
          'position_z': cave_length_half,
        },
        'characters': [
          {
            'id': 'rpg_cave',
            'spawn': false,
            'entities': [
              {
                'id': 'exit_up',
                'attach_y': .01,
                'attach_z': cave_length_half + cave_offset,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_town',
                    'type': 'function',
                    'value': {
                      'spawn': 1,
                      'target': '_target',
                    },
                  },
                ],
                'vertex_colors': [
                  0, 1, 0, 1,
                ],
                'vertices': [
                  10, 0, -5,
                  -10, 0, -5,
                  -10, 0, 5,
                  10, 0, 5,
                ],
              },
              {
                'id': 'exit_down',
                'attach_x': Math.random() * cave_width - cave_width / 2,
                'attach_y': .01,
                'attach_z': -cave_length_half - cave_offset,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_cave',
                    'type': 'function',
                    'value': '_target',
                  },
                ],
                'vertex_colors': [
                  0, 0, 1, 1,
                ],
                'vertices': [
                  10, 0, -5,
                  -10, 0, -5,
                  -10, 0, 5,
                  10, 0, 5,
                ],
              },
              ...lava,
            ],
          },
          ...npcs,
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'cave',
              'all': {
                'texture': 'lavaleaf.png',
                'texture_x': 1 + core_random_integer(3),
                'texture_y': 1 + core_random_integer(3),
                'vertex_colors': [
                  1, 1, 1, 1,
                ],
              },
              'character': 'rpg_cave',
              'position_y': 25,
              'size_x': -cave_width,
              'size_y': -50,
              'size_z': -cave_length - cave_offset * 2 - 10,
            },
          },
        ],
      },
    });
    update_ui();
}

function load_town(args){
    if(args?.spawn === 1
      && args.target !== webgl_character_id){
        return;
    }

    floor = 0;

    const spawners = [
      {},
      {
        'camera_rotate_y': 180,
        'position_x': 100,
        'position_z': -65,
        'rotate_y': 180,
      }
    ];
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'spawn': spawners[args?.spawn || 0],
        'paths': [
          {
            'id': 'path_lava',
            'end': 'reverse',
            'points': [
              {
                'position_x': 130,
                'position_z': -40,
              },
              {
                'position_x': 130,
                'position_z': 5,
              },
              {
                'position_x': 85,
                'position_z': 5,
              },
              {
                'position_x': 85,
                'position_z': -40,
              },
              {
                'position_x': 130,
                'position_z': -40,
              },
            ],
            'speed': .4,
          },
        ],
        'characters': [
          {
            'id': 'rpg_town',
            'spawn': false,
            'entities': [
              {
                'id': 'lava',
                'attach_x': 130,
                'attach_y': .01,
                'attach_z': 5,
                'event_range': 0,
                'event_todo': [
                  {
                    'stat': 'life',
                    'value': -1,
                  },
                ],
                'texture': 'lavaleaf.png,.1,.1',
                'vertex_colors': [
                  1, 0, 0, 1,
                ],
                'vertices': [
                  20, 0, -20,
                  -20, 0, -20,
                  -20, 0, 20,
                  20, 0, 20,
                ],
              },
              {
                'id': 'cave_entrance',
                'attach_x': 100,
                'attach_y': 10,
                'attach_z': -74.99,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_cave',
                    'type': 'function',
                    'value': '_target',
                  },
                ],
                'rotate_x': 90,
                'vertex_colors': [
                  0, 0, 0, 1,
                ],
                'vertices': [
                  20, 0, -10,
                  -20, 0, -10,
                  -20, 0, 10,
                  20, 0, 10,
                ],
              },
            ],
          },
          {
            ...stats(0),
            'id': 'npc_friend',
            'model': {
              'top': {
                'event_range': 10,
                'event_todo': [
                  {
                    'todo': 'heal',
                    'type': 'function',
                  },
                ],
              },
            },
            'spawn': {
              'position_x': 0,
              'position_z': -50,
              'rotate_y': 0,
            },
          },
          {
            'id': 'platform',
            'path_id': 'path_lava',
            'position_x': 130,
            'position_y': 2,
            'position_z': -40,
            'spawn': false,
          },
          {
            'id': 'spike',
            'collide_bottom': 1,
            'collide_top': 1,
            'collide_xz': 2,
            'model': spike_model('spike', 3, 1, 1),
            'path_id': 'path_lava',
            'path_point': 2,
            'position_x': 85,
            'position_y': 4,
            'position_z': 5,
            'spawn': false,
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'town',
              'all': {
                'texture': 'grid.png',
                'texture_x': 20,
                'texture_y': 10,
                'vertex_colors': [
                  1, 1, 1, 1,
                ],
              },
              'character': 'rpg_town',
              'position_x': 50,
              'position_y': 25,
              'position_z': -25,
              'size_x': -200,
              'size_y': -50,
              'size_z': -100,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'platform',
              'all': {
                'texture': 'grid.png',
              },
              'character': 'platform',
              'size_x': 10,
              'size_y': 1,
              'size_z': 10,
            },
          },
          {
            'type': 'prefabs_webgl_lines_path',
            'properties': {
              'character': 'rpg_town',
              'path': 'path_lava',
              'prefix': 'path_lava'
            }
          },
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new adventure? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    floor = 0;

    load_town();
    webgl_character_init({
      ...stats(0),
      'level': 0,
    });
    update_ui();
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
        'floor': 0,
        'skills': {
          'Bolt': {
            'damage': 1,
            'mana': 1,
          },
        },
        'talents': {
          'Jump Height': {
            'round': 2,
            'stat': 'jump_height',
            'value': .01,
          },
          'Life': {
            'stat': 'life_max',
            'value': 1,
          },
          'Mana': {
            'stat': 'mana_max',
            'value': 1,
          },
          'Speed': {
            'round': 2,
            'stat': 'speed',
            'value': .01,
          },
        },
      },
      'info': '<button id=new_game type=button>Start RPG Test</button><br><br>Level: <span id=level></span> (<span id=level_xp></span>/<span id=level_xp_max></span> xp <span class=xp_percent></span>%)<br>'
        + 'Life: <span class=life></span>/<span class=life_max></span><br>'
        + 'Mana: <span class=mana></span>/<span class=mana_max></span><br>'
        + 'Jump Height: <span id=jump_height></span><br>'
        + 'Speed: <span id=speed></span>'
        + '<div id=tabs_rpg></div><div id=tabcontents_rpg></div>',
      'keybinds': {
        'Backquote': {
          'down': function(){
              webgl_characters[webgl_character_id].automove = !webgl_characters[webgl_character_id].automove;
          },
        },
      },
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerup': {
          'todo': webgl_pick_entity,
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': 'Skill: <span id=skill></span><br>'
        + 'Life: <span id=life></span>/<span id=life_max></span><br>'
        + 'Mana: <span id=mana></span>/<span id=mana_max></span><br>'
        + 'XP: <span id=xp_percent></span>%<br>'
        + 'Floor: <span id=floor></span>',
    });
    core_tab_create({
      'content': '<div id=equipment></div>'
        + 'Inventory: <span id=inventory></span>',
      'group': 'rpg',
      'id': 'inventory',
      'label': 'Inventory',
    });

    let skills_ui = '<ul>';
    for(const skill in skills){
        skills_ui += '<li><button onclick="skill_select(\'' + skill + '\')" type=button>' + skill + '</button>';
    }
    core_tab_create({
      'content': 'Selected Skill: <span class=skill></span><br>' + skills_ui + '</ul>',
      'group': 'rpg',
      'id': 'skills',
      'label': 'Skills',
    });

    let talents_ui = '<ul>';
    for(const talent in talents){
        talents_ui += '<li><button onclick="talent_modify(\'' + talent + '\')" type=button>+</button> +' + talents[talent].value + ' ' + talent;
    }
    core_tab_create({
      'content': 'Talents (<span id=talent_points></span> points): ' + talents_ui + '</ul>',
      'group': 'rpg',
      'id': 'talents',
      'label': 'Talents',
    });
    core_tab_create({
      'content': '<input id=debug_xp step=any type=number value=1000><button onclick=debug_xp() type=button>Gain XP</button>',
      'group': 'core_menu',
      'id': 'debug',
      'label': 'Debug',
    });
}

function repo_stat_modify(args){
    if(args.stat === 'level'){
        args.target.talent_points += args.levels;
    }

    update_ui();
}

function skill_select(id){
    const character = webgl_characters[webgl_character_id];
    if(!character){
        return;
    }

    character.skill = id;
    core_ui_update({
      'class': true,
      'ids': {
        'skill': id,
      },
    });
}

function skill_use(id){
    const character = webgl_characters[id];
    const skill = character.skill;
    if(skill.length === 0){
        return;
    }

    if(character.mana < skill.mana){
        return;
    }

    character.mana -= skill.mana;
}

function spike_model(id, range, xz, y){
    return {
      'all': {
        'collision': false,
        'vertex_colors': [
          1, 0, 0, 1,
        ],
      },
      'top': {
        'event_range': range,
        'event_todo': [
          {
            'todo': 'webgl_character_hit',
            'type': 'function',
            'value': {
              'id': id,
              'target': '_target',
              'xz': xz,
              'y': y,
            },
          },
          {
            'stat': 'life',
            'target': '_target',
            'value': -10,
          },
        ],
      },
    };
}

function stats(team){
    const collide_bottom = 5;
    return {
      'camera_zoom': 25,
      'collide_bottom': collide_bottom,
      'collide_top': 1,
      'collides': true,
      'controls': 'rpg',
      'drop_chance': 0,
      'drops': [],
      'equipment': {
        'head': void 0,
        'neck': void 0,
        'body': void 0,
        'wrist_left': void 0,
        'wrist_right': void 0,
        'hand_left': void 0,
        'holding_left': void 0,
        'hand_right': void 0,
        'holding_right': void 0,
        'rings': [],
        'legs': void 0,
        'foot_left': void 0,
        'foot_right': void 0,
      },
      'gravity': 1,
      'inventory': [
        {
          'id': 'Test Item',
        },
      ],
      'jump_height': .6,
      'level': 1,
      'life_max': 100,
      'lives': 1,
      'mana': 0,
      'mana_max': 0,
      'model': {},
      'npcs': {},
      'skill': '',
      'spawn': {
        'camera_rotate_x': 30,
        'position_y': collide_bottom,
      },
      'speed': .5,
      'talent_points': 0,
      'team': team,
    };
}

function talent_modify(talent){
    const character = webgl_characters[webgl_character_id];
    if(!character
      || character.talent_points <= 0){
        return;
    }

    character.talent_points--;
    webgl_stat_modify({
      ...talents[talent],
      'target': character,
    });
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    if(!character){
        return;
    }

    let equipment_ui = '<ul>';
    for(const slot in character.equipment){
        const item = character.equipment[slot] !== void 0
          ? character.equipment[slot]
          : '';
        equipment_ui += '<li>' + slot + ': ' + item;
    }

    let inventory_ui = '<ul>';
    for(const item in character.inventory){
        inventory_ui += '<li>' + character.inventory[item].id;
    }

    const xp_max = Math.floor(character.level + 1) * 1e3;
    core_ui_update({
      'class': true,
      'ids': {
        'equipment': equipment_ui + '</ul>',
        'floor': floor,
        'inventory': inventory_ui + '</ul>',
        'jump_height': character.jump_height,
        'level': character.level,
        'level_xp': character.level_xp,
        'level_xp_max': xp_max,
        'life': character.life,
        'life_max': character.life_max,
        'mana': character.mana,
        'mana_max': character.mana_max,
        'skill': character.skill,
        'speed': character.speed,
        'talent_points': character.talent_points,
        'xp_percent': core_round({
          'number': character.level_xp / xp_max * 100,
        }),
      },
      'todo': 'innerHTML',
    });
}
