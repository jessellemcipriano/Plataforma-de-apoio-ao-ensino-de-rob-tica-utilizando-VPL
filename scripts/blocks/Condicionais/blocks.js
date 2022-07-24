
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

 Blockly.defineBlocksWithJsonArray([
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

  //----------------------------------------------------------------------------//
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

  //----------------------------------------------------------------------------//
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

  //----------------------------------------------------------------------------//

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

 



//-----------------------------------------------------------------------------------------------------------------------------------
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
}

]);