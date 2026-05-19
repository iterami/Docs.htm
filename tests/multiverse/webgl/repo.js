'use strict';

function add_timer(){
    if(webgl === 0){
        return;
    }

    webgl_timer_add(JSON.parse(core_storage_data.timer));

    if(core_menu_open){
        display_timers();
    }
}

function add_timer_random(){
    if(webgl === 0){
        return;
    }

    webgl_timer_add({
      'event_end': [
        {
          'todo': 'ended',
          'type': 'variable',
          'value': 1,
        },
      ],
      'event_repeat': [
        {
          'todo': 'repeated',
          'type': 'variable',
          'value': 1,
        },
      ],
      'frames_max': core_random_integer(100) + 100,
      'frames_random': core_random_integer(100),
      'repeat': core_random_integer(5),
    });

    if(core_menu_open){
        display_timers();
    }
}

function debug_drawloop(){
    webgl_draw();
    core_interval_animationFrame('webgl_drawloop');

    const now = globalThis.performance.now();
    fps_draw = Math.trunc(1000 / (now - fps_draw_time));
    fps_draw_time = now;
}

function debug_pick(cursor){
    if(!webgl_pick_check()){
        return;
    }

    let pixelbuffer = false;
    if(cursor === true){
        for(let i = 0; i < 2; i++){
            if(webgl_pixelbuffers[i].sync === null){
                pixelbuffer = webgl_pixelbuffers[i];
                break;
            }
        }

    }else{
        for(let i = 2; i < 4; i++){
            if(webgl_pixelbuffers[i].sync === null){
                pixelbuffer = webgl_pixelbuffers[i];
                break;
            }
        }
    }
    if(!pixelbuffer){
        return;
    }

    const x = webgl_properties.pointerlock ? globalThis.innerWidth / 2 : core_pointer.x;
    const y = webgl_properties.pointerlock ? globalThis.innerHeight / 2 : core_pointer.y;

    webgl_shader_use('picking');
    webgl_scissor({
      'todo': function(){
          webgl_draw_picking();

          webgl.bindBuffer(webgl.PIXEL_PACK_BUFFER, pixelbuffer.buffer);
          webgl.bufferData(webgl.PIXEL_PACK_BUFFER, 4, webgl.STREAM_READ);

          webgl.readPixels(
            x,
            webgl.drawingBufferHeight - y,
            1,
            1,
            webgl.RGBA,
            webgl.UNSIGNED_BYTE,
            0
          );
          pixelbuffer.sync = webgl.fenceSync(webgl.SYNC_GPU_COMMANDS_COMPLETE, 0);
          pixelbuffer.cursor = cursor === true;
          pixelbuffer.x = x;
          pixelbuffer.y = y;

          webgl.flush();
          webgl.bindBuffer(webgl.PIXEL_PACK_BUFFER, null);
      },
      'x': x,
      'y': y,
    });
    webgl_shader_use('default');

    const clear_color = webgl_properties.clear_color;
    webgl.clearColor(
      clear_color[0],
      clear_color[1],
      clear_color[2],
      1
    );
    webgl_draw();
}

function display_timers(){
    let list = '';
    for(const id in webgl_timers){
        const timer = webgl_timers[id];

        list += timer.id + ': '
          + timer.frames + '/' + timer.frames_max
          + ', +' + timer.frames_random
          + ', ' + timer.repeat + '<br>';
    }
    core_ui_update({
      'ids': {
        'ended': ended,
        'repeated': repeated,
        'timers': list,
      },
      'todo': 'innerHTML',
    });
}

function new_game(){
    ended = 0;
    repeated = 0;

    webgl_level_load({
      'character': {
        'collides': true,
        'controls': 'rpg',
        'level': -1,
        'spawn': {
          'position_y': 6,
          'position_z': 25,
        },
      },
      'json': {
        'clear_color': [.1, .2, .3],
        'picking': core_storage_data.picking,
        'pointerlock': core_storage_data.pointerlock,
        'reticle': core_storage_data.pointerreticle,
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
                  {
                    'todo': 'webgl_projectile',
                    'type': 'function',
                    'value': {
                      'character': 'stationary',
                      'projectile': {},
                    },
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
                'attach_y': 12,
                'attach_z': -40,
                'change_rotate_y': 1,
                'collision': false,
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
              {
                'id': 'toggle',
                'attach_x': -10,
                'attach_y': 3,
                'billboard': true,
                'collision': false,
                'texture': 'grid.png',
                'vertices': [
                  2, 2, 0,
                  -2, 2, 0,
                  -2, -2, 0,
                  2, -2, 0,
                ],
              },
            ],
          },
          {
            'id': 'infinite',
            'collides': true,
            'gravity': 1,
            'level': 0,
            'position_x': 10,
            'position_y': 5,
            'spawn': false,
            'entities': [
              {
                'id': 'test',
                'billboard': true,
                'collision': false,
                'texture': 'grid.png',
                'vertices': [
                  2, 2, 0,
                  -2, 2, 0,
                  -2, -2, 0,
                  2, -2, 0,
                ],
              },
            ],
          },
          {
            'id': 'projectile',
            'model': {},
            'spawn': false,
          },
          {
            'id': 'rotator',
            'automove': true,
            'change_rotate_y': -2,
            'collides': true,
            'controls': 'rpg',
            'gravity': 1,
            'level': 0,
            'model': {},
            'position_x': 10,
            'position_y': 5,
            'spawn': false,
          },
          {
            'id': 'stationary',
            'change_rotate_y': -1,
            'model': {},
            'position_x': 20,
            'position_y': 10,
            'spawn': false,
          },
        ],
        'timers': [
          {
            'id': 'finite',
          },
          {
            'id': 'inactive',
            'active': false,
          },
          {
            'id': 'infinite',
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_timer_add',
                'type': 'function',
                'value': {
                  'frames_max': 25,
                  'id': 'infinite_temp',
                },
              },
              {
                'set': true,
                'stat': 'position_y',
                'todo': 'infinite',
                'type': 'character',
                'value': 50,
              },
            ],
          },
          {
            'id': 'rotator',
            'frames_max': 10,
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_projectile',
                'type': 'function',
                'value': {
                  'character': 'rotator',
                  'projectile': 'projectile',
                },
              },
            ],
          },
          {
            'id': 'toggle_0',
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_0',
              },
              {
                'set': true,
                'stat': 'attach_y',
                'todo': 'toggle',
                'value': 10,
              },
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_1',
              },
            ],
          },
          {
            'id': 'toggle_1',
            'active': false,
            'frames_max': 50,
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_1',
              },
              {
                'set': true,
                'stat': 'attach_y',
                'todo': 'toggle',
                'value': 3,
              },
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_0',
              },
            ],
          },
        ],
      },
    });
}

function repo_escape(){
    audio_state_all(!core_menu_open);

    core_elements.repo_ui.style.display = 'inline';
}

function repo_init(){
    core_repo_init({
      'events': {
        'add': {
          'onclick': add_timer,
        },
        'new_game': {
          'onclick': new_game,
        },
        'random': {
          'onclick': add_timer_random,
        },
      },
      'globals': {
        'ended': 0,
        'fps_draw': 0,
        'fps_draw_time': 0,
        'fps_logic': 0,
        'repeated': 0,
      },
      'info': '<button class=medium id=new_game type=button>Restart</button>',
      'pointerbinds': {
        'contextmenu': {},
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerdown': {
          'todo': webgl_pick,
        },
        'pointerup': {
          'todo': function(){
              const pixelbuffer = webgl_pick_entity({
                'start': 2,
              });

              core_ui_update({
                'ids': {
                  'picked_click': 'Picked by click: ' + (pixelbuffer === false
                    ? false
                    : JSON.stringify(pixelbuffer?.picked?.id)),
                },
              });
          },
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage': {
        'debug_cursor': true,
        'debug_pick': true,
        'picking': 1,
        'pointerlock': true,
        'pointerreticle': true,
        'timer': `{
  "active": true,
  "frames_max": 100,
  "frames_random": 0,
  "repeat": 0,
  "event_end": [
    {
      "todo": "ended",
      "type": "variable",
      "value": 1
    }
  ],
  "event_repeat": [
    {
      "todo": "repeated",
      "type": "variable",
      "value": 1
    }
  ]
}`,
      },
      'storage_controls': true,
      'storage_menu': '<table><tr><td><input class=mini id=picking step=any type=number> Picking<td><label><input id=debug_pick type=checkbox>Debug</label> <label><input id=debug_cursor type=checkbox>Cursor</label>'
        + '<tr><td><label><input id=pointerlock type=checkbox>Pointerlock</label><td><label><input id=pointerreticle type=checkbox>Reticle</label></table><textarea id=timer></textarea><br>',
      'title': 'Docs.htm',
      'ui': 'Draw FPS: <span id=fps_draw></span><br>Logic FPS: <span id=fps_logic></span><div id=pixelbuffers></div><div id=entities></div><div id=picked_click></div><button id=add type=button>Add Timer</button><button id=random type=button>Random</button> <span id=ended></span>, <span id=repeated></span><div id=timers></div>',
    });
    globalThis.webgl_drawloop = debug_drawloop;
    new_game();
}

function repo_logic(){
    if(core_storage_data.debug_pick){
        debug_pick(core_storage_data.debug_cursor);
    }

    let pixelbuffers = '';
    for(const id in webgl_pixelbuffers){
        const pixelbuffer = webgl_pixelbuffers[id];
        const sync = pixelbuffer.sync !== null;
        pixelbuffers += id + ': ' + sync + ', ' + JSON.stringify(pixelbuffer.picked?.id) + '<br>';
    }
    const pixelbuffers_all = webgl_pick_entity();
    const pixelbuffers_01 = webgl_pick_entity({
      'end': 1,
    });
    const pixelbuffers_23 = webgl_pick_entity({
      'start': 2,
    });

    const now = globalThis.performance.now();
    const logic_fps = Math.trunc(1000 / (now - fps_logic));
    fps_logic = now;

    core_ui_update({
      'ids': {
        'entities': 'all: ' + (pixelbuffers_all === false ? false : JSON.stringify(pixelbuffers_all?.picked?.id))
          + '<br>0-1: ' + (pixelbuffers_01 === false ? false : JSON.stringify(pixelbuffers_01?.picked?.id))
          + '<br>2-3: ' + (pixelbuffers_23 === false ? false : JSON.stringify(pixelbuffers_23?.picked?.id)),
        'fps_draw': fps_draw,
        'fps_logic': logic_fps,
        'pixelbuffers': pixelbuffers,
      },
      'todo': 'innerHTML',
    });
    display_timers();
}
