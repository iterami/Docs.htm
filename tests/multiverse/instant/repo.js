'use strict';

function debug_drawloop(){
    webgl_draw();
    core_interval_animationFrame('webgl_drawloop');
    fps_draw = Math.trunc(1000 / (new Date().getTime() - fps_draw_time));
    fps_draw_time = new Date().getTime();
}

function new_game(){
    webgl_level_load({
      'character': 0,
      'json': {
        'clear_color': [0, .2, 0],
        'picking': 2,
        'pointerlock': core_storage_data.pointerlock,
        'reticle': true,
        'characters': [
          {
            'id': 'test_instant',
            'base': true,
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
                'picking_xyz': true,
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
                'event_todo': [
                  {
                    'stat': 'vertex_colors',
                    'todo': '_self',
                  },
                ],
                'picking': true,
                'picking_xyz': true,
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

function repo_escape(){
    audio_state_all(!core_menu_open);

    core_elements.repo_ui.style.display = 'inline';
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(event){
            if(webgl !== 0){
                core_escape(true);
                event.preventDefault();
            }
        },
      },
      'globals': {
        'fps_draw': 0,
        'fps_draw_time': 0,
        'fps_logic': 0,
      },
      'pointerbinds': {
        'contextmenu': {},
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerup': {
          'todo': webgl_pick,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage': {
        'pointerlock': true,
      },
      'storage_controls': true,
      'storage_menu': '<table><tr><td><input id=pointerlock type=checkbox><td><label for=pointerlock>Pointerlock</label></table>',
      'title': 'Docs.htm',
      'ui': 'Draw FPS: <span id=fps_draw></span><br>Logic FPS: <span id=fps_logic></span>',
    });
    globalThis.webgl_drawloop = debug_drawloop;
    new_game();
}

function repo_logic(){
    core_ui_update({
      'ids': {
        'fps_draw': fps_draw,
        'fps_logic': Math.trunc(1000 / (new Date().getTime() - fps_logic)),
      },
    });
    fps_logic = new Date().getTime();
}
