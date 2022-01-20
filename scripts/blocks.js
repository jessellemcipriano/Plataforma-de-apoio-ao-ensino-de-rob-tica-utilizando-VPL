/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  {
    "type": "input",
    "message0": "se %1 %2 %3 Faça %4 %5",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "sensor ",
        "options": [
          [
            "sensor de temperatura",
            "temp"
          ],
          [
            "sensor de chuva",
            "chuva"
          ],
          [
            "sensor de luminosidade",
            "car"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sensor_state",
        "options": [
          [
            "High",
            "High"
          ],
          [
            "Low",
            "Low"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "atuador",
        "options": [
          [
            "led",
            "led"
          ],
          [
            "buzzer",
            "buzzer"
          ],
          [
            "motor dc",
            "motor_dc"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "atuador_state",
        "options": [
          [
            "High",
            "high"
          ],
          [
            "Low",
            "Low"
          ]
        ]
      }
    ],
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  }, {
    "type": "setup",
    "message0": "Setup %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "Pino Analógico 1",
            "A1"
          ],
          [
            "Pino Analógico 2",
            "A2"
          ],
          [
            "Pino Analógico3",
            "A3"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "PinType",
        "options": [
          [
            "Tipo Input",
            "input"
          ],
          [
            "Tipo Output",
            "output"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "pinName",
        "text": "Nome do pino"
      }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 195,
    "tooltip": "",
    "helpUrl": ""
  }, {
    "type": "teste",
    "message0": "teste %1",
    "args0": [
      {
        "type": "input_value",
        "name": "teste"
      }
    ],
    "inputsInline": false,
    "nextStatement": true,
    "colour": 195,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['input'] = function(block) {
  var dropdown_sensor_ = block.getFieldValue('sensor ');
  var dropdown_sensor_state = block.getFieldValue('sensor_state');
  var dropdown_atuador = block.getFieldValue('atuador');
  var dropdown_atuador_state = block.getFieldValue('atuador_state');
  // TODO: Assemble JavaScript into code variable.
  var code = 'aqui ta o código do input';
  return code;
};

Blockly.JavaScript['setup'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_pintype = block.getFieldValue('PinType');
  var text_pinname = block.getFieldValue('pinName');
  // TODO: Assemble JavaScript into code variable.
  var code = 'pino ' + dropdown_name + ' tipo ' + dropdown_pintype;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['teste'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'teste', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'teste' + value_name;
  return code;
};