'use strict';

function new_game(){
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-max': 0,
        'spawn-translate-y': 1,
        'characters': [
          {
            'id': 'test-game',
            'entities': [
              {
                'id': 'base',
                'texture-id': 'grid.png',
                'texture-repeat-x': 20,
                'texture-repeat-y': 20,
                'vertex-colors': [
                  0.2, 0.2, 0.2, 1
                ],
                'vertices': [
                  20, 0, -20,
                  -20, 0, -20,
                  -20, 0, 20,
                  20, 0, 20
                ]
              }
            ]
          },
        ],
      },
    });
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
          'todo': webgl_camera_handle,
        },
        'mouseup': {
          'todo': webgl_pick_entity,
        },
        'mousewheel': {
          'todo': webgl_camera_zoom,
        },
      },
      'info': '<button id=new-game type=button>New Game</button>',
      'title': 'Docs.htm',
    });
}

function repo_logic(){
}
