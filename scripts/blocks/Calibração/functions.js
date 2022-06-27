Blockly.JavaScript['calibracao'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  ' mycodestartHere ' + '<code style="color:#a58c5b!important"> int ' + value_name + ' = ' +  dropdown_name + ' ;<br>' + ' int valorSensor = 0;' + '<br> void setup() { <br> ' + 'pinMode(' + value_name + ', INPUT);<br>' + 'Serial.begin(9600); <br>} <br>void loop() { <br> valorSensor=analogRead('+ value_name+ '); <br> Serial.print("Valor lido pelo Sensor = "); <br> Serial.println(valorSensor);}</code>'
  
  return code;
};

