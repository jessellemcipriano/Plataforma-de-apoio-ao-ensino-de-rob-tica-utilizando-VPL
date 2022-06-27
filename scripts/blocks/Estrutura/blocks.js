
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
  
  //----------------------------------------------------------------------------//

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

  //----------------------------------------------------------------------------//
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

//----------------------------------------------------------------------------//
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
  }
]);

