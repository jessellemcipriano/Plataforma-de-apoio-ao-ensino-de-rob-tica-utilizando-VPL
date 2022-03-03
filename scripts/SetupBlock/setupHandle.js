/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

 Blockly.defineBlocksWithJsonArray([
    {
      "type": "setupdefinitions",
      "message0": "Pino %1 tipo %2 %3",
      "args0": [
        {
          "type": "field_number",
          "name": "NAME",
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
              "outputPin"
            ],
            [
              "de entrada",
              "inputPin"
            ]
          ]
        }, 
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    },
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
     
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    }, {
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
      }
    
  ]);
  
  
  
  Blockly.JavaScript['setupinitlabel'] = function(block) {
    var statements_setup = Blockly.JavaScript.statementToCode(block, 'Setup');
    // TODO: Assemble JavaScript into code variable.
    var code = 'void setup(){ '+ statements_setup+' \n}';
    return code;
  }
  
  Blockly.JavaScript['setupdefinitionsdois'] = function(block) {
    var number_inputnumber = block.getFieldValue('inputNumber');
    var dropdown_analogdigtype = block.getFieldValue('AnalogDigType');
    var dropdown_inoutpin = block.getFieldValue('InOutPin');
    var text_pinname = block.getFieldValue('pinName');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };