Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendValueInput("inp")
        .setCheck(null)
        .appendField("console.log");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['console_log'] = function(block, generator) {
  var value_inp = generator.valueToCode(block, 'inp', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'console.log('+value_inp+');\n';
  return code;
};

Blockly.Blocks['vector3'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Vector3")
        .appendField("x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y:");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z:");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#bbbb00');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// };
javascript.javascriptGenerator.forBlock['vector3'] = function(block, generator) {
  var value_x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
  var value_z = generator.valueToCode(block, 'z', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code =  'new THREE.Vector3('+value_x+', '+value_y+', '+value_z+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 99];
};

Blockly.Blocks['create_line'] = {
  init: function() {
    this.appendValueInput("points")
        .setCheck(null)
        .appendField("create line in points:");
    this.appendValueInput("colour")
        .setCheck(null)
        .appendField("with color:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bbbb00');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['create_line'] = function(block, generator) {
  var value_points = generator.valueToCode(block, 'points', javascript.Order.ATOMIC);
  var value_colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'var geometry = new THREE.BufferGeometry().setFromPoints('+value_points+');\n\
  var material = new THREE.LineBasicMaterial({ color: '+value_colour+',linewidth: 5});\n\
  var line = new THREE.Line(geometry, material);\n\
  linesGroup.add(line);\n';
  return code;
};


Blockly.Blocks['array_push'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField('Array');
    this.appendValueInput('VALUE')
      .appendField('.push');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#aa00aa');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['array_push'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code=array+'.push('+value+');\n'
  return code;
};

Blockly.Blocks['empty_array'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[ ]");
    this.setOutput(true, 'Array');
    this.setColour('#aa00aa');
    this.setTooltip("empry array");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['empty_array'] = function (block) {
  // 在这里生成一个空白数组
  var code = '[]';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};