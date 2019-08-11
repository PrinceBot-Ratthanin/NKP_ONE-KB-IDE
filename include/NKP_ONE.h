/*  
#include "NKP_Switch.h"       
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


SSD1306Wire display(0x3c, 21, 22);


#define M1A 2
#define M1B 4
#define M2A 16
#define M2B 17

void NKP_ONE(){

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
void Run_following_of_line(int _speed){

  float Kp = 4 ;
  float Ki = 0;
  float Kd = 50;
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;

    int speed_max = _speed;
    present_position = readline() / ((5 - 1) * 10) ;
    setpoint = 50.0;
    errors = setpoint - present_position;
    integral = integral + errors ;
    derivative = (errors - previous_error) ;
    output = Kp * errors + Ki * integral + Kd * derivative;
    int max_output = 100;
    previous_error = errors;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    int speed_left = speed_max - output;
    int speed_right = speed_max + output;
    if(speed_left > 0){
      motor(1,1,speed_left);
    }
    else{
      motor(1,2,speed_left);
    }
    if(speed_right > 0){
      motor(2,1,speed_right);
    }
    else
    {
      motor(2,2,speed_right);
    }
    delay(1);
}
void wait(){
  pinMode(15,INPUT_PULLUP);
  display.setFont(ArialMT_Plain_16);
  display.drawString(25,0,"NKP_ONE");
  display.drawString(24,20,"Welcome");
  display.display();
  delay(1000);
  while(digitalRead(15) == 1){
  display.clear();
  
  display.drawString(0,0,String(String("A0,")));
  display.drawString(24,0,String(analog(A0)));
  display.drawString(65,0,String(String("A1,")));
  display.drawString(90,0,String(analog(A1)));
  display.drawString(0,16,String(String("A2,")));
  display.drawString(24,16,String(analog(A2)));
  display.drawString(65,16,String(String("A3,")));
  display.drawString(90,16,String(analog(A3)));
  display.drawString(35,32,String(String("A4,")));
  display.drawString(60,32,String(analog(A4)));
  display.display();
  delay(50);
  }
  beep();
  display.clear();
  display.display();
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