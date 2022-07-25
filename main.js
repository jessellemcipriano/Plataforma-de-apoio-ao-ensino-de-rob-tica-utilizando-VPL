/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

(function () {

  let currentButton;
  let warning

  function handlePlay(event) {

    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    
    if (code != undefined ) {
      warning = '<h1>Arraste um bloquinho</h1>'
      console.log(warning)
      finalCodeProcessed = code.replace(undefined + ';', "")
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
    let div = document.getElementsByClassName('variavel')
    for (let i = 0; i < div.length; i++) {
      console.log(div[i])
    }
    console.log(div)
    
    clearInterval(interval)
    
  }

  enableEditMode();
  let interval = setInterval(onChangeLoadCode, 1000)


  const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      estrutura,
      condicionais, 
      repeticao,
      estado,
      operadores,
      açoes,
      calibração,
      componentesEletronicos,
    ]
  };

  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: true,
  });
})();




