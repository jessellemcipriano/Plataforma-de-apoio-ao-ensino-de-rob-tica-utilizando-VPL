
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

 Blockly.defineBlocksWithJsonArray([
  {
    "type": "maior",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "operador",
        "text": "Maior que"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "menor",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "operador",
        "text": "Menor que"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //menor ou igual

  {
    "type": "menorigual",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "operador",
        "text": "Menor ou igual"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "maiorigual",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "operador",
        "text": "Maior ou igual"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //igual
  {
    "type": "igual",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "operador",
        "text": "Igual a"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //diferente
  {
    "type": "diferente",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "operador",
        "text": "Diferente de"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "analogvalue",
    "message0": "%1",
    "args0": [
      {
        "type": "field_number",
        "name": "analog_value",
        "value": 100,
        "min": 0,
        "max": 1063
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }

]);