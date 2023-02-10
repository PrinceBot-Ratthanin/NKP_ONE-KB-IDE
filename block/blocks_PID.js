
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';



Blockly.Blocks['Run_following_of_line'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed for line following");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['NKP_ONE_PID_setPin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Front_setPin:")
      .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"]]), "numSensor");
    this.appendDummyInput()
      .appendField("S0_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S0_Pin");
    this.appendDummyInput()
      .appendField("S1_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S1_Pin");
    this.appendDummyInput()
      .appendField("S2_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S2_Pin");
    this.appendDummyInput()
      .appendField("S3_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S3_Pin");
    this.appendDummyInput()
      .appendField("S4_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S4_Pin");
    this.appendDummyInput()
      .appendField("S5_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S5_Pin");
    this.appendDummyInput()
      .appendField("S6_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S6_Pin");
    this.appendDummyInput()
      .appendField("S7_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S7_Pin");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PID_readLine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front_PID_readLine");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("PID_readLine");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['NKP_ONE_PID_setMin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front_setMin");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['NKP_ONE_PID_setMax'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front_setMax");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['NKP_ONE_Run_PID'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Front_Run_PD_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};



Blockly.Blocks['Run_following_of_line_B'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed for line following");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("");
  }
};
Blockly.Blocks['NKP_ONE_PID_setPin_B'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Back_setPin:")
      .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"]]), "numSensor");
    this.appendDummyInput()
      .appendField("S0_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S0_Pin");
    this.appendDummyInput()
      .appendField("S1_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S1_Pin");
    this.appendDummyInput()
      .appendField("S2_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S2_Pin");
    this.appendDummyInput()
      .appendField("S3_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S3_Pin");
    this.appendDummyInput()
      .appendField("S4_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S4_Pin");
    this.appendDummyInput()
      .appendField("S5_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S5_Pin");
    this.appendDummyInput()
      .appendField("S6_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S6_Pin");
    this.appendDummyInput()
      .appendField("S7_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "10"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"]]), "S7_Pin");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PID_readLine_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Back_PID_readLine");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(280);
 this.setTooltip("PID_readLine");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['NKP_ONE_PID_setMin_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Back_setMin");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['NKP_ONE_PID_setMax_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Back_setMax");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['NKP_ONE_Run_PID_B'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Back_Run_PD_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
}
