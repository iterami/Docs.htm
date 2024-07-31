'use strict';

function new_game(){
    core_menu_lock = false;
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-max': 0,
        'fog-density': 0.0005,
        'fog-state': true,
        'pointerlock': true,
        'spawn-translate-y': 1,
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
                  0.2, 0.2, 0.2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 10,
              },
              'character': 'horror-test',
              'size-x': -100,
              'size-y': -50,
              'size-z': -100,
              'translate-y': 24,
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
      'info': '<button id=new-game type=button>New Game</button>',
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
    });
}
