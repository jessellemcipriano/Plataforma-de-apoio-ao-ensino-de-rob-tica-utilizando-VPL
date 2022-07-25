
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
    
    "type": "analogpindefinition",
    "message0": "Pino analógico %1 %2 conectado com %3 %4",
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
            "A5",
            "A5"
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
  //----------------------------------------------------------------------------//
  {
    "type": "motor_dc_1_pindefinition",
    "message0": "conexão  %1 do MOTOR_DC_1 %2 ligado ao pino %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pinName",
        "options": [
          [
            "N1",
            "N1 "
          ],
          [
            "N2",
            "N2 "
          ],
          
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "pinNumber",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  //----------------------------------------------------------------------------//
  {
    "type": "motor_dc_2_pindefinition",
    "message0": "conexão  %1 do MOTOR_DC_2 %2 ligado ao pino %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pinName",
        "options": [
          [
            "N3",
            "N3 "
          ],
          [
            "N4",
            "N4 "
          ],
          
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "pinNumber",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ]
        ]
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
    "type": "motor_dc_2_pindefinition",
    "message0": "conexão  %1 do MOTOR_DC_2 %2 ligado ao pino %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pinName",
        "options": [
          [
            "N3",
            "N3 "
          ],
          [
            "N4",
            "N4 "
          ],
          
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "pinNumber",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ]
        ]
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
    
    "type": "digpindefinition",
    "message0": "Pino digital %1 %2 conectado com %3 %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pinNumber",
        "options": [
          [
            "0",
            "0"
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
            "3 - PWM",
            "3"
          ],
          [
            "4",
            "4"
          ],
          [
            "5 - PWM",
            "5"
          ],
          [
            "6 - PWM",
            "6"
          ],
          [
            "7",
            "7"
          ],
          [
            "8",
            "8"
          ],
          [
            "9 - PWM",
            "9"
          ],
          [
            "10 - PWM",
            "10"
          ],
          [
            "11 - PWM",
            "11"
          ],
          [
            "12",
            "12"
          ],
          [
            "13",
            "13"
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


