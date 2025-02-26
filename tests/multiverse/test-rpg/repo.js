'use strict';

function item_drop(item){
}

function item_pickup(item){
}

function item_toggle(item){
}

function kill(id){
    if(webgl_characters[id]['team'] !== 0
      && webgl_characters[id]['level'] >= webgl_characters[webgl_character_id]['level'] - 10){
        webgl_stat_modify({
          'stat': 'level-xp',
        });
    }

    if(Math.random() < webgl_characters[id]['drop-chance']){
        item_drop(webgl_characters[id]['drops'][core_random_integer({
          'max': webgl_characters[id]['drops'].length,
        })]);
    }
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new adventure? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    webgl_level_load({
      'character': {
        ...stats(),
        'level': 0,
        'team': 0,
      },
      'json': {
        'camera-zoom-min': 10,
        'y-min': -100,
        'characters': [
          {
            'id': 'rpg-test',
            'static': true,
            'entities': [
              {
                'id': 'home',
                'attach-z': -25,
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 15,
                'vertex-colors': [
                  .2, .2, .2, 1,
                ],
                'vertices': [
                  50, 0, -75,
                  -50, 0, -75,
                  -50, 0, 75,
                  50, 0, 75,
                ],
              },
              {
                'id': 'bridge',
                'attach-x': 70,
                'attach-z': 30,
                'texture': 'grid.png',
                'texture-x': 4,
                'texture-y': 2,
                'vertex-colors': [
                  .4, .2, 0, 1,
                ],
                'vertices': [
                  20, 0, -10,
                  -20, 0, -10,
                  -20, 0, 10,
                  20, 0, 10,
                ],
              },
              {
                'id': 'forest',
                'attach-x': 140,
                'attach-z': -25,
                'texture': 'lavaleaf.png',
                'vertex-colors': [
                  .05, .2, .05, 1,
                ],
                'vertices': [
                  50, 0, -75,
                  -50, 0, -75,
                  -50, 0, 75,
                  50, 0, 75,
                ],
              },
            ],
          },
        ],
      },
    });

    webgl_character_init({
      ...stats(),
      'id': 'npc-friend',
      'spawn-translate-z': -60,
      'team': 0,
    });
    webgl_character_init({
      ...stats(),
      'id': 'npc-enemy',
      'spawn-translate-x': 140,
      'spawn-translate-z': -60,
    });

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
        'talents': {
          'life': {
            'stat': 'life',
            'value': 1,
          },
        },
      },
      'info': '<button id=new-game type=button>Start RPG Test</button><hr>Level: <span id=level></span> (<span id=level-xp></span> xp)<br>'
        + 'Life: <span class=life></span>/<span class=life-max></span><br>'
        + 'Mana: <span class=mana></span>/<span class=mana-max></span>'
        + '<div id=rpg-tabs></div><div id=rpg-tabcontent></div>',
      'menu': true,
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousemove': {
          'todo': function(){
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
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': 'Skill: <span id=skill></span><br>'
        + 'Life: <span id=life></span>/<span id=life-max></span><br>'
        + 'Mana: <span id=mana></span>/<span id=mana-max></span>',
    });
    core_tab_create({
      'content': 'Jump Height: <span id=jump-height></span><br>'
        + 'Speed: <span id=speed></span>',
      'group': 'rpg',
      'id': 'stats',
      'label': 'Stats',
    });
    core_tab_create({
      'content': '<div id=equipment></div>'
        + 'Inventory: <span id=inventory></span>',
      'group': 'rpg',
      'id': 'inventory',
      'label': 'Inventory',
    });
    core_tab_create({
      'content': 'Selected Skill: <span id=skill></span>',
      'group': 'rpg',
      'id': 'skills',
      'label': 'Skills',
    });

    let talents_ui = '<ul>';
    for(const talent in talents){
        talents_ui += '<li>+' + talents[talent]['value'] + ' ' + talent + ' <button onclick="talent_modify(' + talent + ')" type=button>+</button>';
    }
    core_tab_create({
      'content': 'Talents (<span id=talent-points></span> points): ' + talents_ui + '</ul>',
      'group': 'rpg',
      'id': 'talents',
      'label': 'Talents',
    });
}

function repo_stat_modify(){
    update_ui();
}

function skill_use(id){
    if(webgl_characters[id]['skill'].length === 0){
        return;
    }
}

function stats(){
    return {
      'camera-zoom': 25,
      'collides': true,
      'controls': 'rpg',
      'drop-chance': 0,
      'drops': [],
      'equipment': {
        'head': void 0,
        'neck': void 0,
        'body': void 0,
        'wrist-left': void 0,
        'wrist-right': void 0,
        'hand-left': void 0,
        'holding-left': void 0,
        'hand-right': void 0,
        'holding-right': void 0,
        'rings': [],
        'legs': void 0,
        'foot-left': void 0,
        'foot-right': void 0,
      },
      'gravity': 1,
      'inventory': [
        {
          'id': 'Test Item',
        },
      ],
      'jump-height': .6,
      'level': 1,
      'lives': 1,
      'mana': 0,
      'mana-max': 0,
      'npcs': {},
      'randomize': true,
      'skill': '',
      'spawn-rotate-x': 30,
      'spawn-translate-y': 5,
      'speed': .5,
      'talent-points': 0,
      'talent-points-max': 0,
      'team': 1,
    };
}

function talent_modify(talent){
    const character = webgl_characters[webgl_character_id];
    if(!character
      || character['talent-points'] <= 0){
        return;
    }

    character['talent-points']--;
    webgl_stat_modify(talents[talent]);
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    if(!character){
        return;
    }

    let equipment_ui = '<ul>';
    for(const slot in character['equipment']){
        const item = character['equipment'][slot] !== void 0
          ? character['equipment'][slot]
          : '';
        equipment_ui += '<li>' + slot + ': ' + item;
    }

    let inventory_ui = '<ul>';
    for(const item in character['inventory']){
        inventory_ui += '<li>' + character['inventory'][item]['id'];
    }

    character['talent-points-max'] = character['level'];

    core_ui_update({
      'class': true,
      'ids': {
        'equipment': equipment_ui + '</ul>',
        'inventory': inventory_ui + '</ul>',
        'jump-height': character['jump-height'],
        'level': character['level'],
        'level-xp': character['level-xp'],
        'life': character['life'],
        'life-max': character['life-max'],
        'mana': character['mana'],
        'mana-max': character['mana-max'],
        'skill': character['skill'],
        'speed': character['speed'],
        'talent-points': character['talent-points-max'] - character['talent-points'],
      },
      'todo': 'innerHTML',
    });
}
