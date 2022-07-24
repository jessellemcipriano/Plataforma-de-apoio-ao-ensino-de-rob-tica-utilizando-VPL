
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

 Blockly.defineBlocksWithJsonArray([
    {
        "type": "angle_actions",
        "message0": "Gire o %1 %2 para %3",
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
        "tooltip": "Use para pausar a ação por alguns milissegundos",
        "helpUrl": "urldeajuda"
      }
  
]);

