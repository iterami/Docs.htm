'use strict';

function lap_update({
  id,
  mark,
} = {}){
    const character = webgl_characters[id];
    if(character.mark !== mark - 1){
        return;
    }

    character.mark++;
    if(character.mark >= mark_max){
        audio_start('boop');
        character.mark = 0;
        character.lap++;
        if(character.lap > lap_max){
            character.lap = 1;
        }
    }

    const positions = [];
    for(const id in webgl_characters){
        const racer = webgl_characters[id];
        if(!racer.mark){
            continue;
        }
        positions.push({
          'progress': racer.lap * mark_max + racer.mark,
          'racer': id,
        });
    }
    core_sort_property({
      'array': positions,
      'clone': false,
      'property': 'progress',
      'reverse': true,
    });
    for(const position in positions){
        webgl_characters[positions[position].racer].position = Number(position) + 1;
    }
    update_ui();
}

function level_properties(){
    return {
      'camera_zoom_max': 30,
    };
}

function load_testtrack(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'characters': [
          {
            'id': 'racing_testtrack',
            'base': true,
            'spawn': false,
            'entities': [
              {
                'id': 'jump',
                'attach_x': -170,
                'attach_z': -100,
                'event_range': 0,
                'event_todo': [
                  {
                    'set': true,
                    'stat': 'change_position_y',
                    'value': 3,
                  },
                  {
                    'set': true,
                    'stat': 'change_position_z',
                    'value': 3,
                  },
                ],
                'texture': 'grid.png',
                'vertex_colors': [1, 0, 0, 1],
                'vertices': [
                  80, 0, -35,
                  -80, 0, -35,
                  -80, 0, 35,
                  80, 0, 35,
                ],
              },
              {
                'id': 'mark_goal',
                'attach_z': 375,
                'collision': false,
                'event_range': [20, 100, 125],
                'event_todo': [
                  {
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': {
                      'id': '_target',
                      'mark': 5,
                    },
                  },
                ],
                'texture': 'grid.png',
                'texture_x': 10,
                'texture_y': 50,
                'vertex_colors': [0, 1, 0, 1],
                'vertices': [
                  20, 0, -125,
                  -20, 0, -125,
                  -20, 0, 125,
                  20, 0, 125,
                ],
              },
              {
                'id': 'mark_1',
                'attach_x': 210,
                'attach_z': 240,
                'collision': false,
                'event_range': [40, 100, 10],
                'event_todo': [
                  {
                    'target': true,
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': {
                      'id': '_target',
                      'mark': 1,
                    },
                  },
                ],
                'texture': 'grid.png',
                'texture_x': 20,
                'texture_y': 5,
                'vertex_colors': [0, 0, 1, 1],
                'vertices': [
                  40, 0, -10,
                  -40, 0, -10,
                  -40, 0, 10,
                  40, 0, 10,
                ],
              },
              {
                'id': 'mark_2',
                'attach_x': -33,
                'collision': false,
                'event_range': [40, 100, 10],
                'event_todo': [
                  {
                    'target': true,
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': {
                      'id': '_target',
                      'mark': 2,
                    },
                  },
                ],
                'texture': 'grid.png',
                'texture_x': 20,
                'texture_y': 5,
                'vertex_colors': [0, 0, 1, 1],
                'vertices': [
                  40, 0, -10,
                  -40, 0, -10,
                  -40, 0, 10,
                  40, 0, 10,
                ],
              },
              {
                'id': 'mark_3',
                'attach_x': 210,
                'attach_z': -240,
                'collision': false,
                'event_range': [40, 100, 10],
                'event_todo': [
                  {
                    'target': true,
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': {
                      'id': '_target',
                      'mark': 3,
                    },
                  },
                ],
                'texture': 'grid.png',
                'texture_x': 20,
                'texture_y': 5,
                'vertex_colors': [0, 0, 1, 1],
                'vertices': [
                  40, 0, -10,
                  -40, 0, -10,
                  -40, 0, 10,
                  40, 0, 10,
                ],
              },
              {
                'id': 'mark_4',
                'attach_x': -170,
                'attach_z': -240,
                'collision': false,
                'event_range': [80, 100, 10],
                'event_todo': [
                  {
                    'target': true,
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': {
                      'id': '_target',
                      'mark': 4,
                    },
                  },
                ],
                'texture': 'grid.png',
                'texture_x': 20,
                'texture_y': 5,
                'vertex_colors': [0, 0, 1, 1],
                'vertices': [
                  80, 0, -10,
                  -80, 0, -10,
                  -80, 0, 10,
                  80, 0, 10,
                ],
              },
              {
                'id': 'base',
                'attach_y': -1,
                'texture': 'grid.png',
                'texture_x': 3,
                'texture_y': 3,
                'vertex_colors': [.5, .5, .5, 1],
                'vertices': [
                  250, 0, -500,
                  -250, 0, -500,
                  -250, 0, 500,
                  250, 0, 500,
                ],
              },
              {
                'id': 'reset',
                'attach_y': -50,
                'draw': false,
                'event_range': 0,
                'event_todo': [
                  {
                    'todo': 'return_to_mark',
                    'type': 'function',
                    'value': '_target',
                  },
                ],
                'vertices': [
                  999, 0, -999,
                  -999, 0, -999,
                  -999, 0, 999,
                  999, 0, 999,
                ],
              },
            ],
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall_0',
              'bottom': false,
              'position_x': -83.3,
              'position_y': 49,
              'size_x': 20,
              'size_y': 100,
              'size_z': 500,
              'texture': 'grid.png',
              'texture_x': 3,
              'texture_y': 3,
              'vertex_colors': [.5, .5, .5, 1],
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall_1',
              'bottom': false,
              'left': false,
              'position_x': 51.7,
              'position_y': 9,
              'position_z': 240,
              'size_x': 250,
              'size_y': 20,
              'size_z': 20,
              'texture': 'grid.png',
              'texture_x': 3,
              'texture_y': 3,
              'vertex_colors': [.5, .5, .5, 1],
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall_2',
              'bottom': false,
              'position_x': 125,
              'position_y': 9,
              'size_x': 250,
              'size_y': 20,
              'size_z': 20,
              'texture': 'grid.png',
              'texture_x': 3,
              'texture_y': 3,
              'vertex_colors': [.5, .5, .5, 1],
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall_3',
              'bottom': false,
              'left': false,
              'position_x': 51.7,
              'position_y': 9,
              'position_z': -240,
              'size_x': 250,
              'size_y': 20,
              'size_z': 20,
              'texture': 'grid.png',
              'texture_x': 3,
              'texture_y': 3,
              'vertex_colors': [.5, .5, .5, 1],
            },
          },
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new race? Progress will be lost.')){
        return;
    }
    webgl_player_id = '_me';

    lap_max = 3;
    mark_max = 5;
    position_max = 0;

    load_testtrack();
    racer_add(webgl_player_id);
    racer_add('test_racer');
    update_ui();
}

function racer_add(id){
    position_max++;

    const properties = {};
    if(id !== webgl_player_id){
        properties.automove = true;
        properties.keys = {
          'move_left': true,
        };
    }
    webgl_character_init({
      ...stats(),
      'id': id,
      ...properties,
    });

    const vehicle = id + '_vehicle';
    if(!webgl_characters[vehicle]){
        webgl_character_init({
          'collides': true,
          'entities': [
            {
              'id': vehicle + '_body',
              'collision': false,
              'vertices': [
                5, 0, -5,
                -5, 0, -5,
                -5, 0, 5,
                5, 0, 5,
              ],
            },
          ],
          'gravity': 1,
          'id': vehicle,
          'level': 0,
          'spawn': {
            'position_x': -25,
            'position_y': 5,
            'position_z': 250 + 25 * position_max,
            'rotate_y': 90,
          },
          'turn_speed': 1,
          'vehicle_stats': {
            'character': id,
            //'lock': 2,
            'speed_backward': -.01,
            'speed_forward': .02,
            'speed_max_backward': -1,
            'speed_max_forward': 2,
          },
        });
    }
}

function repo_escape(){
    audio_state_all(!core_menu_open);

    if(webgl === 0
      && !core_menu_open){
        new_game();
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'lap_max': 0,
        'mark_max': 0,
        'position_max': 0,
      },
      'info': '<button class=medium id=new_game type=button>Start Racing Test</button><br><br>Lap: <span class=lap></span>/<span class=lap_max></span><br>'
        + 'Mark: <span class=mark></span>/<span class=mark_max></span><br>'
        + 'Position: <span class=position></span>/<span class=position_max></span><br>'
        + 'Speed: <span class=speed></span>/<span class=speed_max></span>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': function(){},
        'pointermove': function(){
            webgl_controls_pointer();
        },
        'wheel': webgl_controls_wheel,
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': 'Lap: <span id=lap></span>/<span id=lap_max></span><br>'
        + 'Mark: <span id=mark></span>/<span id=mark_max></span><br>'
        + 'Position: <span id=position></span>/<span id=position_max></span><br>'
        + 'Speed: <span id=speed></span>/<span id=speed_max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_player_id];
    let speed = '-';
    let speed_max = '-';
    if(character.vehicle !== false){
        const stats = webgl_characters[character.vehicle].vehicle_stats;
        speed = core_round({
          'decimals': 2,
          'number': stats.speed,
        });
        speed_max = stats.speed_max_forward;
    }
    core_ui_update({
      'classname': true,
      'ids': {
        'speed': speed,
        'speed_max': speed_max,
      },
    });
}

function repo_stat_modify(){
    update_ui();
}

function return_to_mark(id){
    const vehicle = webgl_characters[id];
    const driver = !vehicle.vehicle_stats
      ? vehicle
      : webgl_characters[vehicle.vehicle_stats.character];
    const mark = 'mark_' + (driver.mark === 0
      ? 'goal'
      : driver.mark);
    const position = webgl_get_position(entity_entities[mark]);
    if(vehicle.vehicle_stats){
        vehicle.vehicle_stats.speed = 0;
    }
    vehicle.position_x = position.x;
    vehicle.position_y = position.y + 5;
    vehicle.position_z = position.z;
}

function stats(){
    return {
      'camera_zoom': 25,
      'collide_bottom': 5,
      'collide_top': 1,
      'controls': 'rpg',
      'lap': 1,
      'level': 0,
      'mark': 0,
      'position': 1,
      'model': {},
      'spawn': {
        'camera_rotate_x': 30,
        'camera_rotate_y': 90,
        'rotate_y': 90,
      },
    };
}

function update_ui(){
    const character = webgl_characters[webgl_player_id];
    core_ui_update({
      'classname': true,
      'ids': {
        'lap': character.lap,
        'lap_max': lap_max,
        'mark': character.mark,
        'mark_max': mark_max,
        'position': character.position,
        'position_max': position_max,
      },
    });
}
