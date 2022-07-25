Blockly.JavaScript['if'] = function(block) {
  var value_conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionvariable', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  value_conditionvariable = value_conditionvariable.replace('(', '')
  value_conditionvariable = value_conditionvariable.replace(')', '')
  value_conditionvariable = '<code class="variavel">' + value_conditionvariable + '</code>'
 
  var code
  if(statements_condition.includes('HIGH') || statements_condition.includes('LOW')){
    code = ' <br> <code class="condicionais" > if( digitalRead(' + value_conditionvariable + ') == ' +  statements_condition + ' ) { <br> ' + statements_action + '<br>}  </code>' ;
  }
  else{
    code = ' <br> <code class="condicionais" > if( analogRead(' + value_conditionvariable + ') ' +  statements_condition + ' ) { <br> ' + statements_action + '<br>}  </code>' ;
  }
  return code;
};



Blockly.JavaScript['ifelse'] = function(block) {
  var value_conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionvariable', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  var statements_elseaction = Blockly.JavaScript.statementToCode(block, 'elseaction');
  value_conditionvariable = value_conditionvariable.replace('(', '')
  value_conditionvariable = value_conditionvariable.replace(')', '')
  value_conditionvariable = '<code class="variavel">' + value_conditionvariable + '</code>'

  var code
  if(statements_condition.includes('HIGH') || statements_condition.includes('LOW')){
    code = ' <br> <code class="condicionais" > if( digitalRead(' + value_conditionvariable + ') == ' +  statements_condition + ' ) { <br> ' + statements_action + '<br>}  else { <br>' + statements_elseaction + '<br>}  </code>' ;
  }
  else{
    code = ' <br> <code class="condicionais" > if( analogRead(' + value_conditionvariable + ') ' +  statements_condition + ' ) { <br> ' + statements_action + '<br>}  else { <br>' + statements_elseaction + '<br>}  </code>' ;
  }
  return code;
  
};