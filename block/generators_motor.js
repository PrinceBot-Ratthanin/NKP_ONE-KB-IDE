
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
  // code += 'motor(1,' + value_speed + ');\t';
  // code += 'motor(2,' + value_speed + ');\n';
  //code += 'errors = 0;integral =0 ;derivative =0;output =0;\n';
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
  //code += 'errors = 0;integral =0 ;derivative =0;output =0;\n';
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

Blockly.JavaScript['NKP_Servo_motor_Moving'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_present_angle = Blockly.JavaScript.valueToCode(block, 'present_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_traget_angle = Blockly.JavaScript.valueToCode(block, 'traget_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speed_servo = Blockly.JavaScript.valueToCode(block, 'speed_servo', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_moving(' + dropdown_ch + ', ' + value_present_angle +', ' + value_traget_angle +', ' + value_speed_servo +');\n';
  return code;
};
Blockly.JavaScript['NKP_Servo_run'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_traget_angle = Blockly.JavaScript.valueToCode(block, 'traget_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speed_servo = Blockly.JavaScript.valueToCode(block, 'speed_servo', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_servo_dif = Blockly.JavaScript.valueToCode(block, 'servo_dif', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_run(' + dropdown_ch + ',' + value_traget_angle +', ' + value_speed_servo +', ' + value_servo_dif +')\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


}
