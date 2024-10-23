'use strict';

function new_game(){
    webgl_level_unload();

    money = 0;

    webgl_level_load({
      'character': -1,
      'json': {
        'camera-zoom-min': 20,
        'characters': [
          {
            'id': 'rts-test',
            'entities': [
              {
                'id': 'base',
                'texture-id': 'lavaleaf.png',
                'vertex-colors': [
                  .1, .4, .1, 1,
                ],
                'vertices': [
                  100, 0, -50,
                  -100, 0, -50,
                  -100, 0, 50,
                  100, 0, 50,
                ],
              },
              {
                'id': 'wall-n',
                'attach-y': 10,
                'attach-z': -50,
                'rotate-x': 90,
                'texture-id': 'lavaleaf.png',
                'vertex-colors': [
                  .4, .2, 0, 1,
                ],
                'vertices': [
                  100, 0, -10,
                  -100, 0, -10,
                  -100, 0, 10,
                  100, 0, 10,
                ],
              },
              {
                'id': 'wall-w',
                'attach-x': -100,
                'attach-y': 10,
                'rotate-z': 270,
                'texture-id': 'lavaleaf.png',
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
            ],
          },
        ],
      },
    });
    webgl_character_init({
      'controls': 'rts',
      'level': -1,
      'lock': {
        'camera-rotate-x': 60,
        'translate-y': 5,
      },
      'speed': 2,
    });
    core_ui_update({
      'class': true,
      'ids': {
        'money': money,
      },
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
        'money': 0,
      },
      'info': '<button id=new-game type=button>Start RTS Test</button>',
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
      'reset': function(){
          webgl_character_spawn();
      },
      'title': 'Docs.htm',
      'ui': 'Money: <span id=money></span>',
    });
}
