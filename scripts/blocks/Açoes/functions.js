
Blockly.JavaScript['delay'] = function (block) {
  var number_delaytime = block.getFieldValue('delayTime');
  var code = '<code class="acoes">delay(' + number_delaytime + ');</code>'
  return code;
};


Blockly.JavaScript['digital_action'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

  let actionCode = '';

  if (value_name.includes('motordc1')) {
    actionCode += 'digitalWrite(<code class="variavel">N1</code>,' + dropdown_name + ');<br>';
    actionCode += 'digitalWrite(<code class="variavel">N2</code>,' + dropdown_name + ');<br>';
  }

  if (value_name.includes('motordc2')) {
    actionCode += 'digitalWrite(<code class="variavel">N3</code>,' + dropdown_name + ');<br>';
    actionCode += 'digitalWrite(<code class="variavel">N4</code>,' + dropdown_name + ');<br>';
  }

  if (!value_name.includes('motor')) {
    value_name = value_name.replace('(', '')
    value_name = value_name.replace(')', '')
    actionCode += 'digitalWrite(<code class="variavel">' + value_name + '</code>,' + dropdown_name + ');<br>';
  }

  var code = ' <code class="acoes" >' + actionCode + ' </code>';
  return code;
};

Blockly.JavaScript['angle_actions'] = function (block) {
  var conditionvariable = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var angle_value = block.getFieldValue('Angle');
  conditionvariable = conditionvariable.replace('(', '')
  conditionvariable = conditionvariable.replace(')', '')
  conditionvariable = '<code class="variavel">' + conditionvariable + '</code>'
  
  if(conditionvariable.includes('motorservo')){
    return '<code class="acoes" > '+conditionvariable +'.write(' + angle_value + ');</code>'
  }

  var code = ' <code class="acoes" > analogWrite(' + '<code class="bloco_variavel" >' + conditionvariable + '</code>' + ',' + conversion + '); </code>';
  return code;
};