Blockly.JavaScript['setupinitlabel'] = function(block) {
 
    var statements_setup = Blockly.JavaScript.statementToCode(block, 'Setup');
    const text_pinname = statements_setup.split(';')
    const tamanho=  text_pinname.length -1
    let initialize =''
    let setupBody= ''
    let i= 0
    
    do{
      initialize = initialize + '<br>' + text_pinname[i] + ';'
      setupBody = setupBody + '<br>' + text_pinname[i+1] + ';'
      i= i +2
    }while( i<tamanho)
  
    if(initialize == '<br>;'){
      initialize = ''
    }
    
    var code = ' mycodestartHere '+ '<code class="bloco_setupLoop">' + initialize + '<br> <br> void setup(){ '+ setupBody  + '<br>}</code>'
    return code;
  };
  

  Blockly.JavaScript['looplabel'] = function(block) {
    var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
    // TODO: Assemble JavaScript into code variable.
    var code = '<code class="bloco_setupLoop"><br> <br> void loop() { <br>' + statements_loop + ' <br><br> }</code>' ;
    return code;
  };

  Blockly.JavaScript['pindefinition'] = function(block) {
    var pinNumber = block.getFieldValue('pinNumber');
    var pinmode = block.getFieldValue('pinMode');
    var variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ' int '+ '<code class="bloco_variavel" >' + variable + '</code> = ' + pinNumber + '; ' + 'pinMode(' + '<code class="bloco_variavel" >' + variable + '</code>,' + pinmode + ');'
    return code;
  };