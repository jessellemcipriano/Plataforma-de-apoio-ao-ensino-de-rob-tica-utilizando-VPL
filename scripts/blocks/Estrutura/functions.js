Blockly.JavaScript['setupinitlabel'] = function (block) {

  var statements_setup = Blockly.JavaScript.statementToCode(block, 'Setup');
  let initialize = ''
  let setupBody = ''
  let library = ''

  if (statements_setup) {
    const statements = statements_setup.split('}')
    for (statement of statements) {
      try {
        statement = statement + '}'
        statement = JSON.parse(statement)
        statement.variableName = '<code class="variavel">' + statement.variableName + '</code>'

        if (statement.variableName.includes('motorservo')) {
          library += '<br>#include &ltServo.h&gt <br><br>'
          library += 'Servo ' + statement.variableName + '; <br>'
          library += 'int  servomotor_angle = 0; <br>'
          initialize += '<br>#define SERVO ' + statement.pinNumber + '<br>'
          setupBody += ' <br>' +statement.variableName+'.attach(SERVO);'
          setupBody += ' <br>' +statement.variableName+'.write(servomotor_angle);<br>'
        }

        else {
          initialize = initialize + '<br> int  ' + statement.variableName + '  = ' + statement.pinNumber + ';'
          setupBody = setupBody + '<br> pinMode( ' + statement.variableName + ' ,' + statement.pinMode + ');'
        }


      } catch (error) {
        continue
      }
    }
  }
  var code = library + '<br><code class="bloco_setupLoop">' + initialize + '<br> <br> void setup(){ ' + setupBody + '<br>}</code>'
  return code;
};





Blockly.JavaScript['looplabel'] = function (block) {
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
  // TODO: Assemble JavaScript into code variable.
  var code = '<code class="bloco_setupLoop"><br> <br> void loop() { <br>' + statements_loop + ' <br><br> }</code>';
  return code;
};




Blockly.JavaScript['analogpindefinition'] = function (block) {
  var pinNumber = block.getFieldValue('pinNumber');
  var pinmode = block.getFieldValue('pinMode');
  var variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  variable = variable.replace('(', '')
  variable = variable.replace(')', '')
  console.log(variable)

  var code = {
    variableName: variable,
    pinNumber: pinNumber,
    pinMode: pinmode
  }

  return JSON.stringify(code);

};

Blockly.JavaScript['digpindefinition'] = function (block) {
  var pinNumber = block.getFieldValue('pinNumber');
  var pinmode = block.getFieldValue('pinMode');
  var variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  variable = variable.replace('(', '')
  variable = variable.replace(')', '')
  console.log(variable)

  var code = {
    variableName: variable,
    pinNumber: pinNumber,
    pinMode: pinmode
  }

  return JSON.stringify(code);

};


Blockly.JavaScript['motor_dc_1_pindefinition'] = function (block) {
  var pinname = block.getFieldValue('pinName');
  var pinnumber = block.getFieldValue('pinNumber');
  // TODO: Assemble JavaScript into code variable.
  var code = {
    variableName: pinname,
    pinNumber: pinnumber,
    pinMode: "OUTPUT"
  }

  return JSON.stringify(code);
};



Blockly.JavaScript['motor_dc_2_pindefinition'] = function (block) {
  var pinname = block.getFieldValue('pinName');
  var pinnumber = block.getFieldValue('pinNumber');
  // TODO: Assemble JavaScript into code variable.
  var code = {
    variableName: pinname,
    pinNumber: pinnumber,
    pinMode: "OUTPUT"
  }

  return JSON.stringify(code);
};