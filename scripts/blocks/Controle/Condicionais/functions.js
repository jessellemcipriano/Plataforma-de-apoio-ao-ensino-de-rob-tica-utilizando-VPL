Blockly.JavaScript['logic_digital_condition'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_conditionstate = block.getFieldValue('ConditionState');
  // TODO: Assemble JavaScript into code variable.
  var code = ' <code class="bloco_condição" >' + 'digitalRead(' + '<code class="bloco_variavel" >' + value_name +  '</code>)' + ' == ' +  dropdown_conditionstate + '</code>' ;
  return code;
};


Blockly.JavaScript['analogcondition'] = function(block) {
  var conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var condition = block.getFieldValue('condition');
  var conditionvalue = block.getFieldValue('conditionValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '<code class="bloco_condição" >analogRead(' + '<code class="bloco_variavel" >'+ conditionvariable + '</code>) ' + condition + ' ' + conditionvalue +'</code>'
  return code;
};

Blockly.JavaScript['and'] = function(block) {
  var statements_first_condition = Blockly.JavaScript.statementToCode(block, 'first_condition');
  var statements_second_condition = Blockly.JavaScript.statementToCode(block, 'second_condition');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_first_condition +  ' && ' + statements_second_condition  ;
  return code;
};

Blockly.JavaScript['if_control'] = function(block) {
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  statements_action=statements_action.replace('&&',"")
  var code = ' <br> <code class="bloco_controle" > if(' + statements_condition + ' ) { <br> ' + statements_action + '<br>}  </code>' ;
  return code;
};
