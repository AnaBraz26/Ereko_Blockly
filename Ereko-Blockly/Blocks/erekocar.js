import * as Blockly from 'blockly/core';

const andar = {
"type": "andar",
"message0": "andar para  %1 %2  ms %3",
"args0": [
  {
    "type": "field_dropdown",
    "name": "diracao",
    "options": [
      [
        "direita",
        "1"
      ],
      [
        "esquerda",
        "-1"
      ],
      [
        "frente",
        "0"
      ]
    ]
  },
  {
    "type": "field_dropdown",
    "name": "velocidade",
    "options": [
      [
        "10",
        "devagar"
      ],
      [
        "20",
        "medio"
      ],
      [
        "30",
        "rapido"
      ]
    ]
  },
  {
    "type": "input_end_row"
  }
],
"output": null,
"colour": 230,
"tooltip": "",
"helpUrl": ""
};

export const blocks_andar = Blockly.common.createBlockDefinitionsFromJsonArray(
  [andar]);

const enquanto = {
"type": "while",
"message0": "while %1 %2 do %3",
"args0": [
  {
    "type": "field_dropdown",
    "name": "while",
    "options": [
      [
        "True",
        "OPTIONNAME"
      ],
      [
        "False",
        "OPTIONNAME"
      ]
    ]
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_value",
    "name": "do"
  }
],
"previousStatement": null,
"nextStatement": null,
"colour": 20,
"tooltip": "",
"helpUrl": ""
};

export const blocks_while = Blockly.common.createBlockDefinitionsFromJsonArray(
  [enquanto]);

const se = {
  "type": "if",
  "message0": "if %1 %2 motor virar %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "option",
          "OPTIONNAME"
        ],
        [
          "option",
          "OPTIONNAME"
        ],
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "if"
    },
    {
      "type": "input_value",
      "name": "do"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export const blocks_if = Blockly.common.createBlockDefinitionsFromJsonArray(
  [se]);