
Blockly.JavaScript['delay'] = function(block) {
    var number_delaytime = block.getFieldValue('delayTime');
    var code = '<code class="bloco_ação"><br> delay(' + number_delaytime + ');</code>'
    return code;
  };
  
  
  Blockly.JavaScript['digital_action'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '<br> <code class="bloco_ação" > digitalWrite(' + '<code class="bloco_variavel" >' + value_name +  '</code>' + ',' +  dropdown_name + '); </code>' ;
    return code;
  };

  Blockly.JavaScript['angle_actions'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var angle_angle = block.getFieldValue('Angle');
    const conversion = (255 * angle_angle) / 360
    // TODO: Assemble JavaScript into code variable.
    var code = ' <code class="bloco_ação" > analogWrite(' + '<code class="bloco_variavel" >' + value_name +  '</code>' + ',' + conversion + '); </code>' ;
    return code;
  };