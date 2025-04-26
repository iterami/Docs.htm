'use strict';

function collect(args){
    if(args['type'] === 'weapon'){
        weapon_equip({
          'id': webgl_character_id,
          'weapon': args['value'],
        });

    }else{
        webgl_stat_modify({
          'stat': args['type'],
          'target': webgl_characters[webgl_character_id],
          'value': args['value'],
        });
    }

    audio_start('boop');
    entity_remove({
      'entities': [args['id']],
    });
}

function load_bridge(){
    webgl_level_load({
      'character': 0,
      'json': {
        'camera-zoom': 0,
        'camera-zoom-max': 0,
        'pointerlock': true,
        'y-min': -100,
        'characters': [
          {
            'id': 'map-bridge',
            'spawn': false,
            'entities': [
              {
                'id': 'bridge',
                'attach-z': -80,
                'texture': 'grid.png',
                'texture-x': 2,
                'texture-y': 10,
                'vertex-colors': [
                  .8, .4, 0, 1,
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
                'attach-y': 6,
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
                'attach-y': 6,
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
                'attach-y': 6,
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
          {
            ...stats(),
            'id': 'test-enemy',
            'spawn': {
              'position-z': -150,
            },
          },
        ],
        'prefabs': [
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'blue',
              'all': {
                'vertex-colors': [
                  .5, .5, .5, 1,
                ],
              },
              'character': 'map-bridge',
              'position-y': -5,
              'size-x': 100,
              'size-y': 10,
              'size-z': 60,
              'top': {
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 6,
              },
            },
          },
          {
            'type': 'webgl_primitive_cuboid',
            'properties': {
              'prefix': 'red',
              'all': {
                'vertex-colors': [
                  .5, .5, .5, 1,
                ],
              },
              'character': 'map-bridge',
              'position-y': -5,
              'position-z': -160,
              'size-x': 100,
              'size-y': 10,
              'size-z': 60,
              'top': {
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 6,
              },
            },
          },
        ],
      },
    });
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new match? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    core_object_reset(weapons);
    Object.assign(
      weapons,
      {
        'test-weapon': {
          'ammo': 10,
          'reload': 50,
        },
      }
    );

    load_bridge();
    webgl_character_init(stats());
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
        'weapons': {},
      },
      'info': '<button id=new-game type=button>Start FPS Test</button><br><br>Life: <span class=life></span>/<span class=life-max></span><br>'
        + 'Lives: <span class=lives></span><br>'
        + 'Speed: <span id=speed></span><br>'
        + 'Weapon: <span class=weapon></span><br>'
        + 'Ammo: <span class=ammo></span>/<span class=ammo-max></span><br>'
        + 'Reload: <span class=reload></span></span>',
      'menu': true,
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousedown': {
          'todo': function(){
              weapon_fire(webgl_character_id);
          },
        },
        'mousemove': {
          'todo': function(){
              webgl_controls_mouse();
          },
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Lives: <span id=lives></span><br>'
        + 'Weapon: <span id=weapon></span><br>'
        + 'Ammo: <span id=ammo></span>/<span id=ammo-max></span><br>'
        + 'Reload: <span id=reload></span></span>',
    });
}

function repo_logic(){
    for(const id in webgl_characters){
        const character = webgl_characters[id];
        if(character['reload'] > 0){
            character['reload']--;
        }
    }

    core_ui_update({
      'class': true,
      'ids': {
        'reload': webgl_characters[webgl_character_id]['reload'],
      },
    });
}

function repo_stat_modify(){
    update_ui();
}

function stats(){
    return {
      'ammo': 0,
      'ammo-max': 0,
      'collide-bottom': 8,
      'collide-top': 2,
      'collides': true,
      'controls': 'rpg',
      'gravity': 1,
      'level': 0,
      'life-max': 100,
      'lives': 5,
      'model': {},
      'reload': 0,
      'spawn': {
        'position-x': 0,
        'position-y': 6,
        'position-z': 0,
      },
      'weapon': '',
    };
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'ammo': character['ammo'],
        'ammo-max': character['ammo-max'],
        'life': character['life'],
        'life-max': character['life-max'],
        'lives': character['lives'],
        'reload': character['reload'],
        'speed': character['speed'],
        'weapon': character['weapon'],
      },
    });
}

function weapon_equip(args){
    const character = webgl_characters[args['id']];
    const weapon = weapons[args['weapon']];

    if(character['weapon'] !== args['weapon']){
        character['weapon'] = args['weapon'];
        character['ammo-max'] = weapon['ammo'];
        character['reload'] = weapon['reload'];
    }

    character['ammo'] = weapon['ammo'];
    update_ui();
}

function weapon_fire(id){
    const character = webgl_characters[webgl_character_id];
    if(character['weapon'].length === 0
      || character['ammo'] === 0
      || character['reload'] !== 0){
        return;
    }

    character['reload'] = weapons[character['weapon']]['reload'];
    character['ammo']--;
    audio_start('boop');
    update_ui();
}
