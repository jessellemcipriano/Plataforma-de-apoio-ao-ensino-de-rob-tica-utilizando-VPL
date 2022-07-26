
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([

  {
    "type": "for",
    "message0": "Repetir %1 vezes %2 %3",
    "args0": [
      {
        "type": "field_number",
        "name": "number",
        "value": 0,
        "min": 0,
        "max": 150
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "action"
      }
    ],
    "colour": 285,
    "tooltip": "",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null,
  },

  {
    "type": "dowhile",
    "message0": "Faça %1 Enquanto %2 %3 %4",
    "args0": [
      {
        "type": "input_statement",
        "name": "action"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "conditionvariable"
      },
      {
        "type": "input_statement",
        "name": "condition"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "while",
    "message0": "Enquanto %1 %2 %3 Faça %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "conditionvariable"
      },
      {
        "type": "input_statement",
        "name": "condition"
      },
      {
        "type": "input_statement",
        "name": "action"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  }

]);