module.exports = {
    blocks : [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
        {
            name : 'Display',
            color : '230',
            icon : '/static/icons/icons8_picture_96px_1.png',
            blocks : [
                {
                    xml : `<block type="variables_set">
                                <field name="VAR">img1</field>
                                <value name="VALUE">
                                    <block type="i2c128x64_create_image" inline="false"></block>
                                </value>
                            </block>`
                },{
                    xml : 
                    `<block type="i2c128x64_display_image">
                        <value name="img">
                            <block type="variables_get">
                                <field name="VAR">img1</field>
                            </block>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'i2c128x64_display_clear',
                'i2c128x64_display_display',
                { 
                    xml : 
                    `<block type="i2c128x64_display_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_line">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_rect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_circle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_progress_bar">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                        <value name="progress">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_pixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>    
                    </block>`
                },
                {
                    xml : 
                    `<block type="i2c128x64_display_string_width">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'i2c128x64_display_width',
                'i2c128x64_display_height',
                'basic_string'
            ]
        },
        {
            name : 'Sensor',
            color : '230',
            icon : '/static/icons/icons8_thermometer_96px.png',
            blocks : [
                'sw1_press',
                'button_1_status',
                'Knob_status',
                'TCSensor_status',
                'Read_position_TCSensor',
                'NKP_beep',
                {
                    xml : 
                    `<block type="NKP_beep_delay">
                        <value name="_delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="TCS_color_status">
                        <value name="_color">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'NKP_beep_on',
                'NKP_beep_off',
                {
                    xml : 
                    `<block type="Set_pin_Tcsensor">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                        <value name="x3">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                        <value name="x4">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="TCSensor_pin">
                        <value name="ch1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="ch2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="ch3">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="ch4">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="ch5">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                
                {
                    xml : 
                    `<block type="Set_min_Tcsensor">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                        <value name="x3">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                        <value name="x4">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="Set_max_Tcsensor">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">3500</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">3500</field>
                            </shadow>
                        </value>
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">3500</field>
                            </shadow>
                        </value>
                        <value name="x3">
                            <shadow type="math_number">
                                <field name="NUM">3500</field>
                            </shadow>
                        </value>
                        <value name="x4">
                            <shadow type="math_number">
                                <field name="NUM">3500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                
            ]
        },
        {
            name : 'GPIO',
            color : '230',
            icon : '/static/icons/icons8_electronics_96px.png',
            blocks : [
                'io_board_read',
                'io_board_write',
                {
                    xml : 
                    `<block type="io_board_write_value">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                }
            ]
        },
        {
            name : 'Motor',
            color : '230',
            icon: "/static/icons/icons8_workflow_128px.png",
            blocks : [

                
                { 
                    xml : 
                    `<block type="NKP_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'NKP_motor_stop',
                {
                    xml : 
                    `<block type="NKP_motor_stop_ch">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_forward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_backward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_spin_left">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_spin_right">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_turn_left">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_turn_right">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="NKP_motor">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="NKP_motor_forward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="NKP_motor_backward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="Run_following_of_line">
                        <value name="_speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="_kp">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="_ki">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="_kd">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
                },
            ]
        }
    ]
}