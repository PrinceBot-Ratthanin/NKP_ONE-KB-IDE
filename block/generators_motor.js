
//Block from IKB1 


module.exports = function(Blockly) {

  Blockly.JavaScript['NKP_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['NKP_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['NKP_servo2'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['NKP_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, 0);\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 1, 0);\n';
  return code;
};

Blockly.JavaScript['NKP_motor_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor_stop'] = function(block) {  
  var code = 'ao();\n';
  return code;
};

Blockly.JavaScript['NKP_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = 'motor(' + dropdown_ch + ', 1, 0);\n';
  return code;
};

Blockly.JavaScript['NKP_motor_forward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed1 + ');\t';
  code += 'motor(2, 1, ' + value_speed2 + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor_backward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed1 + ');\t';
  code += 'motor(2, 2, ' + value_speed2 + ');\n';
  return code;
};

Blockly.JavaScript['Run_following_of_line'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_following_of_line( ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['NKP_ONE_PID_setPin'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = block.getFieldValue('S0_Pin');
  var value_s1 = block.getFieldValue('S1_Pin');
  var value_s2 = block.getFieldValue('S2_Pin');
  var value_s3 = block.getFieldValue('S3_Pin');
  var value_s4 = block.getFieldValue('S4_Pin');
  var value_s5 = block.getFieldValue('S5_Pin');
  var value_s6 = block.getFieldValue('S6_Pin');
  var value_s7 = block.getFieldValue('S7_Pin');
  // var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Pin('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};
Blockly.JavaScript['PID_readLine'] = function(block) {
    //var value_pin = block.getFieldValue('pin');
    //var code = `readline(${value_pin})`;  
    var code = `readline()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['NKP_ONE_PID_setMin'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Min('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};
Blockly.JavaScript['NKP_ONE_PID_setMax'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Max('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};

Blockly.JavaScript['NKP_ONE_Run_PID'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_PID('+ value_speed+','+value_KP+','+value_KD+');\n';
  return code;
};

}
