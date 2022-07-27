Blockly.JavaScript['for'] = function(block) {
  var number_number = block.getFieldValue('number');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  let code = ' <code class="repeticao" > int i = 0; <br> for( i = 0; i <= ' + number_number + '; i++) { <div style="padding-left:20px"> ' + statements_action + '</div>}  </code>'
  return code;
};

Blockly.JavaScript['dowhile'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  var value_conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionvariable', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  value_conditionvariable = value_conditionvariable.replace(')', '');
  value_conditionvariable = value_conditionvariable.replace('(', '');
  
  if(statements_condition.includes('HIGH') || statements_condition.includes('LOW')){
    value_conditionvariable = '<code class="variavel">' + value_conditionvariable + '</code>'
    var code = ' <br> <code class="repeticao" > while( digitalRead(' + value_conditionvariable + ') == ' +  statements_condition + ' ) { <div style="padding-left:20px"><br> ' + statements_action + '<br></div>}  </code>' ;
  }

  else{
    value_conditionvariable = '<code class="variavel">' + value_conditionvariable + '</code>'
    var code = ' <br> <code class="repeticao" > while( analogRead(' + value_conditionvariable + ') ' +  statements_condition + ' ) { <div style="padding-left:20px"><br> ' + statements_action + '<br></div>}  </code>' ;
  }

  return code;
};

Blockly.JavaScript['while'] = function(block) {
  var value_conditionvariable = Blockly.JavaScript.valueToCode(block, 'conditionvariable', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  value_conditionvariable = value_conditionvariable.replace('(', '');
  value_conditionvariable = value_conditionvariable.replace(')', '');
  value_conditionvariable = '<code class="variavel">' + value_conditionvariable + '</code>'
  
  if(statements_condition.includes('HIGH') || statements_condition.includes('LOW')){
    var code = ' <br> <code class="repeticao" > while( digitalRead(' + value_conditionvariable + ') == ' +  statements_condition + ' ) { <div style="padding-left:20px"><br> ' + statements_action + '</div>}  </code>' ;
  }

  else{
    var code = ' <br> <code class="repeticao" > while( analogRead(' + value_conditionvariable + ') ' +  statements_condition + ' ) { <div style="padding-left:20px"><br> ' + statements_action + '</div>}  </code>' ;
  }

  return code;
};