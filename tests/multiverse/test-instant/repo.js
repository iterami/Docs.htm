'use strict';

function new_game(){
    webgl_level_load({
      'character': 0,
      'json': {
        'clear_color': [0, .2, 0],
        'picking': 1,
        'pointerlock': core_storage_data.pointerlock,
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
              {
                'id': 'rotate',
                'attach_y': 10,
                'attach_z': -40,
                'change_rotate_y': 1,
                'rotate_x': 90,
                'texture': 'grid.png',
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
      'storage': {
        'pointerlock': true,
      },
      'storage_controls': true,
      'storage_menu': '<table><tr><td><input id=pointerlock type=checkbox><td>Pointerlock</table>',
      'title': 'Docs.htm',
      'ui': '<span id=picked></span><div id=color></div>',
    });

    new_game();
}

function repo_logic(){
    const x = webgl_properties.pointerlock ? Math.floor(globalThis.innerWidth / 2) : core_pointer.x;
    const y = webgl_properties.pointerlock ? Math.floor(globalThis.innerHeight / 2) : core_pointer.y;

    webgl_draw();
    const color = webgl_pick_color({
      'x': x,
      'y': y,
    });
    const picked = webgl_pick_entity(true);
    core_ui_update({
      'class': true,
      'ids': {
        'color': color,
        'picked': picked
          ? picked.id
          : 'false',
      },
    });
}
