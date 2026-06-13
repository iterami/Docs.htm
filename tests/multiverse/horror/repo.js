'use strict';

function level_properties(){
    return {
      'camera_zoom': 0,
      'camera_zoom_max': 0,
      'pointerlock': true,
      'y_min': -100,
    };
}

function load_hallway(){
    webgl_level_load({
      'character': 0,
      'json': {
        ...level_properties(),
        'fog_end': 50,
        'characters': [
          {
            'id': 'horror_hallway',
            'base': true,
            'spawn': false,
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'hallway_0',
              'back': {
                'exclude': true,
              },
              'front': {
                'texture': 'door.png',
              },
              'position_y': 5,
              'size_x': -6,
              'size_y': -6,
              'size_z': -80,
              'texture': 'grid.png',
              'top': {
                'texture_x': 3,
                'texture_y': 40,
              },
              'vertex_colors': [.4, .4, .4, 1,],
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'hallway_1',
              'left': {
                'exclude': true,
              },
              'position_x': 20,
              'position_y': 5,
              'position_z': -43,
              'size_x': -46,
              'size_y': -6,
              'size_z': -6,
              'texture': 'grid.png',
              'top': {
                'texture_x': 23,
                'texture_y': 3,
              },
              'vertex_colors': [.4, .4, .4, 1,],
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'room_1',
              'position_x': 63,
              'position_y': 12,
              'position_z': -45,
              'size_x': -40,
              'size_y': -20,
              'size_z': -40,
              'texture': 'grid.png',
              'top': {
                'texture_x': 10,
                'texture_y': 10,
              },
              'vertex_colors': [.4, .4, .4, 1,],
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
      'jump_height': 0,
      'spawn': {
        'camera_rotate_y': 180,
        'position_z': 35,
        'rotate_y': 180,
      },
      'speed': .25,
    });
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
      'info': '<button class=medium id=new_game type=button>Start Horror Test</button>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
    });
}
