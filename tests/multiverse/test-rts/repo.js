'use strict';

function new_game(){
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-min': 20,
        'spawn-rotate-x': 75,
        'characters': [
          {
            'id': 'rts-test',
            'entities': [
              {
                'id': 'base',
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 10,
                'vertex-colors': [
                  0.2, 0.2, 0.2, 1,
                ],
                'vertices': [
                  50, 0, -50,
                  -50, 0, -50,
                  -50, 0, 50,
                  50, 0, 50,
                ],
              },
            ],
          },
        ],
      },
    });
    webgl_character_random({
      'gravity': 0,
      'height-random': 0,
      'id': webgl_character_id,
      'width-random': 0,
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
      'menu-lock': true,
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

function repo_logic(){
}
