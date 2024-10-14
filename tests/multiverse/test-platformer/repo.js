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
            'id': 'platformer-test',
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'start',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
              },
              'character': 'platformer-test',
              'size-x': 40,
              'size-y': 10,
              'size-z': 40,
              'translate-y': -5,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'end',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 4,
                'texture-repeat-y': 4,
              },
              'character': 'platformer-test',
              'size-x': 40,
              'size-y': 10,
              'size-z': 40,
              'translate-y': -5,
              'translate-z': -70,
            },
          },
        ],
      },
    });
    webgl_character_init({
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
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
      'info': '<button id=new-game type=button>Start Platformer Test</button>',
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
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
    });
}
