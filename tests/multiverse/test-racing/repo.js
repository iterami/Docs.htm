'use strict';

function lap_update(marker){
    if(mark !== marker - 1){
        return;
    }

    mark++;
    if(mark >= mark_max){
        audio_start('boop');
        mark = 0;
        lap++;
        if(lap > lap_max){
            lap = 1;
        }
    }
}

function new_game(){
    webgl_level_unload();

    lap = 1;
    lap_max = 3;
    mark = 0;
    mark_max = 4;
    position = 1;
    position_max = 1;

    webgl_level_load({
      'character': {
        'camera-zoom': 25,
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'level': 0,
        'life-max': 100,
        'lives': 1,
        'randomize': true,
      },
      'json': {
        'camera-zoom-min': 10,
        'camera-zoom-max': 30,
        'spawn-rotate-x': 30,
        'spawn-rotate-y': 90,
        'spawn-translate-x': -50,
        'spawn-translate-y': 1,
        'spawn-translate-z': 375,
        'characters': [
          {
            'id': 'racing-test',
            'entities': [
              {
                'id': 'mark-0',
                'attach-y': -.99,
                'attach-z': 375,
                'event-range': 0,
                'event-todo': [
                  {
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': 4,
                  },
                ],
                'texture': 'grid.png',
                'texture-x': 5,
                'texture-y': 50,
                'vertex-colors': [
                  0, 1, 0, 1,
                ],
                'vertices': [
                  10, 0, -125,
                  -10, 0, -125,
                  -10, 0, 125,
                  10, 0, 125,
                ],
              },
              {
                'id': 'mark-1',
                'attach-x': 210,
                'attach-y': -.99,
                'attach-z': 240,
                'event-range': 0,
                'event-todo': [
                  {
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': 1,
                  },
                ],
                'texture': 'grid.png',
                'texture-x': 20,
                'texture-y': 5,
                'vertex-colors': [
                  0, 0, 1, 1,
                ],
                'vertices': [
                  40, 0, -10,
                  -40, 0, -10,
                  -40, 0, 10,
                  40, 0, 10,
                ],
              },
              {
                'id': 'mark-2',
                'attach-x': 210,
                'attach-y': -.99,
                'attach-z': -240,
                'event-range': 0,
                'event-todo': [
                  {
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': 2,
                  },
                ],
                'texture': 'grid.png',
                'texture-x': 20,
                'texture-y': 5,
                'vertex-colors': [
                  0, 0, 1, 1,
                ],
                'vertices': [
                  40, 0, -10,
                  -40, 0, -10,
                  -40, 0, 10,
                  40, 0, 10,
                ],
              },
              {
                'id': 'mark-3',
                'attach-x': -170,
                'attach-y': -.99,
                'attach-z': -150,
                'event-range': 0,
                'event-todo': [
                  {
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': 3,
                  },
                ],
                'texture': 'grid.png',
                'texture-x': 20,
                'texture-y': 5,
                'vertex-colors': [
                  0, 0, 1, 1,
                ],
                'vertices': [
                  80, 0, -10,
                  -80, 0, -10,
                  -80, 0, 10,
                  80, 0, 10,
                ],
              },
            ],
          },
          {
            'id': 'vehicle',
            'collide-range-xz': 5,
            'collides': true,
            'gravity': 1,
            'level': 0,
            'rotate-y': 90,
            'translate-x': -25,
            'translate-y': 5,
            'translate-z': 375,
            'turn-speed': 2,
            'vehicle-stats': {
              'speed-deceleration': -.02,
              'speed-max': 3,
            },
            'entities': [
              {
                'id': 'vehicle-body',
                'collision': false,
                'event-todo': [
                  {
                    'todo': 'webgl_vehicle_toggle',
                    'type': 'function',
                    'value': {
                      'vehicle': 'vehicle',
                    },
                  },
                ],
                'picking': true,
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
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
                'texture-x': 3,
                'texture-y': 3,
              },
              'character': 'racing-test',
              'size-x': -500,
              'size-y': -100,
              'size-z': -1000,
              'top': {
                'texture-x': 3,
                'texture-y': 4,
              },
              'translate-y': 49,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall-0',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
                'texture-x': 3,
                'texture-y': 3,
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'racing-test',
              'size-x': 20,
              'size-y': 100,
              'size-z': 500,
              'top': {
                'exclude': true,
              },
              'translate-x': -83.3,
              'translate-y': 49,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall-1',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
                'texture-x': 3,
                'texture-y': 3,
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'racing-test',
              'left': {
                'exclude': true,
              },
              'size-x': 250,
              'size-y': 20,
              'size-z': 20,
              'translate-x': 51.7,
              'translate-y': 9,
              'translate-z': 240,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall-2',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
                'texture-x': 3,
                'texture-y': 3,
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'racing-test',
              'right': {
                'exclude': true,
              },
              'size-x': 250,
              'size-y': 20,
              'size-z': 20,
              'translate-x': 125,
              'translate-y': 9,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'wall-3',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
                'texture-x': 3,
                'texture-y': 3,
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'racing-test',
              'left': {
                'exclude': true,
              },
              'size-x': 250,
              'size-y': 20,
              'size-z': 20,
              'translate-x': 51.7,
              'translate-y': 9,
              'translate-z': -240,
            },
          },
        ],
      },
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
      'globals': {
        'lap': 1,
        'lap_max': 3,
        'mark': 0,
        'mark_max': 4,
        'position': 1,
        'position_max': 1,
      },
      'info': '<button id=new-game type=button>Start Racing Test</button><hr>Life: <span class=life></span>/<span class=life-max></span><br>'
        + 'Lap: <span class=lap></span>/<span class=lap-max></span><br>'
        + 'Position: <span class=position></span>/<span class=position-max></span>'
        + '<div class=vehicle></div>'
        + 'Mark: <span class=mark></span>/<span class=mark-max></span>',
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
        'wheel': {
          'todo': function(event){
              webgl_controls_wheel(
                webgl_character_id,
                event.deltaY
              );
          },
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Lap: <span id=lap></span>/<span id=lap-max></span><br>'
        + 'Position: <span id=position></span>/<span id=position-max></span>'
        + '<div id=vehicle></div>'
        + 'Mark: <span id=mark></span>/<span id=mark-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];
    let vehicle = '';
    if(character['vehicle'] !== false){
        const stats = webgl_characters[character['vehicle']]['vehicle-stats'];
        vehicle = 'Speed: ' + core_round({
            'decimals': 2,
            'number': stats['speed'],
          }) + '/' + stats['speed-max'];
    }

    core_ui_update({
      'class': true,
      'ids': {
        'lap': lap,
        'lap-max': lap_max,
        'life': character['life'],
        'life-max': character['life-max'],
        'mark': mark,
        'mark-max': mark_max,
        'position': position,
        'position-max': position_max,
        'vehicle': vehicle,
      },
    });
}
