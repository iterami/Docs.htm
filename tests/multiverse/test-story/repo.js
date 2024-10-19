'use strict';

function choose(choice){
    const path = choice % 2
      ? 'right'
      : 'left';

    webgl_characters[webgl_character_id]['path-id'] = 'path-' + path;
}

function new_game(){
    webgl_level_unload();
    webgl_level_load({
      'character': -1,
      'json': {
        'camera-zoom-max': 0,
        'spawn-path-id': 'path-start',
        'spawn-translate-z': 50,
        'paths': {
          'path-start': {
            'end': 'exit',
            'points': [
              {
                'translate-z': 50,
              },
              {
                'translate-z': 25,
              },
            ],
          },
          'path-left': {
            'end': 'exit',
            'points': [
              {
                'translate-z': 25,
              },
              {
                'translate-x': -25,
                'translate-z': 0,
              },
              {
                'translate-z': -40,
              },
            ],
          },
          'path-right': {
            'end': 'exit',
            'points': [
              {
                'translate-z': 25,
              },
              {
                'translate-x': 25,
                'translate-z': 0,
              },
              {
                'translate-z': -40,
              },
            ],
          },
        },
        'characters': [
          {
            'id': 'story-test',
            'entities': [
              {
                'id': 'ground',
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 20,
                'vertex-colors': [
                  .2, .2, .2, 1,
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
    webgl_character_init({
      'controls': '',
      'level': -1,
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
        'choose-0': {
          'onclick': function(){
              choose(0);
          },
        },
        'choose-1': {
          'onclick': function(){
              choose(1);
          },
        },
        'choose-2': {
          'onclick': function(){
              choose(2);
          },
        },
        'choose-3': {
          'onclick': function(){
              choose(3);
          },
        },
        'new-game': {
          'onclick': new_game,
        },
      },
      'info': '<button id=new-game type=button>Start Story Test</button>',
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
      'title': 'Docs.htm',
      'ui': '<div id=choice><button id=choose-0 type=button>Choice 0</button><button id=choose-1 type=button>Choice 1</button><br>'
        + '<button id=choose-2 type=button>Choice 2</button><button id=choose-3 type=button>Choice 3</button></div>',
    });
}
