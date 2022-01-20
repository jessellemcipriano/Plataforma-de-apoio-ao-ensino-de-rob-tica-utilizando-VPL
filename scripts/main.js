/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
 (function() {

  let currentButton;

  function handlePlay(event) {
    console.log('handleplay')
    loadWorkspace(event.target);
    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    console.log(code)
    
  }

  function loadWorkspace(button) {
    console.log('loadwordspace')
    const workspace = Blockly.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    }
  }

  function save(button) {
    console.log('function save')
    button.blocklySave = Blockly.serialization.workspaces.save(
        Blockly.getMainWorkspace());
  }

  function handleSave() {
    console.log('handlesave')
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function enableEditMode() {
    console.log('enableeditmode')
    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    console.log('enablemarkermode')
    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }

 
 
  document.querySelector('#save').addEventListener('click', handlePlay);

  function enableBlocklyMode(e) {
    console.log('enablaBlocklyMode')
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }


  
  enableEditMode();

 
  const toolbox = {
    'kind': 'flyoutToolbox',
    'contents': [
       {
        'kind': 'block',
        'type': 'setup',
      }, {
        'kind': 'block',
        'type': 'input',
      }, {
        'kind': 'block',
        'type': 'teste',
      },
      {
        'kind': 'block',
        'type': 'text',
      }
    ],
  };

  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: true,
  });
})();
