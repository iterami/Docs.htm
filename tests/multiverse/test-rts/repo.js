'use strict';

function add_player(id){
    players[id] = {
      'building': {},
      'money': 1000,
    };
    webgl_character_spawn(id);
}

function build(id){
    const player = players[webgl_character_id];

    if(player['building'][id]
      || player['money'] < buildings[id]['cost']){
        return;
    }

    document.getElementById('build-' + id).disabled = true;
    player['money'] -= buildings[id]['cost'];
    player['building'][id] = {
      'time': 0,
      'time-max': buildings[id]['time'],
    };
}

function new_game(){
    webgl_level_unload();

    buildings = {
      'test-building-0': {
        'cost': 100,
        'time': 100,
      },
      'test-building-1': {
        'cost': 1000,
        'time': 200,
      },
    };
    players = {};
    selected = '';

    let build_ui = '';
    for(const building in buildings){
        build_ui += '<button id=build-' + building + ' onclick="build(\'' + building + '\')" type=button>' + building
          + ' (' + buildings[building]['cost']
          + ', ' + buildings[building]['time'] + ')</button><br>';
    }
    core_ui_update({
      'ids': {
        'build': build_ui,
      },
      'todo': 'innerHTML',
    });

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
        'camera-zoom-max': 50,
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

    add_player(webgl_character_id);
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
        'buildings': {},
        'players': {},
        'selected': '',
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
          'todo': webgl_pick_entity,
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
        + 'Selected: <span id=selected></span><br>'
        + '<div id=build></div>',
    });
}

function repo_logic(){
    for(const player in players){
        for(const building in players[player]['building']){
            const build = players[player]['building'][building];
            build['time']++;
            if(build['time'] >= build['time-max']){
                delete players[player]['building'][building];
                document.getElementById('build-' + building).disabled = false;
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
