'use strict';

function choose(choice){
    const choicelist = [
      [
        'left',
        'right',
        'left',
        'start',
      ],
    ];
    if(choices >= choicelist.length){
        return;
    }
    webgl_characters[webgl_character_id]['path-id'] = 'path-' + choicelist[choices][choice];
    choices++;

    update_ui();
}

function new_game(){
    webgl_level_unload();

    choices = 0;

    webgl_level_load({
      'character': -1,
      'json': {
        'camera-zoom-max': 0,
        'spawn-path-id': 'path-start',
        'spawn-translate-z': 50,
        'paths': {
          'path-start': {
            'end': 'exit',
            'points': [
              {
                'translate-z': 50,
              },
              {
                'translate-z': 25,
              },
            ],
          },
          'path-left': {
            'end': 'exit',
            'points': [
              {
                'translate-z': 25,
              },
              {
                'translate-x': -25,
                'translate-z': 0,
              },
              {
                'translate-z': -40,
              },
            ],
          },
          'path-right': {
            'end': 'exit',
            'points': [
              {
                'translate-z': 25,
              },
              {
                'translate-x': 25,
                'translate-z': 0,
              },
              {
                'translate-z': -40,
              },
            ],
          },
        },
        'characters': [
          {
            'id': 'story-test',
            'entities': [
              {
                'id': 'ground',
                'texture-id': 'grid.png',
                'texture-repeat-x': 10,
                'texture-repeat-y': 20,
                'vertex-colors': [
                  .2, .2, .2, 1,
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
    webgl_character_init({
      'controls': '',
      'level': -1,
    });
    update_ui();
    webgl_character_spawn();
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
        'choose-0': {
          'onclick': function(){
              choose(0);
          },
        },
        'choose-1': {
          'onclick': function(){
              choose(1);
          },
        },
        'choose-2': {
          'onclick': function(){
              choose(2);
          },
        },
        'choose-3': {
          'onclick': function(){
              choose(3);
          },
        },
        'new-game': {
          'onclick': new_game,
        },
      },
      'globals': {
        'choices': 0,
      },
      'info': '<button id=new-game type=button>Start Story Test</button>',
      'menu': true,
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mouseup': {
          'todo': webgl_pick_entity,
        },
      },
      'root': '../../common-webgl-standalone.htm',
      'title': 'Docs.htm',
      'ui': '<div id=choice><button id=choose-0 type=button>Choice 0</button><button id=choose-1 type=button>Choice 1</button><br>'
        + '<button id=choose-2 type=button>Choice 2</button><button id=choose-3 type=button>Choice 3</button></div>'
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
