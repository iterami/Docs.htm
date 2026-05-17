'use strict';

function debug_drawloop(){
    webgl_draw();
    core_interval_animationFrame('webgl_drawloop');
    fps_draw = Math.trunc(1000 / (new Date().getTime() - fps_draw_time));
    fps_draw_time = new Date().getTime();
}

function debug_pick(cursor){
    if(core_menu_open
      || webgl_properties.picking < 1){
        return;
    }

    const character = webgl_characters[webgl_character_id];
    if(character.life <= 0){
        return;
    }

    const level = webgl_character_level(character);
    if(level < -1 || (level >= 0 && webgl_properties.paused)){
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
          webgl.bufferData(webgl.PIXEL_PACK_BUFFER, 3, webgl.STREAM_READ);

          webgl.readPixels(
            x,
            webgl.drawingBufferHeight - y,
            1,
            1,
            webgl.RGB,
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

function new_game(){
    webgl_level_load({
      'character': {
        'collides': true,
        'controls': 'rpg',
        'level': -1,
        'spawn': {
          'position_y': 6,
        },
      },
      'json': {
        'clear_color': [0, .2, 0],
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
      'beforeunload': {
        'todo': function(event){
            if(webgl !== 0){
                core_escape(true);
                event.preventDefault();
            }
        },
      },
      'events': {
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'fps_draw': 0,
        'fps_draw_time': 0,
        'fps_logic': 0,
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
                    : pixelbuffer?.picked?.id),
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
      },
      'storage_controls': true,
      'storage_menu': '<table><tr><td><input class=mini id=picking step=any type=number> Picking<td><label><input id=debug_pick type=checkbox>Debug</label> <label><input id=debug_cursor type=checkbox>Cursor</label>'
        + '<tr><td><label><input id=pointerlock type=checkbox>Pointerlock</label><td><label><input id=pointerreticle type=checkbox>Reticle</label></table>',
      'title': 'Docs.htm',
      'ui': 'Draw FPS: <span id=fps_draw></span><br>Logic FPS: <span id=fps_logic></span><div id=pixelbuffers></div><div id=entities></div><div id=picked_click></div>',
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
        pixelbuffers += id + ': ' + sync + ', ' + pixelbuffer.picked?.id + '<br>';
    }
    const pixelbuffers_all = webgl_pick_entity();
    const pixelbuffers_01 = webgl_pick_entity({
      'end': 1,
    });
    const pixelbuffers_23 = webgl_pick_entity({
      'start': 2,
    });

    core_ui_update({
      'ids': {
        'entities': 'all: ' + (pixelbuffers_all === false ? false : pixelbuffers_all?.picked?.id)
          + '<br>0-1: ' + (pixelbuffers_01 === false ? false : pixelbuffers_01?.picked?.id)
          + '<br>2-3: ' + (pixelbuffers_23 === false ? false : pixelbuffers_23?.picked?.id),
        'fps_draw': fps_draw,
        'fps_logic': Math.trunc(1000 / (new Date().getTime() - fps_logic)),
        'pixelbuffers': pixelbuffers,
      },
      'todo': 'innerHTML',
    });
    fps_logic = new Date().getTime();
}
