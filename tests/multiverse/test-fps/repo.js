'use strict';

function new_game(){
    core_menu_lock = false;
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-max': 0,
        'pointerlock': true,
        'spawn-translate-y': 1,
        'y-min': -200,
        'characters': [
          {
            'id': 'fps-test',
            'entities': [
              {
                'id': 'bridge',
                'attach-z': -80,
                'texture-id': 'grid.png',
                'texture-repeat-x': 2,
                'texture-repeat-y': 10,
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
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'blue',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 6,
              },
              'character': 'fps-test',
              'size-x': 100,
              'size-y': 50,
              'size-z': 60,
              'translate-y': -25,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'red',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 6,
              },
              'character': 'fps-test',
              'size-x': 100,
              'size-y': 50,
              'size-z': 60,
              'translate-y': -25,
              'translate-z': -160,
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
      'life-max': 100,
      'lives': 5,
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
      'info': '<button id=new-game type=button>Start FPS Test</button>',
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Weapon: <span id=weapon></span><br>'
        + 'Ammo: <span id=ammo></span>/<span id=ammo-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];

    core_ui_update({
      'class': true,
      'ids': {
        'ammo': 0,
        'ammo-max': 10,
        'life': character['life'],
        'life-max': character['life-max'],
        'lives': character['lives'],
        'weapon': 'Blapper',
      },
    });
}
