'use strict';

function new_game(){
    webgl_level_unload();

    equipment = {};
    inventory = {};
    mana = 0;
    mana_max = 0;

    webgl_level_load({
      'character': {
        'camera-zoom': 25,
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'jump-height': .6,
        'level': 0,
        'lock': {
          'camera-rotate-x': 60,
          'camera-rotate-y': 0,
        },
        'lives': 1,
        'speed': .5,
        'randomize': true,
      },
      'json': {
        'camera-zoom-min': 10,
        'spawn-rotate-x': 30,
        'spawn-translate-y': 1,
        'y-min': -200,
        'characters': [
          {
            'id': 'arpg-test',
            'entities': [
              {
                'id': 'home',
                'attach-z': -25,
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 15,
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
                'texture': 'grid.png',
                'texture-x': 4,
                'texture-y': 2,
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
                'texture': 'lavaleaf.png',
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
            'translate-y': 3,
            'translate-z': -60,
            'entities': [
              {
                'id': 'npc-friend-body',
                'billboard': true,
                'collision': false,
                'texture': 'grid.png',
                'vertex-colors': [
                  .4, .6, .4, 1,
                ],
                'vertices': [
                  3, 3, 0,
                  -3, 3, 0,
                  -3, -3, 0,
                  3, -3, 0,
                ],
              },
            ],
          },
          {
            'id': 'npc-enemy',
            'level': 2,
            'translate-x': 140,
            'translate-y': 3,
            'translate-z': -60,
            'entities': [
              {
                'id': 'npc-enemy-body',
                'billboard': true,
                'collision': false,
                'texture': 'grid.png',
                'vertex-colors': [
                  .6, .4, .4, 1,
                ],
                'vertices': [
                  3, 3, 0,
                  -3, 3, 0,
                  -3, -3, 0,
                  3, -3, 0,
                ],
              },
            ],
          },
        ],
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
        'equipment': {},
        'inventory': {},
        'mana': 0,
        'mana_max': 0,
      },
      'info': '<button id=new-game type=button>Start ARPG Test</button><hr>Life: <span class=life></span>/<span class=life-max></span><br>'
        + 'Mana: <span class=mana></span>/<span class=mana-max></span><br>'
        + 'Speed: <span id=speed></span>',
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
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Mana: <span id=mana></span>/<span id=mana-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'life': character['life'],
        'life-max': character['life-max'],
        'mana': mana,
        'mana-max': mana_max,
        'speed': character['speed'],
      },
    });
}
