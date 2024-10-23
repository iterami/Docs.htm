'use strict';

function new_game(){
    webgl_level_unload();

    lap = 0;
    lap_max = 3;
    position = 1;
    position_max = 1;

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
            'collide-range-xz': 5,
            'collides': true,
            'gravity': 1,
            'level': 0,
            'translate-y': 5,
            'translate-z': -25,
            'turn-speed': 2,
            'vehicle-stats': {
              'speed-deceleration': -.01,
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
                'texture-id': 'grid.png',
                'texture-repeat-x': 5,
                'texture-repeat-y': 5,
              },
              'character': 'racing-test',
              'size-x': -500,
              'size-y': -50,
              'size-z': -500,
              'translate-y': 24,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'pillar',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture-id': 'grid.png',
              },
              'bottom': {
                'exclude': true,
              },
              'character': 'racing-test',
              'size-x': 20,
              'size-y': 50,
              'size-z': 20,
              'top': {
                'exclude': true,
              },
              'translate-x': 100,
              'translate-y': 24,
              'translate-z': -100,
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
      'life-max': 100,
      'lives': 1,
      'randomize': true,
    });
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'lap': lap,
        'lap-max': lap_max,
        'life': character['life'],
        'life-max': character['life-max'],
        'position': position,
        'position-max': position_max,
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
        'lap': 0,
        'lap_max': 3,
        'position': 1,
        'position_max': 1,
      },
      'info': '<button id=new-game type=button>Start Racing Test</button>',
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
        + '<div id=vehicle></div>',
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
        'vehicle': vehicle,
      },
    });
}
