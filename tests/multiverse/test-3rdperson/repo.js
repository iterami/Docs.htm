'use strict';

function new_game(){
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
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
                  0.2, 0.2, 0.2, 1,
                  0.2, 0.2, 0.2, 1,
                  0.2, 0.2, 0.2, 1,
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
    webgl_character_random({
      'id': '_me',
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
        70: {},
        192: {
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
        'mousedown': {
          'todo': webgl_camera_handle,
        },
        'mousemove': {
          'preventDefault': true,
          'todo': webgl_camera_handle,
        },
        'mouseup': {
          'todo': function(){
              webgl_pick_entity({
                'x': core_mouse['down-x'],
                'y': core_mouse['down-y'],
              });
          },
        },
        'mousewheel': {
          'todo': webgl_camera_zoom,
        },
      },
      'info': '<input id=new-game type=button value="New Game">',
      'title': 'Docs.htm',
    });
    webgl_storage_init();
}
