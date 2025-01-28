'use strict';

function collect(args){
    if(args['type'] === 'weapon'){
        weapon_equip({
          'player': webgl_character_id,
          'weapon': args['value'],
        });

    }else{
        webgl_stat_modify({
          'stat': args['type'],
          'target': webgl_characters['_me'],
          'value': args['value'],
        });
    }

    audio_start('boop');
    entity_remove({
      'entities': [args['id']],
    });
}

function new_game(){
    webgl_level_unload();

    weapons = {
      'test-weapon': {
        'ammo-max': 10,
      },
    };
    players = {};

    webgl_level_load({
      'character': {
        'collide-range-y': 5,
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'level': 0,
        'life-max': 100,
        'lives': 5,
      },
      'json': {
        'camera-zoom': 0,
        'camera-zoom-max': 0,
        'pointerlock': true,
        'spawn-translate-y': 1,
        'y-min': -100,
        'characters': [
          {
            'id': 'fps-test',
            'entities': [
              {
                'id': 'bridge',
                'attach-z': -80,
                'texture': 'grid.png',
                'texture-x': 2,
                'texture-y': 10,
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
              {
                'id': 'life-0',
                'attach-x': -40,
                'attach-y': 3,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'life-0',
                      'type': 'life',
                      'value': 10,
                    },
                  },
                ],
                'vertex-colors': [
                  0, .7, 0, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
              {
                'id': 'lives-0',
                'attach-x': -40,
                'attach-y': 3,
                'attach-z': -180,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'lives-0',
                      'type': 'lives',
                      'value': 1,
                    },
                  },
                ],
                'vertex-colors': [
                  .2, .4, 8, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
              {
                'id': 'weapon-0',
                'attach-x': 40,
                'attach-y': 3,
                'billboard': true,
                'collision': false,
                'event-limit': 1,
                'event-range': 3,
                'event-todo': [
                  {
                    'todo': 'collect',
                    'type': 'function',
                    'value': {
                      'id': 'weapon-0',
                      'type': 'weapon',
                      'value': 'test-weapon',
                    },
                  },
                ],
                'vertex-colors': [
                  .7, 0, 0, 1,
                ],
                'vertices': [
                  1, 1, -0,
                  -1, 1, -0,
                  -1, -1, 0,
                  1, -1, 0,
                ],
              },
            ],
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'blue',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
              },
              'character': 'fps-test',
              'size-x': 100,
              'size-y': 10,
              'size-z': 60,
              'top': {
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 6,
              },
              'translate-y': -5,
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'red',
              'all': {
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
              },
              'character': 'fps-test',
              'size-x': 100,
              'size-y': 10,
              'size-z': 60,
              'top': {
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 6,
              },
              'translate-y': -5,
              'translate-z': -160,
            },
          },
        ],
      },
    });

    player_add(webgl_character_id);
    player_add('test-player');
}

function player_add(id){
    players[id] = {
      'ammo': 0,
      'ammo-max': 0,
      'weapon': '',
    };

    if(!webgl_characters[id]){
        webgl_character_init({
          'collide-range-y': 5,
          'collides': true,
          'controls': 'rpg',
          'gravity': 1,
          'id': id,
          'level': 0,
          'life-max': 100,
          'lives': 5,
          'randomize': true,
        });
    }
    webgl_character_spawn(id);
}

function repo_escape(){
    if(core_menu_open){
        update_paused_ui();

    }else if(webgl === 0){
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
        'weapons': {},
      },
      'info': '<button id=new-game type=button>Start FPS Test</button><hr>Life: <span class=life></span>/<span class=life-max></span><br>'
        + 'Lives: <span class=lives></span><br>'
        + 'Speed: <span id=speed></span><br>'
        + 'Weapon: <span class=weapon></span><br>'
        + 'Ammo: <span class=ammo></span>/<span class=ammo-max></span>',
      'menu': true,
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousedown': {
          'todo': function(event){
              weapon_fire(webgl_character_id);
          },
        },
        'mousemove': {
          'todo': function(event){
              webgl_controls_mouse(webgl_character_id);
          },
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Weapon: <span id=weapon></span><br>'
        + 'Ammo: <span id=ammo></span>/<span id=ammo-max></span>',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'ammo': players[webgl_character_id]['ammo'],
        'ammo-max': players[webgl_character_id]['ammo-max'],
        'life': character['life'],
        'life-max': character['life-max'],
        'lives': character['lives'],
        'weapon': players[webgl_character_id]['weapon'],
      },
    });
}

function update_paused_ui(){
    const character = webgl_characters[webgl_character_id];
    if(!character){
        return;
    }
    core_ui_update({
      'class': true,
      'ids': {
        'speed': character['speed'],
      },
    });
}

function weapon_equip(args){
    const player = players[args['player']];
    const weapon = weapons[args['weapon']];

    if(player['weapon'] !== args['weapon']){
        player['weapon'] = args['weapon'];
        player['ammo-max'] = weapon['ammo-max'];
    }

    player['ammo'] = weapon['ammo-max'];
}

function weapon_fire(id){
    if(players[id]['weapon'].length === 0
      || players[id]['ammo'] === 0){
        return;
    }

    audio_start('boop');
    players[id]['ammo']--;
}
