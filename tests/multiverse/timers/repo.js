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
}

function add_timer_random(){
    add_timer({
      'event_end': [
        {
          'todo': 'eval',
          'type': 'function',
          'value': 'console.log("Event ended.")',
        },
      ],
      'event_repeat': [
        {
          'todo': 'eval',
          'type': 'function',
          'value': 'console.log("Event is repeating!")',
        },
      ],
      'frames_max': Math.floor(Math.random() * 100) + 25,
      'frames_random': Math.floor(Math.random() * 50),
      'id': 'Random Finite Timer',
      'repeat': Math.floor(Math.random() * 10),
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
            timers.splice(timer, 1);
        }
    }

    core_ui_update({
      'ids': {
        'timers': list,
      },
      'todo': 'innerHTML',
    });
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

function load_test(){
    webgl_level_load({
      'character': 0,
      'json': {
        'characters': [
          {
            'id': 'test',
            'spawn': false,
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'test',
              'all': {
                'texture': 'grid.png',
              },
              'character': 'test',
              'position_y': 25,
              'size_x': -100,
              'size_y': -50,
              'size_z': -100,
            },
          },
        ],
      },
    });

    load_timers();
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
        'add': {
          'onclick': add_timer_random,
        },
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
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
      'ui': '<button id=add type=button>Add Timer</button><div id=timers></div>',
    });
}

function repo_logic(){
    handle_timers();
}
