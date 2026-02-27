'use strict';

function collect({
  flag,
  id,
  type,
  value = 1,
} = {}){
    if(flag){
        delete flags.skymap[flag];
    }

    webgl_stat_modify({
      'stat': type,
      'target': webgl_characters[webgl_character_id],
      'value': value,
    });

    audio_start('boop');
    entity_remove({
      'entities': [id],
    });
}

function level_properties(){
    return {
      'camera_zoom_min': 10,
      'pointerlock': true,
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
            'id': 'platformer_cave',
            'base': true,
            'spawn': false,
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
              'front': {
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_skymap',
                    'type': 'function',
                    'value': 1,
                  },
                ],
                'texture': 'door.png',
                'vertex_colors': [
                  1, 1, 1, 1,
                ],
              },
              'position_y': 10,
              'size_x': -20,
              'size_y': -20,
              'size_z': -20,
            },
          },
        ],
      },
    });
}

function load_skymap(spawn){
    const spawners = [
      {},
      {
        'camera_rotate_y': 90,
        'position_x': -10,
        'position_z': -130,
        'rotate_y': 90,
      }
    ];
    const flagged = [];
    if(flags.skymap.coin_0){
        flagged.push({
          'id': 'coin_0',
          'attach_y': 3,
          'attach_z': -80,
          'billboard': true,
          'collision': false,
          'event_limit': 1,
          'event_range': 3,
          'event_todo': [
            {
              'todo': 'collect',
              'type': 'function',
              'value': {
                'flag': 'coin_0',
                'id': 'coin_0',
                'type': 'coins',
              },
            },
          ],
          'vertex_colors': [
            .7, .7, 0, 1,
          ],
          'vertices': [
            1, 1, -0,
            -1, 1, -0,
            -1, -1, 0,
            1, -1, 0,
          ],
        });
    }
    if(flags.skymap.lives_0){
        flagged.push({
          'id': 'lives_0',
          'attach_y': 3,
          'attach_z': -135,
          'billboard': true,
          'collision': false,
          'event_limit': 1,
          'event_range': 3,
          'event_todo': [
            {
              'todo': 'collect',
              'type': 'function',
              'value': {
                'flag': 'lives_0',
                'id': 'lives_0',
                'type': 'lives',
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
        });
    }
    if(flags.skymap.key_0){
        flagged.push({
          'id': 'key_0',
          'alpha': .99999,
          'attach_x': -15,
          'attach_y': 3,
          'attach_z': -80,
          'billboard': true,
          'collision': false,
          'event_limit': 1,
          'event_range': 3,
          'event_todo': [
            {
              'todo': 'collect',
              'type': 'function',
              'value': {
                'flag': 'key_0',
                'id': 'key_0',
                'type': 'keys',
              },
            },
            {
              'stat': 'attach_x',
              'todo': 'gate_0',
              'value': -60,
            },
          ],
          'texture': 'key.png',
          'texture_align': '00101101',
          'vertex_colors': [
            1, 1, 1, 1,
          ],
          'vertices': [
            2, 2, -0,
            -2, 2, -0,
            -2, -2, 0,
            2, -2, 0,
          ],
        });
    }
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'clear_color': [0, 0, .2],
        'spawn': spawners[spawn],
        'paths': [
          {
            'id': 'fireball_0',
            'end': 'warp',
            'points': [
              {
                'position_x': -50,
              },
              {
                'position_x': 50,
              },
            ],
          },
          {
            'id': 'platform_0',
            'end': 'loop',
            'speed': .2,
            'points': [
              {
                'position_y': 0,
              },
              {
                'position_x': 15,
              },
              {
                'position_z': 15,
              },
              {
                'position_x': -15,
              },
              {
                'position_z': 0,
              },
              {
                'position_x': 0,
              },
              {
                'position_y': -15,
              },
            ],
          },
          {
            'id': 'wallmoving_0',
            'end': 'loop',
            'points': [
              {
                'position_z': -150,
              },
              {
                'position_z': -110,
              },
            ],
          },
        ],
        'characters': [
          {
            'id': 'platformer_skymap',
            'base': true,
            'spawn': false,
            'entities': [
              ...flagged,
              {
                'id': 'door',
                'attach_x': -20,
                'attach_y': 10,
                'attach_z': -130,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'load_cave',
                    'type': 'function',
                  },
                ],
                'rotate_z': 270,
                'texture': 'door.png',
                'texture_align': '10110100',
                'vertex_colors': [
                  1, 1, 1, 1,
                ],
                'vertices': [
                  10, 0, -10,
                  -10, 0, -10,
                  -10, 0, 10,
                   10, 0, 10,
                ],
              },
              {
                'id': 'gate_0',
                'attach_x': flags.skymap.key_0 ? 0 : -60,
                'attach_z': -100,
                'rotate_x': 90,
                'texture': 'grid.png',
                'vertex_colors': [
                  .5, .5, .5, 1,
                ],
                'vertices': [
                  30, 0, -20,
                  -30, 0, -20,
                  -30, 0, 20,
                  30, 0, 20,
                ],
              },
              {
                'id': 'life_0',
                'attach_x': 15,
                'attach_y': 3,
                'attach_z': -80,
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
            ],
          },
          {
            'id': 'fireball_0',
            'level': 0,
            'path_id': 'fireball_0',
            'position_x': -50,
            'position_y': 3,
            'position_z': -60,
            'spawn': false,
            'entities': [
              {
                'id': 'fireball_0_body',
                'billboard': true,
                'collision': false,
                'event_range': 3,
                'event_todo': [
                  {
                    'todo': 'webgl_character_hit',
                    'type': 'function',
                    'value': {
                      'id': 'fireball_0',
                      'target': '_target',
                      'xz': .3,
                      'y': .5
                    }
                  },
                  {
                    'todo': 'audio_start',
                    'type': 'function',
                    'value': 'boop',
                  },
                  {
                    'stat': 'position_x',
                    'todo': 'fireball_0',
                    'type': 'character',
                    'value': -100,
                  },
                  {
                    'stat': 'life',
                    'todo': '_me',
                    'type': 'character',
                    'value': -1,
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
            'id': 'platform_0',
            'level': 0,
            'path_id': 'platform_0',
            'spawn': false,
          },
          {
            'id': 'wallmoving_0',
            'level': 0,
            'path_id': 'wallmoving_0',
            'position_y': 10,
            'position_z': -150,
            'spawn': false,
            'entities': [
              {
                'id': 'wallmoving_0',
                'rotate_x': 90,
                'texture': 'grid.png',
                'vertex_colors': [
                  .5, .5, .5, 1,
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
        ],
        'prefabs': [
          {
            'type': 'prefab_platform',
            'properties': {
              'prefix': 'platform_0',
              'character': 'platform_0',
              'position_y': -5,
              'size_x': 40,
              'size_y': 10,
              'size_z': 40,
            },
          },
          {
            'type': 'prefab_platform',
            'properties': {
              'prefix': 'platform_1',
              'position_y': -5,
              'position_z': -100,
              'size_x': 40,
              'size_y': 10,
              'size_z': 100,
            },
          },
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new game? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    flags = {
      'skymap': {
        'coin_0': true,
        'key_0': true,
        'lives_0': true,
      },
    };

    load_skymap(0);
    webgl_character_init({
      'camera_zoom': 25,
      'coins': 0,
      'collide_bottom': 5,
      'collide_top': 1,
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'keys': 0,
      'level': 0,
      'life_max': 10,
      'lives': 3,
      'model': {},
      'spawn': {
        'camera_rotate_x': 30,
        'position_y': 6,
      },
    });
    update_ui();
}

function prefab_platform(args){
    webgl_primitive_cuboid({
      ...args,
      'all': {
        'vertex_colors': [
          .2, .2, .2, 1,
        ],
      },
      'top': {
        'texture': 'grid.png',
        'texture_x': Math.floor(args.size_x / 10),
        'texture_y': Math.floor(args.size_z / 10),
        'vertex_colors': [
          .5, .5, .5, 1,
        ],
      },
    });
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
        'flags': {},
      },
      'info': '<button class=medium id=new_game type=button>Start Platformer Test</button><br><br>Life: <span class=life></span>/<span class=life_max></span><br>'
        + 'Lives: <span class=lives></span><br>'
        + 'Speed: <span id=speed></span><br>'
        + 'Coins: <span class=coins></span><br>'
        + 'Keys: <span class=keys></span>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
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
      'ui': 'Life: <span id=life></span>/<span id=life_max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Coins: <span id=coins></span><br>'
        + 'Keys: <span id=keys></span>',
    });
}

function repo_stat_modify(){
    update_ui();
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'classname': true,
      'ids': {
        'coins': character.coins,
        'keys': character.keys,
        'life': character.life,
        'life_max': character.life_max,
        'lives': character.lives,
        'speed': character.speed,
      },
    });
}
