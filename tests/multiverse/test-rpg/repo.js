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
        'y-min': -200,
        'characters': [
          {
            'id': 'rpg-test',
            'entities': [
              {
                'id': 'home',
                'attach-z': -25,
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 15,
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'vertices': [
                  50, 0, -75,
                  -50, 0, -75,
                  -50, 0, 75,
                  50, 0, 75,
                ],
              },
              {
                'id': 'bridge',
                'attach-x': 70,
                'attach-z': 30,
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 2,
                'vertex-colors': [
                  .4, .2, 0, 1,
                ],
                'vertices': [
                  20, 0, -10,
                  -20, 0, -10,
                  -20, 0, 10,
                  20, 0, 10,
                ],
              },
              {
                'id': 'forest',
                'attach-x': 140,
                'attach-z': -25,
                'texture-id': 'lavaleaf.png',
                'vertex-colors': [
                  .05, .2, .05, 1,
                ],
                'vertices': [
                  50, 0, -75,
                  -50, 0, -75,
                  -50, 0, 75,
                  50, 0, 75,
                ],
              },
            ],
          },
          {
            'id': 'npc-friend',
            'level': 1,
            'entities': [
              {
                'id': 'npc-friend-body',
                'collision': false,
                'texture-id': 'grid.png',
                'vertex-colors': [
                  .4, .6, .4, 1,
                ],
                'vertices': [
                  5, 0, -5,
                  -5, 0, -5,
                  -5, 0, 5,
                  5, 0, 5,
                ],
              },
            ],
            'translate-y': 1,
            'translate-z': -60,
          },
          {
            'id': 'npc-enemy',
            'level': 2,
            'entities': [
              {
                'id': 'npc-enemy-body',
                'collision': false,
                'texture-id': 'grid.png',
                'vertex-colors': [
                  .6, .4, .4, 1,
                ],
                'vertices': [
                  5, 0, -5,
                  -5, 0, -5,
                  -5, 0, 5,
                  5, 0, 5,
                ],
              },
            ],
            'translate-x': 140,
            'translate-y': 1,
            'translate-z': -60,
          },
        ],
      },
    });
    webgl_character_init({
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'jump-height': .6,
      'level': 0,
      'lives': 1,
      'randomize': true,
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
      'info': '<button id=new-game type=button>Start RPG Test</button>',
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
      'ui': 'Life: <span id=life></span>/<span id=life-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];

    core_ui_update({
      'class': true,
      'ids': {
        'life': character['life'],
        'life-max': character['life-max'],
      },
    });
}
