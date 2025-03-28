'use strict';

function load_hallway(){
    webgl_level_load({
      'character': {
        'collide-range-y': 5,
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'level': 0,
        'lives': 1,
        'jump-height': 0,
        'spawn': {
          'camera-rotate-y': 180,
          'rotate-y': 180,
          'translate-z': 35,
        },
        'speed': .25,
      },
      'json': {
        'camera-zoom': 0,
        'camera-zoom-max': 0,
        'fog-density': .001,
        'fog-state': true,
        'pointerlock': true,
        'characters': [
          {
            'id': 'horror-test',
            'static': true,
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'hallway-0',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
              },
              'back': {
                'texture': 'door.png',
              },
              'character': 'horror-test',
              'front': {
                'exclude': true,
              },
              'size-x': -10,
              'size-y': -10,
              'size-z': -80,
              'top': {
                'texture-x': 2,
                'texture-y': 16,
              },
              'translate-y': 5,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'hallway-1',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
              },
              'character': 'horror-test',
              'left': {
                'exclude': true,
              },
              'size-x': -50,
              'size-y': -10,
              'size-z': -10,
              'top': {
                'texture-x': 10,
                'texture-y': 2,
              },
              'translate-x': 20,
              'translate-y': 5,
              'translate-z': -45,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'room-1',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'texture': 'grid.png',
              },
              'character': 'horror-hallway',
              'size-x': -40,
              'size-y': -20,
              'size-z': -40,
              'top': {
                'texture-x': 8,
                'texture-y': 8,
              },
              'translate-x': 65,
              'translate-y': 10,
              'translate-z': -45,
            },
          },
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new experience? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    load_hallway();
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
      'info': '<button id=new-game type=button>Start Horror Test</button>',
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
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
    });
}
