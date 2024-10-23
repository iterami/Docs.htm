'use strict';

function collect(args){
    audio_start('boop');
    const item = entity_entities[args['id']];
    item['attach-y'] = -500;
    item['draw'] = false;

    globalThis[args['type']]++;

    update_ui()
}

function new_game(){
    webgl_level_unload();

    items = 0;
    items_max = 2;

    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-max': 0,
        'fog-density': .001,
        'fog-state': true,
        'pointerlock': true,
        'spawn-translate-y': 1,
        'spawn-translate-z': 45,
        'characters': [
          {
            'id': 'horror-test',
            'entities': [
              {
                'id': 'item-0',
                'attach-x': -45,
                'attach-y': 3,
                'attach-z': -45,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'item-0',
                      'type': 'items',
                    },
                  },
                ],
                'vertex-colors': [
                  1, 1, 1, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
              {
                'id': 'item-1',
                'attach-x': 45,
                'attach-y': 3,
                'attach-z': -45,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'item-1',
                      'type': 'items',
                    },
                  },
                ],
                'vertex-colors': [
                  1, 1, 1, 1,
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
              'prefix': 'base',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 20,
                'texture-repeat-y': 20,
              },
              'character': 'horror-test',
              'size-x': -100,
              'size-y': -10,
              'size-z': -100,
              'translate-y': 5,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'pillar',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'horror-test',
              'size-x': 20,
              'size-y': 10,
              'size-z': 20,
              'top': {
                'exclude': true,
              },
              'translate-y': 5,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'pillar-nw',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'horror-test',
              'size-x': 20,
              'size-y': 10,
              'size-z': 20,
              'top': {
                'exclude': true,
              },
              'translate-x': -30,
              'translate-y': 5,
              'translate-z': -30,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'pillar-ne',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'horror-test',
              'size-x': 20,
              'size-y': 10,
              'size-z': 20,
              'top': {
                'exclude': true,
              },
              'translate-x': 30,
              'translate-y': 5,
              'translate-z': -30,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'pillar-sw',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'horror-test',
              'size-x': 20,
              'size-y': 10,
              'size-z': 20,
              'top': {
                'exclude': true,
              },
              'translate-x': -30,
              'translate-y': 5,
              'translate-z': 30,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'pillar-se',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'horror-test',
              'size-x': 20,
              'size-y': 10,
              'size-z': 20,
              'top': {
                'exclude': true,
              },
              'translate-x': 30,
              'translate-y': 5,
              'translate-z': 30,
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
      'lives': 1,
      'jump-height': 0,
      'speed': .25,
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
        'items': 0,
        'items_max': 0,
      },
      'info': '<button id=new-game type=button>Start Horror Test</button>',
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
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Items Collected: <span id=items></span>/<span id=items-max></span>',
    });
}

function update_ui(){
    core_ui_update({
      'class': true,
      'ids': {
        'items': items,
        'items-max': items_max,
      },
    });
}
