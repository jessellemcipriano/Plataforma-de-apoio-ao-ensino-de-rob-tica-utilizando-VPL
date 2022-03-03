/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([
   
  {
    "type": "loopinitlabel",
    "message0": "Loop %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "Loop"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  }, 
  
  //-----------------------------------------
  {
    "type": "setupinitlabel",
    "message0": "Setup %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "Setup"
      }
    ],
    "inputsInline": false,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "setupdefinitionsdois",
    "message0": "Pino %1 tipo %2 %3 chamado  %4 %5",
    "args0": [
      {
        "type": "field_number",
        "name": "inputNumber",
        "value": 0,
        "min": 0,
        "max": 50
      },
      {
        "type": "field_dropdown",
        "name": "AnalogDigType",
        "options": [
          [
            "Analógico",
            "Analog"
          ],
          [
            "Digital",
            "Dig"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "InOutPin",
        "options": [
          [
            "de saída",
            "OUTPUT"
          ],
          [
            "de entrada",
            "INPUT"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "loopandsetup",
    "message0": "Setup %1 Loop %2",
    "args0": [
      {
        "type": "input_statement",
        "name": "Loop"
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "inputsInline": false,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  }
  
]);



Blockly.JavaScript['setupinitlabel'] = function(block) {
  var statements_setup = Blockly.JavaScript.statementToCode(block, 'Setup');
  console.log(statements_setup)
  const text_pinname = statements_setup.split(';')
  const tamanho=  text_pinname.length -1
  let initialize =''
  let setupBody= ''
  let i= 0
  
  do{
    initialize = initialize + '\n' + text_pinname[i]
    setupBody = setupBody + '\n' + text_pinname[i+1]
    i= i +2
  }while( i<tamanho)

  
  var code = ' mycodestartHere '+  initialize + '\n \n void setup(){ '+ setupBody  + ';\n}'
  return code;
};


Blockly.JavaScript['setupdefinitionsdois'] = function(block) {
  var pinNumber = block.getFieldValue('inputNumber');
  var dropdown_analogdigtype = block.getFieldValue('AnalogDigType');
  var inoutpin = block.getFieldValue('InOutPin');
  var text_pinname = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' int ' + text_pinname + ' = ' + pinNumber + '; ' + 'pinMode(' + text_pinname + ',' + inoutpin + ');'
  return code;
};

Blockly.JavaScript['loopinitlabel'] = function(block) {
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n void loop(){\n' + statements_loop + '\n}' ;
  return code;
};

Blockly.JavaScript['loopandsetup'] = function(block) {
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'oi';
  return code;
};