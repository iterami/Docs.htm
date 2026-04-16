'use strict';

function add_timer(){
    if(webgl === 0){
        return;
    }

    webgl_timer_add(JSON.parse(core_storage_data.timer));

    if(core_menu_open){
        display_timers();
    }
}

function add_timer_random(){
    if(webgl === 0){
        return;
    }

    webgl_timer_add({
      'event_end': [
        {
          'todo': 'ended',
          'type': 'variable',
          'value': 1,
        },
      ],
      'event_repeat': [
        {
          'todo': 'repeated',
          'type': 'variable',
          'value': 1,
        },
      ],
      'frames_max': core_random_integer(100) + 100,
      'frames_random': core_random_integer(100),
      'repeat': core_random_integer(5),
    });

    if(core_menu_open){
        display_timers();
    }
}

function display_timers(){
    let list = '';
    for(const id in webgl_timers){
        const timer = webgl_timers[id];

        list += timer.id + ': '
          + timer.frames + '/' + timer.frames_max
          + ', +' + timer.frames_random
          + ', ' + timer.repeat + '<br>';
    }
    core_ui_update({
      'ids': {
        'ended': ended,
        'repeated': repeated,
        'timers': list,
      },
      'todo': 'innerHTML',
    });
}

function load_test(){
    webgl_level_load({
      'character': 0,
      'json': {
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
                'id': 'toggle',
                'attach_x': -10,
                'attach_y': 3,
                'billboard': true,
                'collision': false,
                'texture': 'grid.png',
                'vertices': [
                  2, 2, 0,
                  -2, 2, 0,
                  -2, -2, 0,
                  2, -2, 0,
                ],
              },
            ],
          },
          {
            'id': 'infinite',
            'collides': true,
            'gravity': 1,
            'level': 0,
            'position_x': 10,
            'position_y': 5,
            'spawn': false,
            'entities': [
              {
                'id': 'test',
                'billboard': true,
                'collision': false,
                'texture': 'grid.png',
                'vertices': [
                  2, 2, 0,
                  -2, 2, 0,
                  -2, -2, 0,
                  2, -2, 0,
                ],
              },
            ],
          },
        ],
        'timers': [
          {
            'id': 'finite',
          },
          {
            'id': 'inactive',
            'active': false,
          },
          {
            'id': 'infinite',
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_timer_add',
                'type': 'function',
                'value': {
                  'frames_max': 25,
                  'id': 'infinite_temp',
                },
              },
              {
                'set': true,
                'stat': 'position_y',
                'todo': 'infinite',
                'type': 'character',
                'value': 50,
              },
            ],
          },
          {
            'id': 'toggle_0',
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_0',
              },
              {
                'set': true,
                'stat': 'attach_y',
                'todo': 'toggle',
                'value': 10,
              },
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_1',
              },
            ],
          },
          {
            'id': 'toggle_1',
            'active': false,
            'frames_max': 50,
            'repeat': -1,
            'event_repeat': [
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_1',
              },
              {
                'set': true,
                'stat': 'attach_y',
                'todo': 'toggle',
                'value': 3,
              },
              {
                'todo': 'webgl_timer_toggle',
                'type': 'function',
                'value': 'toggle_0',
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

    ended = 0;
    repeated = 0;

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
        'add': {
          'onclick': add_timer,
        },
        'new_game': {
          'onclick': new_game,
        },
        'random': {
          'onclick': add_timer_random,
        },
      },
      'globals': {
        'ended': 0,
        'repeated': 0,
      },
      'info': '<button class=medium id=new_game type=button>Start Timers Test</button>',
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
      'storage': {
        'timer': `{
  "active": true,
  "frames_max": 100,
  "frames_random": 0,
  "repeat": 0,
  "event_end": [
    {
      "todo": "ended",
      "type": "variable",
      "value": 1
    }
  ],
  "event_repeat": [
    {
      "todo": "repeated",
      "type": "variable",
      "value": 1
    }
  ]
}`,
      },
      'storage_controls': true,
      'storage_menu': '<textarea id=timer></textarea><br>',
      'title': 'Docs.htm',
      'ui': '<button id=add type=button>Add Timer</button><button id=random type=button>Random</button> <span id=ended></span>, <span id=repeated></span><div id=timers></div>',
    });
}

function repo_logic(){
    display_timers();
}
