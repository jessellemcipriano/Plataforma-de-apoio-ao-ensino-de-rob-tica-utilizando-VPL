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
  }, 

  {
    "type": "looplabel",
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


  {
    "type": "if_control",
    "message0": "Se %1 %2 Faça %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "condition"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "action"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "logic_digital_condition",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "field_dropdown",
        "name": "ConditionState",
        "options": [
          [
            "Estiver Acionado(a)",
            "HIGH"
          ],
          [
            "Estiver Não acionado(a)",
            "LOW"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  }, 

  {
    "type": "angle_actions",
    "message0": "Gire o %1 %2 em %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "field_angle",
        "name": "Angle",
        "angle": 0
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
    "tooltip": "http://localhost:3000",
    "helpUrl": "http://localhost:3000"
  },

  {
    "type": "digital_action",
    "message0": "%1 %2 o(a) %3 %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "Ative",
            "HIGH"
          ],
          [
            "Desative",
            "LOW"
          ]
        ]
      },
      {
        "type": "input_dummy"
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
    "colour": 230,
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
    initialize = initialize + '<br>' + text_pinname[i]
    setupBody = setupBody + '<br>' + text_pinname[i+1]
    i= i +2
  }while( i<tamanho)

  
  var code = ' mycodestartHere '+  initialize + '<br> <br> void setup(){ '+ setupBody  + ';<br>}'
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




Blockly.JavaScript['looplabel'] = function(block) {
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
  // TODO: Assemble JavaScript into code variable.
  var code = '<br> <br> void loop() { <br>' + statements_loop + ' <br> }' ;
  return code;
};

Blockly.JavaScript['if_control'] = function(block) {
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = ' <br> // bloco referente ao Se...Faça <br> <code class="bloco_controle" > if(' + statements_condition + ') { ' + statements_action + '<br>} /* Fim do if */ </code>' ;
  return code;
};

Blockly.JavaScript['logic_digital_condition'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_conditionstate = block.getFieldValue('ConditionState');
  // TODO: Assemble JavaScript into code variable.
  var code = ' <code class="bloco_condição" >'+ '<code class="bloco_variavel" >' + 'digitalRead(' + value_name +  ')</code>' + ' == ' +  dropdown_conditionstate + '</code>' ;
  return code;
};

Blockly.JavaScript['angle_actions'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var angle_angle = block.getFieldValue('Angle');
  const conversion = (255 * angle_angle) / 360
  // TODO: Assemble JavaScript into code variable.
  var code = ' <br> <code class="bloco_ação" > analogWrite(' + '<code class="bloco_variavel" >' + value_name +  '</code>' + ',' + conversion + ') </code>' ;
  return code;
};



Blockly.JavaScript['digital_action'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '<br> <code class="bloco_ação" > digitalWrite(' + '<code class="bloco_variavel" >' + value_name +  '</code>' + ',' +  dropdown_name + ') </code>' ;
  return code;
};