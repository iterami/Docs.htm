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
      'id': webgl_character_id,
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
      'title': 'Docs.htm',
    });
}

function repo_logic(){
}
