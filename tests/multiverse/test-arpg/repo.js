'use strict';

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

function load_cave(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'characters': [
          {
            'id': 'arpg_cave',
            'spawn': false,
            'entities': [
              {
                'id': 'exit',
                'attach_y': 5,
                'attach_z': 4.99,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_town',
                    'type': 'function',
                    'value': 1,
                  },
                ],
                'rotate_x': 270,
                'vertex_colors': [
                  0, .4, 0, 1,
                ],
                'vertices': [
                  15, 0, -5,
                  -15, 0, -5,
                  -15, 0, 5,
                   15, 0, 5,
                ],
              },
              {
                'id': 'exit_marker',
                'attach_z': 7,
                'collision': false,
                'vertex_colors': [
                  0, .4, 0, 1,
                ],
                'vertices': [
                  15, 0, -2,
                  -15, 0, -2,
                  -15, 0, 2,
                   15, 0, 2,
                ],
              },
            ],
          },
          {
            ...stats(1),
            'id': 'npc_enemy',
            'model': {
              'top': {
                'event_range': 5,
                'event_todo': [
                  {
                    'todo': 'webgl_character_hit',
                    'type': 'function',
                    'value': {
                      'id': 'npc_enemy',
                      'xz': .3,
                      'y': .5
                    }
                  }
                ],
              },
            },
            'spawn': {
              'position_z': -40,
            },
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'cave',
              'all': {
                'vertex_colors': [
                  .3, .3, .3, 1,
                ],
                'texture': 'lavaleaf.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'arpg_cave',
              'position_y': 5,
              'position_z': -25,
              'size_x': -40,
              'size_y': -10,
              'size_z': -60,
            },
          },
        ],
      },
    });
}

function load_town(spawn){
    const spawners = [
      {},
      {
        'position_x': 100,
        'position_z': -65,
      }
    ];
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'clear_color': [0, .2, 0],
        'spawn': spawners[spawn],
        'characters': [
          {
            'id': 'arpg_town',
            'spawn': false,
            'entities': [
              {
                'id': 'home',
                'attach_z': -25,
                'texture': 'grid.png',
                'texture_x': 6,
                'texture_y': 9,
                'vertex_colors': [
                  .5, .5, .5, 1,
                ],
                'vertices': [
                  30, 0, -45,
                  -30, 0, -45,
                  -30, 0, 45,
                  30, 0, 45,
                ],
              },
              {
                'id': 'bridge',
                'attach_x': 50,
                'texture': 'grid.png',
                'texture_x': 4,
                'texture_y': 2,
                'vertex_colors': [
                  .8, .4, 0, 1,
                ],
                'vertices': [
                  20, 0, -10,
                  -20, 0, -10,
                  -20, 0, 10,
                  20, 0, 10,
                ],
              },
              {
                'id': 'forest',
                'attach_x': 100,
                'attach_z': -25,
                'texture': 'lavaleaf.png',
                'vertex_colors': [
                  .1, .4, .1, 1,
                ],
                'vertices': [
                  30, 0, -45,
                  -30, 0, -45,
                  -30, 0, 45,
                  30, 0, 45,
                ],
              },
              {
                'id': 'cave',
                'attach_x': 100,
                'attach_y': 5,
                'attach_z': -70,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_cave',
                    'type': 'function',
                  },
                ],
                'rotate_x': 90,
                'vertex_colors': [
                  0, 0, 0, 1,
                ],
                'vertices': [
                  15, 0, -5,
                  -15, 0, -5,
                  -15, 0, 5,
                   15, 0, 5,
                ],
              },
            ],
          },
          {
            ...stats(0),
            'id': 'npc_friend',
            'spawn': {
              'position_x': 0,
              'position_z': -50,
            },
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

    load_town(0);
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
        'skills': {
          'Bolt': {
            'damage': 1,
            'mana': 1,
          },
        },
        'talents': {
          'Life': {
            'stat': 'life',
            'value': 1,
          },
        },
      },
      'info': '<button id=new_game type=button>Start ARPG Test</button><br><br>Level: <span id=level></span> (<span id=level_xp></span> xp)<br>'
        + 'Life: <span class=life></span>/<span class=life_max></span><br>'
        + 'Mana: <span class=mana></span>/<span class=mana_max></span>'
        + '<div id=rpg_tabs></div><div id=rpg_tabcontent></div>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'pointerup': {
          'todo': webgl_pick_entity,
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': 'Skill: <span id=skill></span><br>'
        + 'Life: <span id=life></span>/<span id=life_max></span><br>'
        + 'Mana: <span id=mana></span>/<span id=mana_max></span>',
    });
    core_tab_create({
      'content': 'Jump Height: <span id=jump_height></span><br>'
        + 'Speed: <span id=speed></span>',
      'group': 'rpg',
      'id': 'stats',
      'label': 'Stats',
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
        talents_ui += '<li>+' + talents[talent].value + ' ' + talent + ' <button onclick="talent_modify(\'' + talent + '\')" type=button>+</button>';
    }
    core_tab_create({
      'content': 'Talents (<span id=talent_points></span> points): ' + talents_ui + '</ul>',
      'group': 'rpg',
      'id': 'talents',
      'label': 'Talents',
    });
}

function repo_stat_modify(){
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

function stats(team){
    return {
      'camera_zoom': 25,
      'collides': true,
      'controls': 'arpg',
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
      'lives': 1,
      'mana': 0,
      'mana_max': 0,
      'model': {
        'bottom': {
          'exclude': true,
        },
      },
      'npcs': {},
      'skill': '',
      'spawn': {
        'camera_rotate_x': 65,
        'position_y': 3,
      },
      'speed': .5,
      'talent_points': 0,
      'talent_points_max': 0,
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
    webgl_stat_modify(talents[talent]);
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

    character.talent_points_max = character.level;

    core_ui_update({
      'class': true,
      'ids': {
        'equipment': equipment_ui + '</ul>',
        'inventory': inventory_ui + '</ul>',
        'jump_height': character.jump_height,
        'level': character.level,
        'level_xp': character.level_xp,
        'life': character.life,
        'life_max': character.life_max,
        'mana': character.mana,
        'mana_max': character.mana_max,
        'skill': character.skill,
        'speed': character.speed,
        'talent_points': character.talent_points_max - character.talent_points,
      },
      'todo': 'innerHTML',
    });
}
