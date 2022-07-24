Blockly.JavaScript['maior'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  value_name = value_name.replace('(', '')
  value_name = value_name.replace(')', '')
  var code = '> ' + value_name;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['analogvalue'] = function(block) {
  var number_analog_value = block.getFieldValue('analog_value');
  
  var code = number_analog_value;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};