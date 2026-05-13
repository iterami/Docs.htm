'use strict';

function load_test(){
    webgl_level_load({
      'character': 0,
      'json': {
        'picking': 2,
        'spawn': {
          'position_y': 5,
          'position_z': 25,
        },
        'characters': [
          {
            'id': 'test',
            'base': true,
            'spawn': false,
            'entities': [
              {
                'id': 'base',
                'event_todo': [
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
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Reset?')){
        return;
    }
    webgl_character_id = '_me';

    load_test();
    webgl_character_init({
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'lives': 1,
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
      'info': '<button class=medium id=new_game type=button>Start Projectiles Test</button>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerup': {
          'todo': webgl_pick,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
    });
}
