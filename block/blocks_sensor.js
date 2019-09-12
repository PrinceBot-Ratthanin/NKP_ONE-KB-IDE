module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['button_1_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("SW1 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("get SW1 pressed or not");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Knob_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read Knob_status");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read Knob_status");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['sw1_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sw1_press");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['Read_position_TCSensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Position of line");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read Position of line");
 this.setHelpUrl("");
  }
};
/*Blockly.Blocks['TCSensor_status'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("TCSensor pin")
      .appendField(new Blockly.FieldDropdown([["A0","A0"],["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"], ["A8","A8"], ["A9","A9"]]), "_pin")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
  }
};*/
Blockly.Blocks['TCSensor_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCSensor pin")
        .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read input pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['TCS_color_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS_color pin")
        .appendField(new Blockly.FieldDropdown([["R","0"],["G","1"], ["B","2"]]), "_color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("color");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['TCSensor_pin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("TCSensor pin Ch1")
      .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch1");
    this.appendDummyInput()
      .appendField(" Ch2")
      .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch2");
    this.appendDummyInput()
      .appendField(" Ch3")
      .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch3");
    this.appendDummyInput()
      .appendField(" Ch4")
      .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch4");
    this.appendDummyInput()
      .appendField(" Ch5")
      .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch5");   
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['NKP_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer beep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['NKP_beep_delay'] = {
  init: function() {
    this.appendValueInput("_delay")
      .setCheck("Number")
      .appendField("Buzzer Ond");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
  }
};
Blockly.Blocks['NKP_beep_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['NKP_beep_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Set_pin_Tcsensor'] = {
  init: function() {
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(" Set_pin_Tcsensor Pin A");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Pin B");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("Pin C");
    this.appendValueInput("x3")
        .setCheck("Number")
        .appendField("Pin D");
    this.appendValueInput("x4")
        .setCheck("Number")
        .appendField("Pin E");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set_pin_Tcsensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Set_min_Tcsensor'] = {
  init: function() {
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(" Set min value Pin A");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Pin B");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("Pin C");
    this.appendValueInput("x3")
        .setCheck("Number")
        .appendField("Pin D");
    this.appendValueInput("x4")
        .setCheck("Number")
        .appendField("Pin E");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set_min_Tcsensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Set_max_Tcsensor'] = {
  init: function() {
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(" Set max value Pin A");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Pin B");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("Pin C");
    this.appendValueInput("x3")
        .setCheck("Number")
        .appendField("Pin D");
    this.appendValueInput("x4")
        .setCheck("Number")
        .appendField("Pin E");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set_max_Tcsensor");
 this.setHelpUrl("");
  }
};

/*Blockly.Blocks['button_2_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("button B is pressed");
    this.setOutput(true, "Boolean");
    this.setColour(90);
 this.setTooltip("get button B state");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bme280_read_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/MFG_BME280.png", 20, 20, "*"))
        .appendField("read temperature");
    this.setInputsInline(true);
    this.setOutput(true, "double");
    this.setColour(90);
 this.setTooltip("read temperature");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bme280_read_humid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/MFG_BME280.png", 20, 20, "*"))
        .appendField("read humidity");
    this.setInputsInline(true);
    this.setOutput(true, "double");
    this.setColour(90);
 this.setTooltip("read humidity");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bme280_read_pressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/MFG_BME280.png", 20, 20, "*"))
        .appendField("read air pressure");
    this.setInputsInline(true);
    this.setOutput(true, "double");
    this.setColour(90);
 this.setTooltip("read air pressure");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bme280_read_altitude'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/MFG_BME280.png", 20, 20, "*"))
        .appendField("read altitude");
    this.setInputsInline(true);
    this.setOutput(true, "double");
    this.setColour(90);
 this.setTooltip("read altitude");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1680_read_light_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bh1680.png", 20, 20, "*"))
        .appendField("read light sensor 1");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read light intensity from sensor 1");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1680_read_light_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bh1680.png", 20, 20, "*"))
        .appendField("read light sensor 2");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read light intensity from sensor 2");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1745_read_red'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bh1745.png", 20, 20, "*"))
        .appendField("read \"red\" light color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(0);
 this.setTooltip("read red light intensity from sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1745_read_green'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bh1745.png", 20, 20, "*"))
        .appendField("read \"green\" light color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
 this.setTooltip("read green light color illuminance from RGB sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1745_read_blue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bh1745.png", 20, 20, "*"))
        .appendField("read \"blue\" light color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("read blue light color illuminance from RGB sensor");
 this.setHelpUrl("");
  }
};

/*Blockly.Blocks['bh1745_read_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bh1745.png", 20, 20, "*"))
        .appendField("read \"clear\" light color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("read blue light color illuminance from RGB sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_acc_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"x\" axis from accelerometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"x\" axis from accelerometer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_acc_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"y\" axis from accelerometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"y\" axis from accelerometer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_acc_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"z\" axis from accelerometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"z\" axis from accelerometer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_gyro_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"x\" axis from gyroscope");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"x\" axis from gyroscope");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_gyro_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"y\" axis from gyroscope");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"y\" axis from gyroscope");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_gyro_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"z\" axis from gyroscope");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"z\" axis from gyroscope");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_mag_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"x\" axis from magnetometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"x\" axis from magnetometer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_mag_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"y\" axis from magnetometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"y\" axis from magnetometer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmx055_read_mag_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read \"z\" axis from magnetometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read \"z\" axis from magnetometer");
 this.setHelpUrl("");
  }
};*/

}