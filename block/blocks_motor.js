
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['NKP_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set motor")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
  }
};

Blockly.Blocks['NKP_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "ch");
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
  }
};

Blockly.Blocks['NKP_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
  }
};
Blockly.Blocks['NKP_motor_forward'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Move Forward at speed %2 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_backward'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Move Backward at speed %2 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 20,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_forward2'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Move Forward left wheel at speed %2 %% and right wheel at speed %3 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed1",
        "check": "Number"
      }, {
        "type": "input_value",
        "name": "speed2",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_backward2'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Move Backward left wheel at speed %2 %% and right wheel at speed %3 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed1",
        "check": "Number"
      }, {
        "type": "input_value",
        "name": "speed2",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_turn_left'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Turn Left at speed %2 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_turn_right'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Turn Right at speed %2 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_spin_left'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Spin Left at speed %2 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};

Blockly.Blocks['NKP_motor_spin_right'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Spin Right at speed %2 %%",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }, {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};
Blockly.Blocks['NKP_motor_stop'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 Stop Moving",
      "args0": [{
        "type": "field_image",
        "src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
        "width": 18,
        "height": 16,
        "alt": "*",
        "flipRtl": false
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
    });
  }
};


}
