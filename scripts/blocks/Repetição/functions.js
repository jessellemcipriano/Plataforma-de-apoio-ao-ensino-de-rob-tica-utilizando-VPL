Blockly.JavaScript['for'] = function(block) {
  var number_number = block.getFieldValue('number');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  let code = '<br> <code class="bloco_controle" > int i = 0; <br> for( i = 0; i <= ' + number_number + '; i++) { <br> ' + statements_action + '<br>}  </code>'
  return code;
};