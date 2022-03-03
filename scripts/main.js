/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
 (function() {

  let currentButton;

  function handlePlay(event) {
    loadWorkspace(event.target);
    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    let finalCode = code.split(' mycodestartHere')
    document.getElementById('código_aqui').innerText= finalCode[1]
     
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
          "name": "Control",
          "contents": [
            {
              "kind": "block",
              "type": "controls_if"
            },
          ]
        },
        {
          "kind": "category",
          "name": "Logic",
          "colour": "315",
          "contents": [
            {
              "kind": "block",
              "type": "logic_compare"
            },
            {
              "kind": "block",
              "type": "logic_operation"
            },
            {
              "kind": "block",
              "type": "logic_boolean"
            }
          ]
        },
        {
          "kind": "category",
          "name": "Sketch",
          "colour": "215",
          "contents": [
            {
              'kind': 'block',
              'type': 'setupdefinitionsdois',
            }, {
              'kind': 'block',
              'type': 'setupinitlabel',
            }, {
              'kind': 'block',
              'type': 'loopandsetup',
            }, 
            
          ]
        }, {
          "kind": "category",
          "name": "Variables",
          "custom": "VARIABLE"
        }
      ]
    
   
  };






  

  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: false,
  });
})();
