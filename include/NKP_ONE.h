/*#include "NKP_Switch.h"       
#include "NKP_Knob.h"         
#include "NKP_Motor_drive.h"
#include "NKP_IO.h"
#include "NKP_Buzzer.h"
#include "NKP_TCSensor.h"
#include "NKP_OTA.h"*/
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Wire.h>  
#include <SPI.h>
#include "SSD1306Wire.h"
#include "SH1106.h"
#include "NKP_Motor_drive.h"
#include "NKP_Servo_lib.h"
#include "NKP_IO.h"
#include "NKP_TCSensor.h"
#include "Adafruit_TCS34725.h"
#include "NKP_Interrupt.h"
#include <MPU6050_tockn.h>
#include "dw_font.h"


MPU6050 mpu6050(Wire);



SSD1306Wire display(0x3c, 21, 22);


Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);



#define M1A 2
#define M1B 4
#define M2A 16
#define M2B 17

int state_IMU = 0;
void draw_pixel(int16_t x, int16_t y)
{
  display.setColor(WHITE);
  display.setPixel(x, y);
}

void clear_pixel(int16_t x, int16_t y)
{
  display.setColor(BLACK);
  display.setPixel(x, y);
}
void NKP_ONE(){
  Wire.begin();
  Serial.begin(115200);
  pinMode(15,INPUT_PULLUP);
  display.init();
  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_10);
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  ledcSetup(6, 5000, 8);
  ledcSetup(7, 5000, 8);
  ledcSetup(4, 5000, 8);
  ledcSetup(5, 5000, 8);
  ledcAttachPin(2, 6);
  ledcAttachPin(4, 7);
  ledcAttachPin(16, 4);
  ledcAttachPin(17, 5);
  if (tcs.begin()) {
     Serial.println("Found sensor");
  }
}

/*void Show_Thai(String name_thai,int x,int y){
  dw_font_init(&myfont,128,64,draw_pixel,clear_pixel);
  dw_font_setfont(&myfont, &font_th_sarabun_new_bold30);
  dw_font_goto(&myfont, x, y);
  dw_font_print(&myfont, name_thai);
}*/
void set_IMU(){
  delay(500);
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(15,0,"IMU_Calibrat");
  display.drawString(25,17,"3 Second");
  display.drawString(18,35,"Don't Move");
  display.display();
  mpu6050.begin();
  mpu6050.calcGyroOffsets(true);
  mpu6050.update();
  if((mpu6050.getAngleX()+1000) > 1100 || (mpu6050.getAngleX()+1000) < 900 ||
  	 (mpu6050.getAngleY()+1000) > 1100 || (mpu6050.getAngleY()+1000) < 900 ||
  	 (mpu6050.getAngleZ()+1000) > 1100 || (mpu6050.getAngleZ()+1000) < 900 )
  {
  	mpu6050.calcGyroOffsets(true);
  	mpu6050.update();
  }
  display.clear();
  display.drawString(0,0,"AngleX:");
  display.drawString(70,0,String(mpu6050.getAngleX()+1000));
  display.drawString(0,17,"AngleY:");
  display.drawString(70,17,String(mpu6050.getAngleY()+1000));
  display.drawString(0,35,"AngleZ:");
  display.drawString(70,35,String(mpu6050.getAngleZ()+1000));
  display.display();
  delay(700);
  state_IMU = 1;
}

int Read_angle(int angle_){
	
	if(state_IMU == 0){
		set_IMU();
	}
	else{
	mpu6050.update();
	    if(angle_ == 0){
	    	return mpu6050.getAngleX()+1000;
		}
		else if(angle_ == 1){
		    return mpu6050.getAngleY()+1000;
		}
		else if(angle_ == 2){
		    return mpu6050.getAngleZ()+1000;
		}
	}
	
}
#define _knob 36
int _Knob(){
  return analogRead(_knob);
}
void beep(){
  int _buzzer = 12;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(200);
  digitalWrite(_buzzer,LOW);
}
void beep(int _delay){
  int _buzzer = 12;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(_delay);
  digitalWrite(_buzzer,LOW);
}
float voltage_sensor(){
  return analogRead(14)*0.00464;
}
void beep_on(){
  int _buzzer = 12;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
}
void beep_off(){
  int _buzzer = 12;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,LOW);
}
void Run_following_of_line(int _speed,float Kp,float Ki,float Kd){
int16_t setpoint;
float present_position;
float errors = 0;
float output = 0;
float integral ;
float derivative ;
float previous_error;
    int speed_max = _speed;
    present_position = readline() / ((5 - 1) * 10) ;
    setpoint = 50.0;
    errors = setpoint - present_position;
    integral = integral + errors ;
    derivative = (errors - previous_error) ;
    output = Kp * errors + Ki * integral + Kd * derivative;
    int max_output = 70;
    previous_error = errors;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    int speed_left = speed_max - output;
    int speed_right = speed_max + output;
    if(speed_left > 0){
      motor(1,1,speed_left);
    }
    else if(speed_left <=0){
      motor(1,2,speed_left);
    }
    if(speed_right > 0){
      motor(2,1,speed_right);
    }
    else if(speed_right <=0){
      motor(2,2,speed_left);
    }
    delay(10);
}
void wait(){
  pinMode(15,INPUT_PULLUP);
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(25,0,"NKP_ONE");
  display.drawString(24,20,"Welcome");
  display.drawString(0,35,"Battery:");
  display.drawString(70,35,String(voltage_sensor()));
  display.drawString(115,35,"V");
  display.display();
  delay(700);
  while(digitalRead(15) == 1){
  		/*if(voltage_sensor() >1.00 && voltage_sensor() < 5.00){
  			beep();
  		}*/
	  	display.clear();
	  	display.drawString(0,0,String(String("A0::")));
	  	display.drawString(28,0,String(analog(A0)));
	  	display.drawString(65,0,String(String("A1::")));
	  	display.drawString(93,0,String(analog(A1)));
	  	display.drawString(0,16,String(String("A2::")));
	  	display.drawString(28,16,String(analog(A2)));
	 	display.drawString(65,16,String(String("A3::")));
	  	display.drawString(93,16,String(analog(A3)));
	  	display.drawString(0,32,String(String("A4::")));
	  	display.drawString(28,32,String(analog(A4)));
	  	display.drawString(65,32,String(String("A5::")));
	  	display.drawString(93,32,String(analog(A5)));
	  	display.display();
	  	delay(50);
  }
  beep();
  display.clear();
  display.display();
}
float Read_Color_TCS(int color_of_sensor){
  uint16_t clearcol_lib, red_lib, green_lib, blue_lib;
 float average_lib, r_lib, g_lib, b_lib;
 //delay(100); // Farbmessung dauert c. 50ms 
 tcs.getRawData(&red_lib, &green_lib, &blue_lib, &clearcol_lib);
 average_lib = (red_lib+green_lib+blue_lib)/3;
 r_lib = red_lib/average_lib;
 g_lib = green_lib/average_lib;
 b_lib = blue_lib/average_lib;
 if(color_of_sensor == 0){
  return r_lib*100;
 }
 else if(color_of_sensor == 1){
  return g_lib*100;
 }
  else if(color_of_sensor == 2){
  return b_lib*100;
 }
 }
/*void IO15(){
  while(sw1() == 1){
    set_oled(0,0,"press sw1 ");
    set_oled(0,8,"to start ");
  }
  set_oled_clear();
}
void OTA_SW1(){
	while(sw1() == 1){
    ArduinoOTA.handle();
    set_oled(0,0,"press sw1 ");
    set_oled(0,8,"to start ");
    delay(1);
  }
  set_oled_clear();

}*/