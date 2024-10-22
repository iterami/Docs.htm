'use strict';

function collect(args){
    audio_start('boop');
    entity_entities[args['id']]['attach-y'] = -1000;

    if(args['type'] === 'life'){
        webgl_stat_modify({
          'stat': 'life',
          'target': webgl_characters['_me'],
          'value': 1,
        });

    }else{
        globalThis[args['type']]++;
    }
}

function new_game(){
    core_menu_lock = false;
    webgl_level_unload();

    coins = 0;
    keys = 0;

    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-min': 10,
        'spawn-rotate-x': 30,
        'spawn-translate-y': 1,
        'y-min': -200,
        'paths': {
          'fireball-0': {
            'end': 'warp',
            'points': [
              {
                'translate-x': -50,
              },
              {
                'translate-x': 50,
              },
            ],
          },
        },
        'characters': [
          {
            'id': 'platformer-test',
            'entities': [
              {
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
              },
              {
                'id': 'door-0',
                'attach-z': -100,
                'rotate-x': 90,
                'texture-id': 'grid.png',
                'vertex-colors': [
                  .2, .2, .2, 1,
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
                    'todo': 'door-0',
                    'value': -60,
                  },
                ],
                'texture-id': 'key.png',
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
            'translate-x': -50,
            'translate-y': 3,
            'translate-z': -60,
            'entities': [
              {
                'id': 'fireball-0-body',
                'billboard': true,
                'collision': false,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'audio_start',
                    'type': 'function',
                    'value': 'boop',
                  },
                  {
                    'stat': 'translate-x',
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
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'platform-0',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
              },
              'character': 'platformer-test',
              'size-x': 40,
              'size-y': 10,
              'size-z': 40,
              'translate-y': -5,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'platform-1',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
              },
              'character': 'platformer-test',
              'size-x': 40,
              'size-y': 10,
              'size-z': 40,
              'translate-y': -5,
              'translate-z': -70,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'platform-2',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
              },
              'character': 'platformer-test',
              'size-x': 40,
              'size-y': 10,
              'size-z': 40,
              'translate-y': -5,
              'translate-z': -135,
            },
          },
        ],
      },
    });
    webgl_character_init({
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'life-max': 10,
      'lives': 3,
      'randomize': true,
    });
    webgl_character_spawn();
}

function repo_escape(){
    if(webgl === 0
      && !core_menu_open){
        new_game();
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'new-game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'coins': 0,
        'keys': 0,
      },
      'info': '<button id=new-game type=button>Start Platformer Test</button>',
      'menu': true,
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousemove': {
          'todo': function(event){
              webgl_controls_mouse(webgl_character_id);
          },
        },
        'mouseup': {
          'todo': webgl_pick_entity,
        },
        'wheel': {
          'todo': function(event){
              webgl_controls_wheel(
                webgl_character_id,
                event.deltaY
              );
          },
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Coins: <span id=coins></span><br>'
        + 'Keys: <span id=keys></span>/<span id=keys-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];

    core_ui_update({
      'class': true,
      'ids': {
        'coins': coins,
        'keys': keys,
        'keys-max': 1,
        'life': character['life'],
        'life-max': character['life-max'],
        'lives': character['lives'],
      },
    });
}
