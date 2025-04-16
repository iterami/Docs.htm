'use strict';

// Required args: id, build
function build(args){
    const player = webgl_characters[args['id']];
    const cost = tech[args['build']]['cost'];

    if(player['building'][args['build']]
      || player['power'] < cost){
        return;
    }

    player['power'] -= cost;
    player['building'][args['build']] = {
      'id': args['build'],
      'time': 0,
      'time-max': tech[args['build']]['time'],
    };
    update_ui();
}

function load_testmap(){
    webgl_level_load({
      'character': 0,
      'json': {
        'camera-zoom': 50,
        'camera-zoom-max': 100,
        'camera-zoom-min': 20,
        'characters': [
          {
            'id': 'rts-testmap',
            'spawn': false,
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

    webgl_characters[webgl_character_id]['power'] = 10000;

    make({
      'team': 0,
      'type': 'Builder',
    });
    make({
      'team': 0,
      'type': 'Factory',
    });
    make({
      'team': 0,
      'type': 'Turret',
    });

    make({
      'team': 1,
      'type': 'Builder',
    });
}

// Required args: team, type
function make(args){
    const id = args['type'] + entity_id_count;
    webgl_entity_create({
      'character': 'rts-testmap',
      'entities': [{
        'attach-to': 'rts-testmap',
        'attach-x': Math.random() * 200 - 100,
        'attach-y': 1,
        'attach-z': Math.random() * 100 - 50,
        'event-todo': [
          {
            'todo': 'select',
            'type': 'function',
            'value': {
              'id': id,
              'type': args['type'],
            },
          },
        ],
        'id': id,
        'picking': true,
        'team': args['team'],
        ...tech[args['type']]['properties'],
      }],
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
        'Builder': {
          'builds': [
            'Factory',
            'Turret',
          ],
          'cost': 100,
          'time': 100,
          'type': 'unit',
          'properties': {
            'texture': 'grid.png',
            'vertices': [
              4, 0, -4,
              -4, 0, -4,
              -4, 0, 4,
              4, 0, 4,
            ],
          },
        },
        'Factory': {
          'builds': ['Builder'],
          'cost': 1000,
          'time': 200,
          'type': 'building',
          'properties': {
            'texture': 'grid.png',
            'vertices': [
              10, 0, -10,
              -10, 0, -10,
              -10, 0, 10,
              10, 0, 10,
            ],
          },
        },
        'Turret': {
          'builds': [],
          'cost': 250,
          'time': 150,
          'type': 'building',
          'properties': {
            'texture': 'grid.png',
            'vertices': [
              5, 0, -5,
              -5, 0, -5,
              -5, 0, 5,
              5, 0, 5,
            ],
          },
        },
      }
    );

    webgl_character_init({
      'building': {},
      'camera-zoom': 50,
      'controls': 'rts',
      'level': -1,
      'lock': {
        'camera-rotate-x': 60,
        'position-y': 5,
      },
      'power': 0,
      'selected': '',
      'speed': 2,
      'team': 0,
    });
    for(const id in tech){
        core_html({
          'parent': core_elements['build'],
          'properties': {
            'id': 'build-' + id,
            'onclick': function(){
                build({
                  'id': webgl_character_id,
                  'build': id,
                });
            },
            'style': 'display:none',
            'textContent': 'Build ' + id + ' ' + tech[id]['cost'],
            'type': 'button',
          },
          'store': 'build-' + id,
          'type': 'button',
        });
    }
    load_testmap();
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
      'info': '<button id=new-game type=button>Start RTS Test</button><br><br>Power: <span class=power></span><br>'
        + 'Selected: <span class=selected></span><br>'
        + 'Team: <span class=team></span>',
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
      'ui': 'Power: <span id=power></span><br>'
        + 'Selected: <span id=selected></span><br>'
        + 'Team: <span id=team></span>'
        + '<div id=build></div>'
        + '<div id=progress></div>',
      'ui-elements': [
        'build',
        'progress',
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
                make({
                  'team': character['team'],
                  'type': build['id'],
                });
                delete character['building'][building];
            }
        }
    }

    let progress_ui = '';
    const building = webgl_characters[webgl_character_id]['building'];
    for(const progress in building){
        progress_ui += building[progress]['id'] + ': ' + building[progress]['time'] + '/' + building[progress]['time-max'] + '<br>';
    }
    if(!progress_ui.length){
        return;
    }
    core_ui_update({
      'class': true,
      'ids': {
        'progress': progress_ui,
      },
      'todo': 'innerHTML',
    });
}

function select(args){
    const character = webgl_characters[webgl_character_id];
    character['selected'] = args === void 0
      ? ''
      : args['id'];

    if(character['selected'] === ''
      || entity_entities[character['selected']]['team'] !== character['team']){
        for(const id in tech){
            core_elements['build-' + id].style.display = 'none';
        }

    }else{
        const builds = tech[args['type']]['builds'];
        for(const id in tech){
            core_elements['build-' + id].style.display = builds.includes(id)
              ? 'inline-block'
              : 'none';
        }
    }
    update_ui();
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    const selected = entity_entities[character['selected']];
    core_ui_update({
      'class': true,
      'ids': {
        'power': character['power'],
        'selected': character['selected'],
        'team': selected ? selected['team'] : '',
      },
    });
}
