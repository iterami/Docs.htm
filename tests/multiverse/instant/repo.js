'use strict';

function debug_pick_color({
  x,
  y,
} = {}){
    const pixelarray = new Uint8Array(3);
    webgl.readPixels(
      x,
      webgl.drawingBufferHeight - y,
      1,
      1,
      webgl.RGB,
      webgl.UNSIGNED_BYTE,
      pixelarray
    );
    return {
      'pixelarray': pixelarray,
      'x': x,
      'y': webgl.drawingBufferHeight - y,
    };
}

function debug_pick_entity(cursor){
    let picked = false;
    const x = webgl_properties.pointerlock ? Math.floor(globalThis.innerWidth / 2) : core_pointer.x;
    const y = webgl_properties.pointerlock ? Math.floor(globalThis.innerHeight / 2) : core_pointer.y;

    webgl_shader_use('picking');
    const color = webgl_scissor({
      'todo': function(){
          webgl_draw_picking();
          return webgl_pick_color({
            'x': x,
            'y': y,
          });
      },
      'x': x,
      'y': y
    });
    webgl_shader_use('default');

    if(color[0] !== 0
      || color[1] !== 0
      || color[2] !== 0){
        const color_blue = color[2] === 0
          ? 0
          : core_round({
              'decimals': 3,
              'number': color[2] / 255,
            });
        const color_green = color[1] === 0
          ? 0
          : core_round({
              'decimals': 3,
              'number': color[1] / 255,
            });
        const color_red = color[0] === 0
          ? 0
          : core_round({
              'decimals': 3,
              'number': color[0] / 255,
            });

        for(const id in entity_entities){
            const entity = entity_entities[id];

            if(entity.picking
              && color_blue === entity.picking[2]
              && color_green === entity.picking[1]
              && color_red === entity.picking[0]){
                if(entity.picking_range > 0){
                    const position = webgl_get_position(entity);
                    const distance = math_distance({
                      'x0': character.position_x,
                      'y0': character.position_y,
                      'z0': character.position_z,
                      'x1': position.x,
                      'y1': position.y,
                      'z1': position.z,
                    });
                    if(distance > entity.picking_range){
                        break;
                    }
                }

                picked = entity;
                break;
            }
        }
    }

    if(picked){
        if(picked.picking_xyz){
            const rgb = webgl_draw_picked({
              'picked': picked,
              'x': x,
              'y': y,
            });

            const position = webgl_get_position(picked);
            webgl_picked_x = position.x + (rgb[0] / 255 - .5) * (picked.vertices[0] - picked.vertices[3]);
            webgl_picked_y = position.y + (rgb[1] / 255 - .5) * (picked.vertices[1] - picked.vertices[7]);
            webgl_picked_z = position.z + (rgb[2] / 255 - .5) * (picked.vertices[8] - picked.vertices[2]);
        }

        if(cursor === true){
            webgl.canvas.style.cursor = 'pointer';
            if(core_elements.reticle){
                core_elements.reticle.style.height = Math.ceil(core_elements.reticle.dataset.height * 1.5) + 'px';
                core_elements.reticle.style.width = Math.ceil(core_elements.reticle.dataset.width * 1.5) + 'px';
            }

        }else{
            webgl_event({
              'parent': picked,
              'target': webgl_characters[webgl_character_id],
            });
        }

    }else if(cursor === true){
        webgl.canvas.style.cursor = 'auto';
        if(core_elements.reticle){
            core_elements.reticle.style.height = core_elements.reticle.dataset.height + 'px';
            core_elements.reticle.style.width = core_elements.reticle.dataset.width + 'px';
        }
    }

    const clear_color = webgl_properties.clear_color;
    webgl.clearColor(
      clear_color[0],
      clear_color[1],
      clear_color[2],
      1
    );
    webgl_draw();

    return {
      'color': color,
      'picked': picked,
      'x': x,
      'y': y,
    };
}

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
          'todo': webgl_pick_entity,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage': {
        'debug_picking': true,
        'pointerlock': true,
      },
      'storage_controls': true,
      'storage_menu': '<table><tr><td><input id=debug_picking type=checkbox><td><label for=debug_picking>Debug Picking</label>'
        + '<tr><td><input id=pointerlock type=checkbox><td><label for=pointerlock>Pointerlock</label></table>',
      'title': 'Docs.htm',
      'ui': '<span id=picked></span> <span id=color></span><br>Draw FPS: <span id=fps_draw></span><br>Logic FPS: <span id=fps_logic></span><br><div id=debug_color></div><div id=debug_entity></div><div id=xyz></div><div id=debug_catch></div>',
      'ui_elements': [
        'debug_result',
      ],
    });
    globalThis.webgl_drawloop = function(){
        webgl_draw();
        core_interval_animationFrame('webgl_drawloop');
        fps_draw = Math.trunc(1000 / (new Date().getTime() - fps_draw_time));
        fps_draw_time = new Date().getTime();
    };

    new_game();
}

function repo_logic(){
    let color = '';
    let debug_catch = '';
    let debug_color = '';
    let debug_entity = '';
    let picked = '';
    const x = webgl_properties.pointerlock ? Math.floor(globalThis.innerWidth / 2) : core_pointer.x;
    const y = webgl_properties.pointerlock ? Math.floor(globalThis.innerHeight / 2) : core_pointer.y;

    webgl_draw();
    if(core_storage_data.debug_picking){
        try{
            const pick_color = debug_pick_color({
              'x': x,
              'y': y,
            });
            color = pick_color.pixelarray;
            const pick_entity = debug_pick_entity(true);
            picked = pick_entity.picked;

            debug_color = 'Color: x' + pick_color.x + ' y' + pick_color.y + ' ' + color;
            debug_entity = 'Entity: x' + pick_entity.x + ' y' + pick_entity.y + ' ' + pick_entity.color;
            debug_catch = 'Picking Debug try/catch OK';

        }catch(error){
            debug_catch = error;
        }

    }else{
        color = webgl_pick_color({
          'x': x,
          'y': y,
        });
        picked = webgl_pick_entity(true);
    }
    core_ui_update({
      'ids': {
        'color': color,
        'debug_catch': debug_catch,
        'debug_color': debug_color,
        'debug_entity': debug_entity,
        'fps_draw': fps_draw,
        'fps_logic': Math.trunc(1000 / (new Date().getTime() - fps_logic)),
        'picked': picked
          ? picked.id
          : 'false',
        'xyz': 'x' + webgl_picked_x + ' y' + webgl_picked_y + ' z' + webgl_picked_z,
      },
    });
    fps_logic = new Date().getTime();
}
