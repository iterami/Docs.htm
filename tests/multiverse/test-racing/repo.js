'use strict';

function lap_update(args){
    const vehicle = webgl_characters[args['id']];
    if(!vehicle['vehicle-stats']){
        return;
    }
    const character = webgl_characters[vehicle['vehicle-stats']['character']];

    if(character['mark'] !== args['mark'] - 1){
        return;
    }

    character['mark']++;
    if(character['mark'] >= mark_max){
        audio_start('boop');
        character['mark'] = 0;
        character['lap']++;
        if(character['lap'] > lap_max){
            character['lap'] = 1;
        }
    }

    const positions = [];
    for(const id in webgl_characters){
        const racer = webgl_characters[id];
        if(!racer['mark']){
            continue;
        }
        positions.push({
          'progress': racer['lap'] * mark_max + racer['mark'],
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
        webgl_characters[positions[position]['racer']]['position'] = Number(position) + 1;
    }
    update_ui();
}

function load_testtrack(){
    webgl_level_load({
      'character': stats(),
      'json': {
        'camera-zoom-min': 10,
        'camera-zoom-max': 30,
        'characters': [
          {
            'id': 'racing-testtrack',
            'static': true,
            'entities': [
              {
                'id': 'jump',
                'attach-x': -170,
                'attach-y': -.99,
                'attach-z': -100,
                'event-range': 0,
                'event-todo': [
                  {
                    'set': true,
                    'stat': 'change-translate-y',
                    'value': 3,
                  },
                  {
                    'set': true,
                    'stat': 'change-translate-z',
                    'value': 3,
                  },
                ],
                'texture': 'grid.png',
                'vertex-colors': [
                  1, 0, 0, 1,
                ],
                'vertices': [
                  80, 0, -35,
                  -80, 0, -35,
                  -80, 0, 35,
                  80, 0, 35,
                ],
              },
              {
                'id': 'mark-goal',
                'attach-y': -.9,
                'attach-z': 375,
                'event-range': 0,
                'event-todo': [
                  {
                    'target': true,
                    'todo': 'lap_update',
                    'type': 'function',
                    'value': {
                      'id': '_target',
                      'mark': 5,
                    },
                  },
                ],
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 50,
                'vertex-colors': [
                  0, 1, 0, 1,
                ],
                'vertices': [
                  20, 0, -125,
                  -20, 0, -125,
                  -20, 0, 125,
                  20, 0, 125,
                ],
              },
              {
                'id': 'mark-1',
                'attach-x': 210,
                'attach-y': -.9,
                'attach-z': 240,
                'event-range': 0,
                'event-todo': [
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
                'attach-x': -33,
                'attach-y': -.9,
                'event-range': 0,
                'event-todo': [
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
                'attach-x': 210,
                'attach-y': -.9,
                'attach-z': -240,
                'event-range': 0,
                'event-todo': [
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
                'id': 'mark-4',
                'attach-x': -170,
                'attach-y': -.9,
                'attach-z': -240,
                'event-range': 0,
                'event-todo': [
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
              'character': 'racing-testtrack',
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
              'character': 'racing-testtrack',
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
              'character': 'racing-testtrack',
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
              'character': 'racing-testtrack',
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
              'character': 'racing-testtrack',
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
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new race? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    lap_max = 3;
    mark_max = 5;
    position_max = 0;

    load_testtrack();
    racer_add(webgl_character_id);
    racer_add('test-racer');
    update_ui();
}

function racer_add(id){
    position_max++;

    if(!webgl_characters[id]){
        webgl_character_init({
          ...stats(),
          'automove': true,
          'id': id,
        });
    }

    const vehicle = id + '-vehicle';
    if(!webgl_characters[vehicle]){
        webgl_character_init({
          'collides': true,
          'entities': [
            {
              'id': vehicle + '-body',
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
            'rotate-y': 90,
            'translate-x': -25,
            'translate-y': 5,
            'translate-z': 250 + 25 * position_max,
          },
          'turn-speed': 2,
          'vehicle-stats': {
            'character': id,
            //'lock': 2,
            'speed-acceleration': .04,
            'speed-deceleration': -.02,
            'speed-max': 3,
          },
        });
    }
}

function repo_escape(){
    if(webgl === 0
      && !core_menu_open){
        new_game();
    }
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(event){
            if(webgl !== 0){
                event.preventDefault();
            }
        },
      },
      'events': {
        'new-game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'lap_max': 0,
        'mark_max': 0,
        'position_max': 0,
      },
      'info': '<button id=new-game type=button>Start Racing Test</button><br><br>Lap: <span class=lap></span>/<span class=lap-max></span><br>'
        + 'Mark: <span class=mark></span>/<span class=mark-max></span><br>'
        + 'Position: <span class=position></span>/<span class=position-max></span><br>'
        + 'Speed: <span class=speed></span>/<span class=speed-max></span>',
      'menu': true,
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousemove': {
          'todo': function(){
              webgl_controls_mouse();
          },
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Lap: <span id=lap></span>/<span id=lap-max></span><br>'
        + 'Mark: <span id=mark></span>/<span id=mark-max></span><br>'
        + 'Position: <span id=position></span>/<span id=position-max></span><br>'
        + 'Speed: <span id=speed></span>/<span id=speed-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];
    let speed = '-';
    let speed_max = '-';
    if(character['vehicle'] !== false){
        const stats = webgl_characters[character['vehicle']]['vehicle-stats'];
        speed = core_round({
          'decimals': 2,
          'number': stats['speed'],
        });
        speed_max = stats['speed-max'];
    }
    core_ui_update({
      'class': true,
      'ids': {
        'speed': speed,
        'speed-max': speed_max,
      },
    });
}

function repo_stat_modify(){
    update_ui();
}

function stats(){
    return {
      'camera-zoom': 25,
      'controls': 'rpg',
      'lap': 1,
      'level': 0,
      'mark': 0,
      'position': 1,
      'model': {},
      'spawn': {
        'camera-rotate-x': 30,
        'camera-rotate-y': 90,
        'rotate-y': 90,
      },
    };
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'lap': character['lap'],
        'lap-max': lap_max,
        'mark': character['mark'],
        'mark-max': mark_max,
        'position': character['position'],
        'position-max': position_max,
      },
    });
}
