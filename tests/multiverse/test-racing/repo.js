'use strict';

function new_game(){
    core_menu_lock = false;
    webgl_level_unload();
    webgl_level_load({
      'character': 2,
      'json': {
        'camera-zoom-min': 10,
        'camera-zoom-max': 30,
        'spawn-rotate-x': 30,
        'spawn-translate-y': 1,
        'characters': [
          {
            'id': 'racing-test',
          },
          {
            'id': 'vehicle',
            'collides': true,
            'gravity': 1,
            'level': 0,
            'translate-y': 5,
            'translate-z': -25,
            'turn-speed': 2,
            'vehicle-stats': {
              'speed-deceleration': -0.01,
              'speed-max': 3,
            },
            'entities': [
              {
                'id': 'vehicle-body',
                'event-todo': 'webgl_vehicle_toggle',
                'event-todo-args': {
                  'vehicle': 'vehicle',
                },
                'pick-color': [0, 1, 0],
                'vertex-colors': [
                  0, 0, 1, 1,
                ],
                'vertices': [
                  5, 0, -5,
                  -5, 0, -5,
                  -5, 0, 5,
                  5, 0, 5,
                ],
              },
            ],
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'base',
              'all': {
                'vertex-colors': [
                  0.2, 0.2, 0.2, 1,
                ],
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 10,
              },
              'character': 'racing-test',
              'size-x': -500,
              'size-y': -50,
              'size-z': -500,
              'translate-y': 24,
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
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
    });
}
