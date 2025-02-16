'use strict';

function item_drop(item){
}

function item_pickup(item){
}

function item_toggle(item){
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new adventure? Progress will be lost.')){
        return;
    }
    webgl_level_unload();

    equipment = {
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
    };
    inventory = [
      {
        'id': 'Test Item',
      },
    ];
    mana = 0;
    mana_max = 0;
    npcs = {};
    skill = '';
    talent_points = 0;
    talent_points_max = 0;
    talents = {
      'life': {
        'stat': 'life',
        'value': 1,
      },
    };

    webgl_level_load({
      'character': {
        'camera-zoom': 25,
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'jump-height': .6,
        'level': 0,
        'lives': 1,
        'speed': .5,
        'randomize': true,
      },
      'json': {
        'camera-zoom-min': 10,
        'spawn-rotate-x': 30,
        'spawn-translate-y': 1,
        'y-min': -100,
        'characters': [
          {
            'id': 'rpg-test',
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
    webgl_character_spawn();

    npc_add({
      'id': 'npc-friend',
      'level': 1,
      'team': 0,
      'translate-y': 3,
      'translate-z': -60,
    });
    npc_add({
      'drop-chance': .1,
      'drops': [
        {
          'id': 'test-item',
        },
      ],
      'id': 'npc-enemy',
      'level': 2,
      'translate-x': 140,
      'translate-y': 3,
      'translate-z': -60,
    });

    update_ui();
}

function npc_add(args){
    npcs[args['id']] = {
      'drop-chance': 0,
      'drops': [],
      'skill': '',
      'team': 1,
      ...args,
    };

    webgl_character_init({
      'collides': true,
      'controls': 'arpg',
      'gravity': 1,
      'level': 0,
      'life-max': 100,
      'lives': 1,
      'randomize': true,
      ...npcs[args['id']],
    });
}

function npc_kill(id){
    if(npcs[id]['team'] !== 0
      && webgl_characters[id]['level'] >= webgl_characters[webgl_character_id]['level'] - 10){
        webgl_stat_modify({
          'stat': 'level-xp',
        });
    }

    if(Math.random() < npcs[id]['drop-chance']){
        item_drop(npcs[id]['drops'][core_random_integer({
          'max': npcs[id]['drops'].length,
        })]);
    }
}

function npc_skill_use(id){
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
        'equipment': {},
        'inventory': [],
        'mana': 0,
        'mana_max': 0,
        'npcs': {},
        'skill': '',
        'talents': {},
        'talent_points': 0,
        'talent_points_max': 0,
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
    core_tab_create({
      'content': 'Talents (<span id=talent-points></span> points): <span id=talents></span>',
      'group': 'rpg',
      'id': 'talents',
      'label': 'Talents',
    });
}

function repo_logic(){
    const character = webgl_characters[webgl_character_id];
    core_ui_update({
      'class': true,
      'ids': {
        'life': character['life'],
        'life-max': character['life-max'],
        'mana': mana,
        'mana-max': mana_max,
        'skill': skill,
      },
    });
}

function repo_stat_modify(){
    update_ui();
}

function skill_use(){
    if(skill.length === 0){
        return;
    }
}

function talent_modify(talent){
    if(talent_points <= 0){
        return;
    }

    talent_points--;
    webgl_stat_modify(talents[talent]);
}

function update_ui(){
    const character = webgl_characters[webgl_character_id];
    if(!character){
        return;
    }

    let equipment_ui = '<ul>';
    for(const slot in equipment){
        const item = equipment[slot] !== void 0
          ? equipment[slot]
          : '';
        equipment_ui += '<li>' + slot + ': ' + item;
    }

    let inventory_ui = '<ul>';
    for(const item in inventory){
        inventory_ui += '<li>' + inventory[item]['id'];
    }

    let talents_ui = '<ul>';
    for(const talent in talents){
        talents_ui += '<li>+' + talents[talent]['value'] + ' ' + talent + ' <button onclick="talent_modify(' + talent + ')" type=button>+</button>';
    }
    talent_points_max = character['level'];

    core_ui_update({
      'class': true,
      'ids': {
        'equipment': equipment_ui + '</ul>',
        'inventory': inventory_ui + '</ul>',
        'jump-height': character['jump-height'],
        'level': character['level'],
        'level-xp': character['level-xp'],
        'speed': character['speed'],
        'talent-points': talent_points_max - talent_points,
        'talents': talents_ui + '</ul>',
      },
      'todo': 'innerHTML',
    });
}
