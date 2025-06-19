'use strict';

function level_properties(){
    return {
      'camera-zoom': 0,
      'camera-zoom-max': 0,
      'pointerlock': true,
      'y-min': -100,
    };
}

function load_hallway(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'fog-end': 50,
        'characters': [
          {
            'id': 'horror-hallway',
            'spawn': false,
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'hallway-0',
              'all': {
                'vertex-colors': [
                  .4, .4, .4, 1,
                ],
                'texture': 'grid.png',
              },
              'back': {
                'exclude': true,
              },
              'character': 'horror-hallway',
              'front': {
                'texture': 'door.png',
              },
              'position-y': 5,
              'size-x': -6,
              'size-y': -6,
              'size-z': -80,
              'top': {
                'texture-x': 3,
                'texture-y': 40,
              },
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'hallway-1',
              'all': {
                'vertex-colors': [
                  .4, .4, .4, 1,
                ],
                'texture': 'grid.png',
              },
              'character': 'horror-hallway',
              'left': {
                'exclude': true,
              },
              'position-x': 20,
              'position-y': 5,
              'position-z': -43,
              'size-x': -46,
              'size-y': -6,
              'size-z': -6,
              'top': {
                'texture-x': 23,
                'texture-y': 3,
              },
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'room-1',
              'all': {
                'vertex-colors': [
                  .4, .4, .4, 1,
                ],
                'texture': 'grid.png',
              },
              'character': 'horror-hallway',
              'position-x': 63,
              'position-y': 12,
              'position-z': -45,
              'size-x': -40,
              'size-y': -20,
              'size-z': -40,
              'top': {
                'texture-x': 10,
                'texture-y': 10,
              },
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
    webgl_character_init({
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'lives': 1,
      'jump-height': 0,
      'spawn': {
        'camera-rotate-y': 180,
        'position-z': 35,
        'rotate-y': 180,
      },
      'speed': .25,
    });
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
      'pointerbinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
    });
}
