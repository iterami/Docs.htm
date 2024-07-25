'use strict';

function new_game(){
    core_menu_lock = false;
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-min': 10,
        'spawn-rotate-x': 30,
        'spawn-translate-y': 1,
        'characters': [
          {
            'id': 'platformer-test',
            'entities': [
              {
                'id': 'reset',
                'attach-y': -100,
                'draw': false,
                'event-range': 0,
                'event-todo': 'webgl_character_spawn',
                'event-todo-args': '_target',
                'vertices': [
                  250, 0, -250,
                  -250, 0, -250,
                  -250, 0, 250,
                  250, 0, 250,
                ],
              },
              {
                'id': 'start',
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
                'vertex-colors': [
                  0.2, 0.2, 0.2, 1,
                ],
                'vertices': [
                  20, 0, -20,
                  -20, 0, -20,
                  -20, 0, 20,
                  20, 0, 20,
                ],
              },
              {
                'id': 'end',
                'attach-z': -70,
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
                'vertex-colors': [
                  0.2, 0.2, 0.2, 1,
                ],
                'vertices': [
                  20, 0, -20,
                  -20, 0, -20,
                  -20, 0, 20,
                  20, 0, 20,
                ],
              },
            ],
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
