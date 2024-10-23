'use strict';

function collect(args){
    audio_start('boop');
    const item = entity_entities[args['id']];
    item['attach-y'] = -500;
    item['draw'] = false;

    webgl_stat_modify({
      'stat': args['type'],
      'target': webgl_characters['_me'],
      'value': args['value'],
    });

    update_ui();
}

function new_game(){
    webgl_level_unload();

    ammo = 0;
    ammo_max = 0;
    weapon = '';

    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-max': 0,
        'pointerlock': true,
        'spawn-translate-y': 1,
        'y-min': -200,
        'characters': [
          {
            'id': 'fps-test',
            'entities': [
              {
                'id': 'bridge',
                'attach-z': -80,
                'texture-id': 'grid.png',
                'texture-repeat-x': 2,
                'texture-repeat-y': 10,
                'vertex-colors': [
                  .4, .2, 0, 1,
                ],
                'vertices': [
                  10, 0, -50,
                  -10, 0, -50,
                  -10, 0, 50,
                  10, 0, 50,
                ],
              },
              {
                'id': 'life-0',
                'attach-x': -40,
                'attach-y': 3,
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
                      'value': 10,
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
              {
                'id': 'lives-0',
                'attach-x': -40,
                'attach-y': 3,
                'attach-z': -180,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'lives-0',
                      'type': 'lives',
                      'value': 1,
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
              },
            ],
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'blue',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 6,
              },
              'character': 'fps-test',
              'size-x': 100,
              'size-y': 50,
              'size-z': 60,
              'translate-y': -25,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'red',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 6,
              },
              'character': 'fps-test',
              'size-x': 100,
              'size-y': 50,
              'size-z': 60,
              'translate-y': -25,
              'translate-z': -160,
            },
          },
        ],
      },
    });
    webgl_character_init({
      'collide-range-y': 5,
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'life-max': 100,
      'lives': 5,
    });
    update_ui();
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
        'ammo': 0,
        'ammo_max': 0,
        'weapon': '',
      },
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
      },
      'info': '<button id=new-game type=button>Start FPS Test</button>',
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Weapon: <span id=weapon></span><br>'
        + 'Ammo: <span id=ammo></span>/<span id=ammo-max></span>',
    });
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'ammo': ammo,
        'ammo-max': ammo_max,
        'life': character['life'],
        'life-max': character['life-max'],
        'lives': character['lives'],
        'weapon': weapon,
      },
    });
}
