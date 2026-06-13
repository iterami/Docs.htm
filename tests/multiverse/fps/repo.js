'use strict';

function collect({
  id,
  type,
  value,
} = {}){
    if(type === 'weapon'){
        weapon_equip({
          'id': webgl_character_id,
          'weapon': value,
        });

    }else{
        webgl_stat_modify({
          'stat': type,
          'target': webgl_characters[webgl_character_id],
          'value': value,
        });
    }

    audio_start('boop');
    entity_remove({
      'entities': [id],
    });
}

function level_properties(){
    return {
      'camera_zoom': 0,
      'camera_zoom_max': 0,
      'pointerlock': true,
      'reticle': true,
      'y_min': -100,
    };
}

function load_bridge(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'characters': [
          {
            'id': 'map_bridge',
            'base': true,
            'spawn': false,
            'entities': [
              {
                'id': 'bridge',
                'attach_z': -80,
                'texture': 'grid.png',
                'texture_x': 2,
                'texture_y': 10,
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
              {
                'id': 'life_0',
                'attach_x': -40,
                'attach_y': 6,
                'billboard': true,
                'collision': false,
                'event_limit': 1,
                'event_range': 3,
                'event_todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'life_0',
                      'type': 'life',
                      'value': 10,
                    },
                  },
                ],
                'vertex_colors': [
                  0, .7, 0, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
              {
                'id': 'lives_0',
                'attach_x': -40,
                'attach_y': 6,
                'attach_z': -180,
                'billboard': true,
                'collision': false,
                'event_limit': 1,
                'event_range': 3,
                'event_todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'lives_0',
                      'type': 'lives',
                      'value': 1,
                    },
                  },
                ],
                'vertex_colors': [
                  .2, .4, 8, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
              {
                'id': 'weapon_0',
                'attach_x': 40,
                'attach_y': 6,
                'billboard': true,
                'collision': false,
                'event_limit': 1,
                'event_range': 3,
                'event_todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'weapon_0',
                      'type': 'weapon',
                      'value': 'test_weapon',
                    },
                  },
                ],
                'vertex_colors': [
                  .7, 0, 0, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
            ],
          },
          {
            ...stats(),
            'id': 'test_enemy',
            'spawn': {
              'position_z': -150,
            },
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'blue',
              'position_y': -5,
              'size_x': 100,
              'size_y': 10,
              'size_z': 60,
              'top': {
                'texture': 'grid.png',
                'texture_x': 10,
                'texture_y': 6,
              },
              'vertex_colors': [
                .5, .5, .5, 1,
              ],
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'red',
              'position_y': -5,
              'position_z': -160,
              'size_x': 100,
              'size_y': 10,
              'size_z': 60,
              'top': {
                'texture': 'grid.png',
                'texture_x': 10,
                'texture_y': 6,
              },
              'vertex_colors': [
                .5, .5, .5, 1,
              ],
            },
          },
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new match? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    core_object_reset(weapons);
    Object.assign(
      weapons,
      {
        'test_weapon': {
          'ammo': 10,
          'reload': 50,
        },
      }
    );

    load_bridge();
    webgl_character_init(stats());
    update_ui();
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
        'weapons': {},
      },
      'info': '<button class=medium id=new_game type=button>Start FPS Test</button><br><br>Life: <span class=life></span>/<span class=life_max></span><br>'
        + 'Lives: <span class=lives></span><br>'
        + 'Speed: <span id=speed></span><br>'
        + 'Weapon: <span class=weapon></span><br>'
        + 'Ammo: <span class=ammo></span>/<span class=ammo_max></span><br>'
        + 'Reload: <span class=reload></span></span>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
        'pointerdown': {
          'todo': function(){
              weapon_fire(webgl_character_id);
          },
        },
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life_max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Weapon: <span id=weapon></span><br>'
        + 'Ammo: <span id=ammo></span>/<span id=ammo_max></span><br>'
        + 'Reload: <span id=reload></span></span>',
    });
}

function repo_logic(){
    for(const id in webgl_characters){
        const character = webgl_characters[id];
        if(character.reload > 0){
            character.reload--;
        }
    }

    core_ui_update({
      'classname': true,
      'ids': {
        'reload': webgl_characters[webgl_character_id].reload,
      },
    });
}

function repo_stat_modify(){
    update_ui();
}

function stats(){
    return {
      'ammo': 0,
      'ammo_max': 0,
      'collide_bottom': 8,
      'collide_top': 2,
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'life_max': 100,
      'lives': 5,
      'model': {},
      'reload': 0,
      'spawn': {
        'position_x': 0,
        'position_y': 6,
        'position_z': 0,
      },
      'weapon': '',
    };
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'classname': true,
      'ids': {
        'ammo': character.ammo,
        'ammo_max': character.ammo_max,
        'life': character.life,
        'life_max': character.life_max,
        'lives': character.lives,
        'reload': character.reload,
        'speed': character.speed,
        'weapon': character.weapon,
      },
    });
}

function weapon_equip({
  id,
  weapon,
} = {}){
    const character = webgl_characters[id];
    const equip = weapons[weapon];

    if(character.weapon !== weapon){
        character.weapon = weapon;
        character.ammo_max = equip.ammo;
        character.reload = equip.reload;
    }

    character.ammo = equip.ammo;
    update_ui();
}

function weapon_fire(id){
    const character = webgl_characters[webgl_character_id];
    if(character.weapon.length === 0
      || character.ammo === 0
      || character.reload !== 0){
        return;
    }

    character.reload = weapons[character.weapon].reload;
    character.ammo--;
    audio_start('boop');
    update_ui();
}
