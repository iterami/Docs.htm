'use strict';

function build(id){
    const player = players[webgl_character_id];

    if(player['building'][id]
      || player['money'] < tech[id]['cost']){
        return;
    }

    player['money'] -= tech[id]['cost'];
    player['building'][id] = {
      'time': 0,
      'time-max': tech[id]['time'],
    };
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new base? Progress will be lost.')){
        return;
    }
    webgl_level_unload();

    players = {};
    tech = {
      'builder': {
        'builds': [
          'factory',
          'turret',
        ],
        'cost': 100,
        'time': 100,
        'type': 'unit',
      },
      'factory': {
        'builds': ['builder'],
        'cost': 1000,
        'time': 200,
        'type': 'building',
      },
      'turret': {
        'builds': [],
        'cost': 250,
        'time': 150,
        'type': 'building',
      },
    };

    for(const id in tech){
        core_html({
          'parent': core_elements['build'],
          'properties': {
            'id': 'build-' + id,
            'onclick': function(){
                build(id);
            },
            'textContent': 'Build ' + id + ' ' + tech[id]['cost'],
            'type': 'button',
          },
          'store': 'build-' + id,
          'type': 'button',
        });
    }
    select();

    webgl_level_load({
      'character': {
        'camera-zoom': 50,
        'controls': 'rts',
        'level': -1,
        'lock': {
          'camera-rotate-x': 60,
          'translate-y': 5,
        },
        'speed': 2,
      },
      'json': {
        'camera-zoom': 50,
        'camera-zoom-max': 100,
        'camera-zoom-min': 20,
        'characters': [
          {
            'id': 'rts-test',
            'entities': [
              {
                'id': 'base',
                'texture': 'lavaleaf.png',
                'vertex-colors': [
                  .1, .4, .1, 1,
                ],
                'vertices': [
                  100, 0, -50,
                  -100, 0, -50,
                  -100, 0, 50,
                  100, 0, 50,
                ],
              },
              {
                'id': 'fake-builder',
                'attach-x': 25,
                'attach-y': 1,
                'event-todo': [
                  {
                    'todo': 'select',
                    'type': 'function',
                    'value': {
                      'id': 'fake-builder',
                      'type': 'builder',
                    },
                  },
                ],
                'picking': true,
                'texture': 'grid.png',
                'vertices': [
                  4, 0, -4,
                  -4, 0, -4,
                  -4, 0, 4,
                  4, 0, 4,
                ],
              },
              {
                'id': 'fake-factory',
                'attach-y': 1,
                'event-todo': [
                  {
                    'todo': 'select',
                    'type': 'function',
                    'value': {
                      'id': 'fake-factory',
                      'type': 'factory',
                    },
                  },
                ],
                'picking': true,
                'texture': 'grid.png',
                'vertices': [
                  10, 0, -10,
                  -10, 0, -10,
                  -10, 0, 10,
                  10, 0, 10,
                ],
              },
              {
                'id': 'wall-n',
                'attach-y': 10,
                'attach-z': -50,
                'rotate-x': 90,
                'texture': 'lavaleaf.png',
                'vertex-colors': [
                  .4, .2, 0, 1,
                ],
                'vertices': [
                  100, 0, -10,
                  -100, 0, -10,
                  -100, 0, 10,
                  100, 0, 10,
                ],
              },
              {
                'id': 'wall-w',
                'attach-x': -100,
                'attach-y': 10,
                'rotate-z': 270,
                'texture': 'lavaleaf.png',
                'vertex-colors': [
                  .4, .2, 0, 1,
                ],
                'vertices': [
                  10, 0, -50,
                  -10, 0, -50,
                  -10, 0, 50,
                  10, 0, 50,
                ],
              },
            ],
          },
        ],
      },
    });

    player_add(webgl_character_id);
}

function player_add(id){
    players[id] = {
      'building': {},
      'money': 1000,
    };
    webgl_character_spawn(id);
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
        'players': {},
        'selected': '',
        'tech': {},
      },
      'info': '<button id=new-game type=button>Start RTS Test</button><hr>Money: <span class=money></span><br>'
        + 'Selected: <span class=selected></span>',
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
          'todo': function(event){
              if(!core_menu_open
                && event.button === 0
                && event.target.id === 'canvas'
                && !webgl_pick_entity()){
                  select();
              }
          },
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
      'reset': function(){
          webgl_character_spawn();
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Money: <span id=money></span><br>'
        + 'Selected: <span id=selected></span>'
        + '<div id=build></div>',
      'ui-elements': [
        'build',
      ],
    });
}

function repo_logic(){
    for(const player in players){
        for(const building in players[player]['building']){
            const build = players[player]['building'][building];
            build['time']++;
            if(build['time'] >= build['time-max']){
                delete players[player]['building'][building];
            }
        }

        players[player]['money']++;
    }

    core_ui_update({
      'class': true,
      'ids': {
        'money': players[webgl_character_id]['money'],
        'selected': selected,
      },
    });
}

function select(args){
    if(args === void 0){
        selected = '';
        for(const id in tech){
            core_elements['build-' + id].style.display = 'none';
        }
        return;
    }

    selected = args['id'];

    const builds = tech[args['type']]['builds'];
    for(const id in tech){
        const element = core_elements['build-' + id];
        element.style.display = builds.includes(id)
          ? 'inline-block'
          : 'none';
    }
}
