
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

int PID_NumPin = 3;
int PID_SetupPin[] = {0,0,0,0,0,0,0,0};
int PID_Min[] = {10,10,10,10,10,10,10,10};
int PID_Max[] = {1000,1000,1000,1000,1000,1000,1000,1000};
float errors = 0;
float output = 0;
float integral = 0;
float derivative = 0;
float previous_error = 0;
uint16_t state_on_Line = 0;
uint32_t _lastPosition;

int PID_NumPin_B = 3;
int PID_SetupPin_B[] = {0,0,0,0,0,0,0,0};
int PID_Min_B[] = {10,10,10,10,10,10,10,10};
int PID_Max_B[] = {1000,1000,1000,1000,1000,1000,1000,1000};
float errors_B = 0;
float output_B = 0;
float integral_B = 0;
float derivative_B = 0;
float previous_error_B = 0;
uint16_t state_on_Line_B = 0;
uint32_t _lastPosition_B;


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
  ledcSetup(6, 500, 8);
  ledcSetup(7, 500, 8);
  ledcSetup(4, 500, 8);
  ledcSetup(5, 500, 8);
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
void wait(){
  pinMode(15,INPUT_PULLUP);
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(25,0,"NKP_ONE");
  display.drawString(24,20,"Welcome");
  display.display();
  delay(700);
  display.setFont(ArialMT_Plain_10);
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
      display.drawString(0,45,String(String("A6::")));
      display.drawString(28,45,String(analog(A6)));
      display.drawString(65,45,String(String("A7::")));
      display.drawString(93,45,String(analog(A7)));
	  	display.display();
	  	delay(100);
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
void PID_set_Min(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min[0] = S0;PID_Min[1] = S1;PID_Min[2] = S2;PID_Min[3] = S3;
  PID_Min[4] = S4;PID_Min[5] = S5;PID_Min[6] = S6;PID_Min[7] = S7;
}
void PID_set_Max(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max[0] = S0;PID_Max[1] = S1;PID_Max[2] = S2;PID_Max[3] = S3;
  PID_Max[4] = S4;PID_Max[5] = S5;PID_Max[6] = S6;PID_Max[7] = S7;
}
void PID_set_Pin(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin[0] = S0;PID_SetupPin[1] = S1;PID_SetupPin[2] = S2;PID_SetupPin[3] = S3;
  PID_SetupPin[4] = S4;PID_SetupPin[5] = S5;PID_SetupPin[6] = S6;PID_SetupPin[7] = S7;
}
int readline()   
{                
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < PID_NumPin ; i++) 
  {
    long value = map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
    value = constrain(value,0,100);      
    if (value > 20) { 
      onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < ((PID_NumPin-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin-1) * 100);
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
void Run_PID(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  int speed_PID = RUN_PID_speed;
  int present_position = readline();
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  errors = present_position - setpoint;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
  
  int m1Speed = speed_PID + output ;
  int m2Speed = speed_PID - output;
  // m1Speed = constrain(m1Speed,-RUN_PID_speed,RUN_PID_speed);
  // m2Speed = constrain(m2Speed,-RUN_PID_speed,RUN_PID_speed);
  // if(m1Speed < 0 )m1Speed = 0;
  // if(m2Speed < 0 )m2Speed = 0;


  motor(1,m1Speed);
  motor(2,m2Speed);
  delay(1);
  previous_error = errors;
}

void PID_set_Min_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min_B[0] = S0;PID_Min_B[1] = S1;PID_Min_B[2] = S2;PID_Min_B[3] = S3;
  PID_Min_B[4] = S4;PID_Min_B[5] = S5;PID_Min_B[6] = S6;PID_Min_B[7] = S7;
}
void PID_set_Max_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max_B[0] = S0;PID_Max_B[1] = S1;PID_Max_B[2] = S2;PID_Max_B[3] = S3;
  PID_Max_B[4] = S4;PID_Max_B[5] = S5;PID_Max_B[6] = S6;PID_Max_B[7] = S7;
}
void PID_set_Pin_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin_B[0] = S0;PID_SetupPin_B[1] = S1;PID_SetupPin_B[2] = S2;PID_SetupPin_B[3] = S3;
  PID_SetupPin_B[4] = S4;PID_SetupPin_B[5] = S5;PID_SetupPin_B[6] = S6;PID_SetupPin_B[7] = S7;
}
int readline_B()   
{                
  bool onLine_B = false;
  long avg_B = 0;
  long sum_B = 0;
  for (uint8_t i = 0; i < PID_NumPin_B ; i++) 
  {
    long value_B = map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 100, 0);
     value_B = constrain(value_B,0,100);    
    if (value_B > 20) { 
      onLine_B = true;
    }
    if (value_B > 5){
      avg_B += (long)value_B * (i * 100);
      sum_B += value_B;
    }
  }
  if (!onLine_B)
  {
    if (_lastPosition_B < ((PID_NumPin_B-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin_B-1) * 100);
    }
  }
  _lastPosition_B = avg_B / sum_B;
  return _lastPosition_B;
}
void Run_PID_B(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  int speed_PID_B = RUN_PID_speed;
  int present_position_B = readline_B();
  int setpoint_B = ((PID_NumPin_B - 1) * 100) / 2;
  errors_B = present_position_B - setpoint_B;
  integral_B = integral_B + errors_B ;
  derivative_B = (errors_B - previous_error_B) ;
  output_B = RUN_PID_KP * errors_B  + RUN_PID_KD * derivative_B;
  
  int m1Speed = speed_PID_B - output_B ;
  int m2Speed = speed_PID_B + output_B;
  m1Speed = constrain(m1Speed,-RUN_PID_speed,RUN_PID_speed);
  m2Speed = constrain(m2Speed,-RUN_PID_speed,RUN_PID_speed);
  // if(m1Speed < 0 )m1Speed = 0;
  // if(m2Speed < 0 )m2Speed = 0;


  motor(1,-m1Speed);
  motor(2,-m2Speed);
  delay(1);
  previous_error_B = errors_B;
}
