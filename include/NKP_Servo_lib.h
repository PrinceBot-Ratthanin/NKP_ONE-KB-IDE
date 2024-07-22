#include "NKP_Servo.h"
#define _servo1 23
#define _servo2 19
#define _servo3 18
#define _servo4 5
#ifndef ALL
#define ALL 100
#endif

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;

int present_angleS1 = 90;
int present_angleS2 = 90;
int present_angleS3 = 90;
int present_angleS4 = 90;

void servo(uint8_t servo, int16_t angle)
{
  if (servo == ALL)
  {
    if (angle == -1)
    {
      servo1.detach();
      servo2.detach();
      servo3.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);

      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);

      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);

      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
  if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }
  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
  if (servo == 3)
  {
    if (angle == -1)
    {
      servo3.detach();
    }
    else
    {
      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);
    }
  }
  if (servo == 4)
  {
    if (angle == -1)
    {
      servo4.detach();
    }
    else
    {
      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
}

void servo_moving(uint8_t ch,uint8_t present_angle,uint8_t traget_angle,int speed_servo){
  if(present_angle > traget_angle){
    for(int i = present_angle;i>traget_angle;i-=2){
      servo(ch,i);delay(speed_servo);
    }
    
  }
  else if(present_angle <= traget_angle){
   for(int i = present_angle;i<traget_angle;i+=2){
      servo(ch,i);delay(speed_servo);
    }
  }
}
bool servo_run(int ch,int traget_angle,int speed_servo,int servo_dif){
  if(ch == 0){
    if((present_angleS1 - traget_angle) >servo_dif+1){present_angleS1 -= servo_dif;}
    else if((traget_angle - present_angleS1) >servo_dif+1){present_angleS1 += servo_dif;}
    else{return 1;}servo(ch,present_angleS1);delay(speed_servo);return 0;
  }
  if(ch == 1){
    if((present_angleS2 - traget_angle) >servo_dif+1){present_angleS2 -= servo_dif;}
    else if((traget_angle - present_angleS2) >servo_dif+1){present_angleS2 += servo_dif;}
    else{return 1;}servo(ch,present_angleS2);delay(speed_servo);return 0;
  }
  if(ch == 2){
    if((present_angleS3 - traget_angle) >servo_dif+1){present_angleS3 -= servo_dif;}
    else if((traget_angle - present_angleS3) >servo_dif+1){present_angleS3 += servo_dif;}
    else{return 1;}servo(ch,present_angleS3);delay(speed_servo);return 0;
  }
  if(ch == 3){
    if((present_angleS4 - traget_angle) >servo_dif+1){present_angleS4 -= servo_dif;}
    else if((traget_angle - present_angleS4) >servo_dif+1){present_angleS4 += servo_dif;}
    else{return 1;}servo(ch,present_angleS4);delay(speed_servo);return 0;
  }
}