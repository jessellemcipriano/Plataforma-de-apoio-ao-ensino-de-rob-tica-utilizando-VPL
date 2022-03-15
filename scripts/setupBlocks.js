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
  },

  {
    "type": "calibracao",
    "message0": " Pino %1 Chamado %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "A1",
            "A1"
          ],
          [
            "A2",
            "A2"
          ],
          [
            "A3",
            "A3"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
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
    "colour": 40,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "analogcondition",
    "message0": "Leitura do(a) %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_value",
        "name": "conditionVariable"
      },
      {
        "type": "field_dropdown",
        "name": "condition",
        "options": [
          [
            "Igual a",
            "=="
          ],
          [
            "Maior que",
            ">"
          ],
          [
            "Menor que",
            "<"
          ],
          [
            "Menor ou igual a",
            "<="
          ],
          [
            "Maior ou igual a",
            ">="
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "conditionValue",
        "value": 1063,
        "min": 0,
        "max": 1063
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  }, 

  {
    "type": "pindefinition",
    "message0": "Pino %1 %2 chamado  %3 %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pinNumber",
        "options": [
          [
            "A0",
            "A0"
          ],
          [
            "A1",
            "A1"
          ],
          [
            "A2",
            "A2"
          ],
          [
            "A3",
            "A3"
          ],
          [
            "A4",
            "A4"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ],
          [
            "4",
            "4"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "pinMode",
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
        "name": "variable"
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
    "type": "and",
    "message0": "%1 e %2 %3",
    "args0": [
      {
        "type": "input_statement",
        "name": "first_condition"
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "second_condition"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "delay",
    "message0": "Aguarde %1 milissegundos",
    "args0": [
      {
        "type": "field_number",
        "name": "delayTime",
        "value": 0,
        "min": 0,
        "max": 50000
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  }
  
  
]);



Blockly.JavaScript['setupinitlabel'] = function(block) {
  console.log(Blockly.Blocks.variables_get)
  var statements_setup = Blockly.JavaScript.statementToCode(block, 'Setup');
  console.log(statements_setup)
  const text_pinname = statements_setup.split(';')
  const tamanho=  text_pinname.length -1
  let initialize =''
  let setupBody= ''
  let i= 0
  
  do{
    initialize = initialize + '<br>' + text_pinname[i] + ';'
    setupBody = setupBody + '<br>' + text_pinname[i+1] + ';'
    i= i +2
  }while( i<tamanho)

  
  var code = ' mycodestartHere '+ '<code class="bloco_setupLoop">' + initialize + '<br> <br> void setup(){ '+ setupBody  + '<br>}</code>'
  return code;
};




Blockly.JavaScript['looplabel'] = function(block) {
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
  // TODO: Assemble JavaScript into code variable.
  var code = '<code class="bloco_setupLoop"><br> <br> void loop() { <br>' + statements_loop + ' <br> }</code>' ;
  return code;
};

Blockly.JavaScript['if_control'] = function(block) {
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = ' <br> <code class="bloco_controle" > if(' + statements_condition + ') { ' + statements_action + '<br>} /* Fim do if */ </code>' ;
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
  var code = ' <code class="bloco_ação" > analogWrite(' + '<code class="bloco_variavel" >' + value_name +  '</code>' + ',' + conversion + '); </code>' ;
  return code;
};



Blockly.JavaScript['digital_action'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '<br> <code class="bloco_ação" > digitalWrite(' + '<code class="bloco_variavel" >' + value_name +  '</code>' + ',' +  dropdown_name + '); </code>' ;
  return code;
};

Blockly.JavaScript['calibracao'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  ' mycodestartHere ' + '<code style="color:#a58c5b!important"> int ' + value_name + ' = ' +  dropdown_name + ' ;<br>' + ' int valorSensor = 0;' + '<br> void setup() { <br> ' + 'pinMode(' + value_name + ', INPUT);<br>' + 'Serial.begin(9600); <br>} <br>void loop() { <br> valorSensor=analogRead('+ value_name+ '); <br> Serial.print("Valor lido pelo Sensor = "); <br> Serial.println(valorSensor);}</code>'
  console.log(code)
  return code;
};


Blockly.JavaScript['analogcondition'] = function(block) {
  var conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var condition = block.getFieldValue('condition');
  var conditionvalue = block.getFieldValue('conditionValue');
  // TODO: Assemble JavaScript into code variable.
  var code = 'analogRead(' + conditionvariable + ') ' + condition + ' ' + conditionvalue 
  return code;
};

Blockly.JavaScript['pindefinition'] = function(block) {
  var pinNumber = block.getFieldValue('pinNumber');
  var pinmode = block.getFieldValue('pinMode');
  var variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ' int ' + variable + ' = ' + pinNumber + '; ' + 'pinMode(' + variable + ',' + pinmode + ');'
  return code;
};

Blockly.JavaScript['and'] = function(block) {
  var statements_first_condition = Blockly.JavaScript.statementToCode(block, 'first_condition');
  var statements_second_condition = Blockly.JavaScript.statementToCode(block, 'second_condition');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_first_condition +  ' && ' + statements_second_condition  ;
  return code;
};

Blockly.JavaScript['delay'] = function(block) {
  var number_delaytime = block.getFieldValue('delayTime');
  // TODO: Assemble JavaScript into code variable.
  var code = '<code class="bloco_ação"><br> delay(' + number_delaytime + ');</code>'
  return code;
};
