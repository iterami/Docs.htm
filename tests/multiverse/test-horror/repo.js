'use strict';

function new_game(){
    core_menu_lock = false;
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-max': 0,
        'fog-density': .0005,
        'fog-state': true,
        'pointerlock': true,
        'spawn-translate-y': 1,
        'spawn-translate-z': 45,
        'characters': [
          {
            'id': 'horror-test',
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
      'jump-height': 0,
      'speed': .4,
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
      'info': '<button id=new-game type=button>Start Horror Test</button>',
      'keybinds': {
        'Backquote': {
          'todo': function(){
              webgl_characters[webgl_character_id]['automove'] = !webgl_characters[webgl_character_id]['automove'];
          },
        },
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
        'mouseup': {
          'todo': webgl_pick_entity,
        },
        'mousewheel': {
          'todo': function(event){
              webgl_controls_mousewheel(
                webgl_character_id,
                event.deltaY
              );
          },
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
    });
}
