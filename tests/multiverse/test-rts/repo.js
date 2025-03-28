'use strict';

function build(id, building){
    const player = webgl_characters[id];

    if(player['building'][building]
      || player['money'] < tech[building]['cost']){
        return;
    }

    player['money'] -= tech[building]['cost'];
    player['building'][building] = {
      'time': 0,
      'time-max': tech[building]['time'],
    };
    update_ui();
}

function load_testmap(){
    webgl_level_load({
      'character': {
        'building': {},
        'camera-zoom': 50,
        'controls': 'rts',
        'level': -1,
        'lock': {
          'camera-rotate-x': 60,
          'translate-y': 5,
        },
        'money': 1000,
        'selected': '',
        'speed': 2,
      },
      'json': {
        'camera-zoom': 50,
        'camera-zoom-max': 100,
        'camera-zoom-min': 20,
        'characters': [
          {
            'id': 'rts-testmap',
            'static': true,
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
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new base? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    core_object_reset(tech);
    Object.assign(
      tech,
      {
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
      }
    );

    for(const id in tech){
        core_html({
          'parent': core_elements['build'],
          'properties': {
            'id': 'build-' + id,
            'onclick': function(){
                build(webgl_character_id, id);
            },
            'textContent': 'Build ' + id + ' ' + tech[id]['cost'],
            'type': 'button',
          },
          'store': 'build-' + id,
          'type': 'button',
        });
    }

    load_testmap();
    select();

    update_ui();
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
      'globals': {
        'tech': {},
      },
      'info': '<button id=new-game type=button>Start RTS Test</button><br><br>Money: <span class=money></span><br>'
        + 'Selected: <span class=selected></span>',
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
          'todo': webgl_controls_wheel,
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
    for(const id in webgl_characters){
        const character = webgl_characters[id];
        if(!character['building']){
            continue;
        }

        for(const building in character['building']){
            const build = character['building'][building];
            build['time']++;
            if(build['time'] >= build['time-max']){
                delete character['building'][building];
            }
        }
    }
}

function repo_stat_modify(){
    update_ui();
}

function select(args){
    const character = webgl_characters[webgl_character_id];

    if(args === void 0){
        character['selected'] = '';
        for(const id in tech){
            core_elements['build-' + id].style.display = 'none';
        }

    }else{
        character['selected'] = args['id'];

        const builds = tech[args['type']]['builds'];
        for(const id in tech){
            const element = core_elements['build-' + id];
            element.style.display = builds.includes(id)
              ? 'inline-block'
              : 'none';
        }
    }
    update_ui();
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'money': character['money'],
        'selected': character['selected'],
      },
    });
}
