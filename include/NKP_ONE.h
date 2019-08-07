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