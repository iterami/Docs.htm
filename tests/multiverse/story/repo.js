'use strict';

function choose(choice){
    const choicelist = [
      [
        'left',
        'right',
        'start',
        '',
      ],
    ];
    if(choices >= choicelist.length){
        return;
    }
    const path = choicelist[choices][choice];
    if(path.length){
        webgl_characters[webgl_character_id].path_id = 'path_' + path;
    }
    choices++;

    update_ui();
}

function load_start(spawn){
    webgl_level_load({
      'character': 0,
      'json': {
        'camera_zoom_max': 0,
        'paths': [
          {
            'id': 'path_start',
            'points': [
              {
                'position_z': 50,
              },
              {
                'position_z': 25,
              },
            ],
          },
          {
            'id': 'path_left',
            'points': [
              {
                'position_z': 25,
              },
              {
                'position_x': -25,
                'position_z': 0,
              },
              {
                'position_z': -40,
              },
            ],
          },
          {
            'id': 'path_right',
            'points': [
              {
                'position_z': 25,
              },
              {
                'position_x': 25,
                'position_z': 0,
              },
              {
                'position_z': -40,
              },
            ],
          },
        ],
        'picking': 2,
        'characters': [
          {
            'id': 'story_start',
            'spawn': false,
            'entities': [
              {
                'id': 'ground',
                'texture': 'grid.png',
                'texture_x': 10,
                'texture_y': 20,
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
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new story? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    choices = 0;

    load_start(0);
    webgl_character_init({
      'controls': '',
      'level': -1,
      'spawn': {
        'path_id': 'path_start',
        'position_y': 5,
        'position_z': 50,
      },
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
                core_escape(true);
                event.preventDefault();
            }
        },
      },
      'events': {
        'choose_0': {
          'onclick': function(){
              choose(0);
          },
        },
        'choose_1': {
          'onclick': function(){
              choose(1);
          },
        },
        'choose_2': {
          'onclick': function(){
              choose(2);
          },
        },
        'choose_3': {
          'onclick': function(){
              choose(3);
          },
        },
        'new_game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'choices': 0,
      },
      'info': '<button id=new_game type=button>Start Story Test</button>',
      'menu': true,
      'pointerbinds': {
        'contextmenu': {},
        'pointerup': {
          'todo': webgl_pick_entity,
        },
      },
      'root': '../../webgl-standalone.htm',
      'storage_controls': true,
      'title': 'Docs.htm',
      'ui': '<div id=choice><button id=choose_0 type=button>Choice 0</button><button id=choose_1 type=button>Choice 1</button><br>'
        + '<button id=choose_2 type=button>Choice 2</button><button id=choose_3 type=button>Choice 3</button></div>'
        + 'Choices: <span id=choices></span>',
    });
}

function update_ui(){
    core_ui_update({
      'class': true,
      'ids': {
        'choices': choices,
      },
    });
}
