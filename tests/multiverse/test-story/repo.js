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
        webgl_characters[webgl_character_id]['path-id'] = 'path-' + path;
    }
    choices++;

    update_ui();
}

function new_game(){
    if(webgl !== 0
      && !globalThis.confirm('Start a new story? Progress will be lost.')){
        return;
    }
    webgl_character_id = '_me';

    choices = 0;

    webgl_level_load({
      'character': {
        'controls': '',
        'level': -1,
        'spawn-path-id': 'path-start',
        'spawn-translate-y': 5,
        'spawn-translate-z': 50,
      },
      'json': {
        'camera-zoom-max': 0,
        'paths': {
          'path-start': {
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
            'static': true,
            'entities': [
              {
                'id': 'ground',
                'texture': 'grid.png',
                'texture-x': 10,
                'texture-y': 20,
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
