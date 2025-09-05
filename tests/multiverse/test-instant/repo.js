'use strict';

function new_game(){
    webgl_level_load({
      'character': 0,
      'json': {
        'clear_color': [0, .2, 0],
        'picking': 2,
        'pointerlock': true,
        'reticle': true,
        'characters': [
          {
            'id': 'test_instant',
            'spawn': false,
            'entities': [
              {
                'id': 'base',
                'event_todo': [
                  {
                    'stat': 'vertex_colors',
                    'todo': '_self',
                  },
                ],
                'picking': true,
                'texture': 'grid.png',
                'texture_x': 10,
                'texture_y': 10,
                'vertex_colors': [
                  .5, .5, .5, 1,
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
      'collide_bottom': 8,
      'collide_top': 2,
      'collides': true,
      'controls': 'rpg',
      'level': -1,
      'spawn': {
        'camera_rotate_x': 30,
        'position_x': 0,
        'position_y': 6,
        'position_z': 0,
      },
    });
}

function repo_init(){
    core_repo_init({
      'pointerbinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerup': {
          'todo': webgl_pick_entity,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
    });

    new_game();
}
