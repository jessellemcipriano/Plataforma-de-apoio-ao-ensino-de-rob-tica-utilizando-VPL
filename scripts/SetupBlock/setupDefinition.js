/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
[{
  "type": "setupdefinitionsdois",
  "message0": "Pino %1 tipo %2 %3 chamado  %4",
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
          "outputPin"
        ],
        [
          "de entrada",
          "inputPin"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "pinName",
      "text": "Nome do pino"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}]

Blockly.JavaScript['setupdefinitionsdois'] = function(block) {
  var number_inputnumber = block.getFieldValue('inputNumber');
  var dropdown_analogdigtype = block.getFieldValue('AnalogDigType');
  var dropdown_inoutpin = block.getFieldValue('InOutPin');
  var text_pinname = block.getFieldValue('pinName');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};