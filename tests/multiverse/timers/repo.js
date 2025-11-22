'use strict';

// Required args: id
// Optional args: event_end, event_repeat
function add_timer(args){
    args = core_args({
      'args': args,
      'defaults': {
        'active': true,
        'frames_max': 100,
        'frames_random': 0,
        'id': timer_count,
        'repeat': 0,
      },
    });

    timers[args.id] = {
      'frames': args.frames_max,
      ...args,
    };
    timer_count++;
}

function add_timer_random(){
    if(webgl === 0){
        return;
    }

    add_timer({
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
      'frames_max': Math.floor(Math.random() * 100) + 100,
      'frames_random': Math.floor(Math.random() * 100),
      'id': 'timer_' + timer_count,
      'repeat': Math.floor(Math.random() * 5),
    });
}

function handle_timers(){
    let list = '';

    for(const id in timers){
        const timer = timers[id];

        if(timer.active){
            timer.frames--;
        }

        list += timer.id + ': '
          + timer.frames + '/' + timer.frames_max
          + ', +' + timer.frames_random
          + ', ' + timer.repeat + '<br>';

        if(timer.frames > 0){
            continue;
        }

        if(timer.repeat !== 0){
            if(timer.repeat > 0){
                timer.repeat--;
            }
            let max = timer.frames_max;
            if(timer.frames_random){
                max += Math.floor(Math.random() * timer.frames_random);
            }
            timer.frames = max;

            if(timer.event_repeat){
                webgl_event({
                  'parent': timer.event_repeat,
                });
            }

        }else{
            if(timer.event_end){
                webgl_event({
                  'parent': timer.event_end,
                });
            }
            delete timers[id];
        }
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
      },
    });

    load_timers();
}

function load_timers(){
    timer_count = 0;
    core_object_reset(timers);

    const examples = [
      {
        'id': 'finite',
        'frames_max': 100,
        'repeat': 0,
      },
      {
        'id': 'inactive',
        'active': false,
        'frames_max': 100,
        'repeat': 0,
      },
      {
        'id': 'infinite',
        'frames_max': 100,
        'repeat': -1,
        'event_repeat': [
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
        'frames_max': 100,
        'repeat': -1,
        'event_repeat': [
          {
            'todo': 'toggle_timer',
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
            'todo': 'toggle_timer',
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
            'todo': 'toggle_timer',
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
            'todo': 'toggle_timer',
            'type': 'function',
            'value': 'toggle_0',
          },
        ],
      },
    ];

    for(const example of examples){
        add_timer(example);
    }
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
          'onclick': add_timer_random,
        },
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'ended': 0,
        'repeated': 0,
        'timers': {},
        'timer_count': 0,
      },
      'info': '<button id=new_game type=button>Start Timers Test</button>',
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
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': '<button id=add type=button>Add Timer</button> <span id=ended></span>, <span id=repeated></span><div id=timers></div>',
    });
}

function repo_logic(){
    handle_timers();
}

function toggle_timer(id){
    if(!timers[id]){
        return;
    }

    timers[id].active = !timers[id].active;
}
