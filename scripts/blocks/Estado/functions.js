Blockly.JavaScript['acionado'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<code class="estados">HIGH</code>';
  return code;
};

Blockly.JavaScript['naoacionado'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<code class="estados">LOW</code>';
  return code;
};

Blockly.JavaScript['medicao'] = function(block) {
  var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
  value_valor = value_valor.replace('(', '')
  value_valor = value_valor.replace(')', '')
  value_valor = '<code class="estados">' + value_valor + '</code>'
  var code = value_valor;
  return code;
};