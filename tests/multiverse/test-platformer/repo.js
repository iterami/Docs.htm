'use strict';

function collect(args){
    if(args['flag']){
        delete flags['skymap'][args['flag']];
    }

    const value = args['value'] || 1;
    webgl_stat_modify({
      'stat': args['type'],
      'target': webgl_characters[webgl_character_id],
      'value': value,
    });

    audio_start('boop');
    entity_remove({
      'entities': [args['id']],
    });
}

function level_properties(){
    return {
      'camera-zoom-min': 10,
      'pointerlock': true,
      'y-min': -100,
    };
}

function load_cave(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'characters': [
          {
            'id': 'platformer-cave',
            'spawn': false,
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'cave',
              'all': {
                'vertex-colors': [
                  .3, .3, .3, 1,
                ],
                'texture': 'lavaleaf.png',
              },
              'character': 'platformer-cave',
              'front': {
                'event-range': 0,
                'event-todo': [
                  {
                    'todo': 'load_skymap',
                    'type': 'function',
                    'value': 1,
                  },
                ],
                'texture': 'door.png',
                'vertex-colors': [
                  1, 1, 1, 1,
                ],
              },
              'position-y': 10,
              'size-x': -20,
              'size-y': -20,
              'size-z': -20,
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
        'camera-rotate-y': 90,
        'position-x': -10,
        'position-z': -130,
        'rotate-y': 90,
      }
    ];
    const flagged = [];
    if(flags['skymap']['coin-0']){
        flagged.push({
          'id': 'coin-0',
          'attach-y': 3,
          'attach-z': -80,
          'billboard': true,
          'collision': false,
          'event-limit': 1,
          'event-range': 3,
          'event-todo': [
            {
              'todo': 'collect',
              'type': 'function',
              'value': {
                'flag': 'coin-0',
                'id': 'coin-0',
                'type': 'coins',
              },
            },
          ],
          'vertex-colors': [
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
    if(flags['skymap']['lives-0']){
        flagged.push({
          'id': 'lives-0',
          'attach-y': 3,
          'attach-z': -135,
          'billboard': true,
          'collision': false,
          'event-limit': 1,
          'event-range': 3,
          'event-todo': [
            {
              'todo': 'collect',
              'type': 'function',
              'value': {
                'flag': 'lives-0',
                'id': 'lives-0',
                'type': 'lives',
              },
            },
          ],
          'vertex-colors': [
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
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'clear-color': [0, 0, .2],
        'spawn': spawners[spawn],
        'paths': {
          'fireball-0': {
            'end': 'warp',
            'points': [
              {
                'position-x': -50,
              },
              {
                'position-x': 50,
              },
            ],
          },
          'platform-0': {
            'end': 'loop',
            'speed': .2,
            'points': [
              {
                'position-y': 0,
              },
              {
                'position-x': 15,
              },
              {
                'position-z': 15,
              },
              {
                'position-x': -15,
              },
              {
                'position-z': 0,
              },
              {
                'position-x': 0,
              },
              {
                'position-y': -15,
              },
            ],
          },
          'wallmoving-0': {
            'end': 'loop',
            'points': [
              {
                'position-z': -150,
              },
              {
                'position-z': -110,
              },
            ],
          },
        },
        'characters': [
          {
            'id': 'platformer-skymap',
            'spawn': false,
            'entities': [
              ...flagged,
              {
                'id': 'door',
                'attach-x': -20,
                'attach-y': 10,
                'attach-z': -130,
                'event-range': 0,
                'event-todo': [
                  {
                    'todo': 'load_cave',
                    'type': 'function',
                  },
                ],
                'rotate-z': 270,
                'texture': 'door.png',
                'texture-align': '10110100',
                'vertex-colors': [
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
                'id': 'gate-0',
                'attach-z': -100,
                'rotate-x': 90,
                'texture': 'grid.png',
                'vertex-colors': [
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
                'id': 'key-0',
                'alpha': .99999,
                'attach-x': -15,
                'attach-y': 3,
                'attach-z': -80,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'key-0',
                      'type': 'keys',
                    },
                  },
                  {
                    'stat': 'attach-x',
                    'todo': 'gate-0',
                    'value': -60,
                  },
                ],
                'texture': 'key.png',
                'vertex-colors': [
                  1, 1, 1, 1,
                ],
                'vertices': [
                  2, 2, -0,
                  -2, 2, -0,
                  -2, -2, 0,
                  2, -2, 0,
                ],
              },
              {
                'id': 'life-0',
                'attach-x': 15,
                'attach-y': 3,
                'attach-z': -80,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'life-0',
                      'type': 'life',
                    },
                  },
                ],
                'vertex-colors': [
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
            'id': 'fireball-0',
            'level': 0,
            'path-id': 'fireball-0',
            'position-x': -50,
            'position-y': 3,
            'position-z': -60,
            'spawn': false,
            'entities': [
              {
                'id': 'fireball-0-body',
                'billboard': true,
                'collision': false,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'webgl_character_hit',
                    'type': 'function',
                    'value': {
                      'id': 'fireball-0',
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
                    'stat': 'position-x',
                    'todo': 'fireball-0',
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
                'vertex-colors': [
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
            'id': 'platform-0',
            'level': 0,
            'path-id': 'platform-0',
            'spawn': false,
          },
          {
            'id': 'wallmoving-0',
            'level': 0,
            'path-id': 'wallmoving-0',
            'position-y': 10,
            'position-z': -150,
            'spawn': false,
            'entities': [
              {
                'id': 'wallmoving-0',
                'rotate-x': 90,
                'texture': 'grid.png',
                'vertex-colors': [
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
              'prefix': 'platform-0',
              'character': 'platform-0',
              'position-y': -5,
              'size-x': 40,
              'size-y': 10,
              'size-z': 40,
            },
          },
          {
            'type': 'prefab_platform',
            'properties': {
              'prefix': 'platform-1',
              'character': 'platformer-skymap',
              'position-y': -5,
              'position-z': -100,
              'size-x': 40,
              'size-y': 10,
              'size-z': 100,
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
        'coin-0': true,
        'lives-0': true,
      },
    };

    load_skymap(0);
    webgl_character_init({
      'camera-zoom': 25,
      'coins': 0,
      'collide-bottom': 5,
      'collide-top': 1,
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'keys': 0,
      'level': 0,
      'life-max': 10,
      'lives': 3,
      'model': {},
      'spawn': {
        'camera-rotate-x': 30,
        'position-y': 6,
      },
    });
    update_ui();
}

function prefab_platform(args){
    webgl_primitive_cuboid({
      ...args,
      'all': {
        'vertex-colors': [
          .2, .2, .2, 1,
        ],
      },
      'top': {
        'texture': 'grid.png',
        'texture-x': Math.floor(args['size-x'] / 10),
        'texture-y': Math.floor(args['size-z'] / 10),
        'vertex-colors': [
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
                event.preventDefault();
            }
        },
      },
      'events': {
        'new-game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'flags': {},
      },
      'info': '<button id=new-game type=button>Start Platformer Test</button><br><br>Life: <span class=life></span>/<span class=life-max></span><br>'
        + 'Lives: <span class=lives></span><br>'
        + 'Speed: <span id=speed></span><br>'
        + 'Coins: <span class=coins></span><br>'
        + 'Keys: <span class=keys></span>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {
          'preventDefault': true,
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
      'storage-controls': true,
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
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
      'class': true,
      'ids': {
        'coins': character['coins'],
        'keys': character['keys'],
        'life': character['life'],
        'life-max': character['life-max'],
        'lives': character['lives'],
        'speed': character['speed'],
      },
    });
}
