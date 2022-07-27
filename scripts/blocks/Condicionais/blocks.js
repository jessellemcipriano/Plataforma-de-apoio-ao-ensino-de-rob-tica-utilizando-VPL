
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([

  {
    "type": "if",
    "message0": "Se %1 %2 Faça %3 %4",
    "args0": [
      {
        "type": "input_value",
        "name": "conditionvariable",
        "align": "CENTRE"
      },
      {
        "type": "input_statement",
        "name": "condition",
        "align": "CENTRE"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "action"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "ifelse",
    "message0": "Se %1 %2 Faça %3 %4 Senão faça %5 %6",
    "args0": [
      {
        "type": "input_value",
        "name": "conditionvariable",
        "align": "CENTRE"
      },
      {
        "type": "input_statement",
        "name": "condition",
        "align": "CENTRE"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "action"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "elseaction"
      }
    ],
    "inputsInline": true,
    "colour": 105,
    "tooltip": "",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null,
  }

]);