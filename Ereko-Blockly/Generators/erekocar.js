import {Order} from 'blockly/javascript';

export const forBlock = Object.create(null);

forBlock['andar'] = function(block, generator) {
  var dropdown_diracao = block.getFieldValue('diracao');
  var dropdown_velocidade = block.getFieldValue('velocidade');

  var code = 'andar("' + dropdown_diracao + '", ' + dropdown_velocidade + ');';
  return [code, javascript.Order.NONE];
};

forBlock['enquanto'] = function(block, generator) {
  var dropdown_while = block.getFieldValue('while');
  var value_do = generator.valueToCode(block, 'do', javascript.Order.ATOMIC);
  var code = 'while (' + dropdown_while + ') {\n' + value_do + '}\n';
  return code;
};

forBlock['se'] = function(block, generator) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_if = generator.statementToCode(block, 'if');
  var value_do = generator.valueToCode(block, 'do', javascript.Order.ATOMIC);
  var code = 'if (' + dropdown_name + ') {\n' + statements_if + '} else {\n' + value_do + '}\n';
  return code;
};

//Exemplo
forBlock['add_text'] = function(block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || '\'\'';
  const color =
    generator.valueToCode(block, 'COLOR', Order.ATOMIC) || '\'#ffffff\'';

  const addText = generator.provideFunction_(
      'addText',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  textEl.style.color = color;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};
