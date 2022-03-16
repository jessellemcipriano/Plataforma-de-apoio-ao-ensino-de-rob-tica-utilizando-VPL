/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function () {

  let currentButton;
  let globalWorkSpace
  let warning

  function handlePlay(event) {

    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    let finalCode = code.split(' mycodestartHere')
    

    if (finalCode[1] != undefined ) {
      warning = '<h1>Arraste um bloquinho</h1>'
      console.log(warning)
      finalCodeProcessed = finalCode[1].replace(undefined + ';', "")
      document.getElementById('código_aqui').innerHTML = finalCodeProcessed

    } else {
      warning = '<code style="color:pink!important" >Ops, Parece que você não definiu a estrutura inicial. Para isso utilize o setup e o loop, igual ao exemplo abaixo</code> <br>  <img src="./example.png" style="max-width:400px; max-height:200px " >'
      document.getElementById('código_aqui').innerHTML = warning
    }
  }


  function loadWorkspace(button) {
    const workspace = Blockly.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    }
  }



  function enableEditMode() {
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }



  document.querySelector('#save').addEventListener('click', handlePlay);
  document.querySelector('#toolbox').addEventListener('click', handlePlay);



  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }


  let workspace
  function onChangeLoadCode() {
    if (Blockly.getMainWorkspace() != undefined && workspace != '') {
      workspace = Blockly.getMainWorkspace();
      workspace.addChangeListener(handlePlay);
    }
  }

  enableEditMode();
  setInterval(onChangeLoadCode, 1000)


  const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Estrutura",
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
