/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function () {

  let currentButton;

  function handlePlay(event) {
    loadWorkspace(event.target);
    
    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    let finalCode = code.split(' mycodestartHere')
    console.log('------------')
    console.log(finalCode)
    document.getElementById('código_aqui').innerHTML = finalCode[1]

  }

  function loadWorkspace(button) {
    const workspace = Blockly.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    }
  }

  function save(button) {
    button.blocklySave = Blockly.serialization.workspaces.save(
      Blockly.getMainWorkspace());
  }

  function handleSave() {
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function enableEditMode() {

    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {

    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }


  document.querySelector('#save').addEventListener('click', handlePlay);

  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }



  enableEditMode();


  const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Sketch",
        "colour": "180",
        "contents": [
          {
            'kind': 'block',
            'type': 'setupinitlabel',
          }, {
            "kind": "block",
            "type": "looplabel"
          },
          {
            'kind': 'block',
            'type': 'pindefinition',
          },

        ]
      },
      {
        "kind": "category",
        "name": "Condicionais",
        "colour": "105",
        "contents": [
          {
            "kind": "block",
            "type": "logic_digital_condition"
          },
          {
            "kind": "block",
            "type": "analogcondition"
          },
          {
            "kind": "block",
            "type": "and"
          }
          
          
        ]
      },
      {
        "kind": "category",
        "name": "Variáveis",
        "custom": "VARIABLE",
        "colour": 330,
      },

      {
        "kind": "category",
        "name": "Controle",
        "colour": "285",
        "contents": [
          {
            "kind": "block",
            "type": "if_control"
          }

        ]
      },

      {
        "kind": "category",
        "name": "Ações",
        "colour": "240",
        "contents": [
          {
            "kind": "block",
            "type": "angle_actions"
          },
          {
            "kind": "block",
            "type": "digital_action"
          },
          {
            "kind": "block",
            "type": "delay"
          }
          
        ]
      },
      {
        "kind": "category",
        "name": "Calibração",
        "colour": "40",
        "contents": [
          {
            "kind": "block",
            "type": "calibracao"
          },
         
          
        ]
      }

    ]


  };








  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: true,
  });
})();