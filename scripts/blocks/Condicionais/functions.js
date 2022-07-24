Blockly.JavaScript['logic_digital_condition'] = function(block) {
  var conditionvariable = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_conditionstate = block.getFieldValue('ConditionState');
  conditionvariable = conditionvariable.replace('(', '')
  conditionvariable = conditionvariable.replace(')', '')
  conditionvariable = '<code class="variavel">' + conditionvariable + '</code>'
  var code = ' <code class="bloco_condição" >' + 'digitalRead(' +  conditionvariable  + ' == ' +  dropdown_conditionstate + '</code>' ;
  return code;
};


Blockly.JavaScript['analogcondition'] = function(block) {
  var conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var condition = block.getFieldValue('condition');
  var conditionvalue = block.getFieldValue('conditionValue');
  conditionvariable = conditionvariable.replace('(', '')
  conditionvariable = conditionvariable.replace(')', '')
  conditionvariable = '<code class="variavel">' + conditionvariable + '</code>'
  var code = '<code class="bloco_condição" >analogRead(' +  conditionvariable + condition + ' ' + conditionvalue +'</code>'
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




Blockly.JavaScript['if'] = function(block) {
  var value_conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionvariable', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  value_conditionvariable = value_conditionvariable.replace('(', '')
  value_conditionvariable = value_conditionvariable.replace(')', '')
  value_conditionvariable = '<code class="variavel">' + value_conditionvariable + '</code>'
  console.log(statements_condition)
  var code
  if(statements_condition.includes('HIGH') || statements_condition.includes('LOW')){
    code = ' <br> <code class="bloco_controle" > if( digitalRead(' + value_conditionvariable + ') == ' +  statements_condition + ' ) { <br> ' + statements_action + '<br>}  </code>' ;
  }
  else{
    code = ' <br> <code class="bloco_controle" > if( analogRead(' + value_conditionvariable + ') ' +  statements_condition + ' ) { <br> ' + statements_action + '<br>}  </code>' ;
  }
  return code;
};