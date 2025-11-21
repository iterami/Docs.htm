'use strict';

// Required args: id
// Optional args: event_end, event_repeat
function add_timer(args){
    args = core_args({
      'args': args,
      'defaults': {
        'active': true,
        'frames_max': '100',
        'frames_random': 0,
        'repeat': 0,
      },
    });

    timers.push({
      'frames': args.frames_max,
      ...args,
    });
    created++;
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
      'frames_max': Math.floor(Math.random() * 100) + 25,
      'frames_random': Math.floor(Math.random() * 50),
      'id': 'Timer ' + created,
      'repeat': Math.floor(Math.random() * 10),
    });
}

function handle_timers(){
    let list = '';

    for(const i in timers){
        const id = timers.length - i - 1;
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
            timers.splice(id, 1);
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
            ],
          },
        ],
      },
    });

    load_timers();
}

function load_timers(){
    core_object_reset(timers);

    const examples = [
      {
        'frames': 50,
        'id': 'Finite Timer',
        'repeat': 0,
      },
      {
        'active': false,
        'frames': 50,
        'id': 'Inactive Timer',
        'repeat': 0,
      },
      {
        'frames': 50,
        'frames_max': 50,
        'id': 'Infinite Timer',
        'repeat': -1,
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

    created = 0;
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
        'created': 0,
        'ended': 0,
        'repeated': 0,
        'timers': [],
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
