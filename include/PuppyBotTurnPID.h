#include "PuppyBotIMU.h"
enum Direction_turnPID { NORTH = 0,
                 EAST = 1,
                 SOUTH = 2,
                 WEST = 3 };

int Direction_turnPIDIndex = NORTH;  
float previousYaw_turnPID = 0;      

float preverror_turnPID = 0;
float integral_turn = 0;
float turnDirection_PID_KP=0,turnDirection_PID_KD=0;
int speedMin_turnDirection = 15,speedMax_turnDirection = 60;

void set_data_for_turnDirection(int speedMin,int speedMax,float KP,float KD){
  turnDirection_PID_KP = KP;
  turnDirection_PID_KD = KD;
  speedMin_turnDirection = speedMin;
  speedMax_turnDirection = speedMax;
}

void turnPID(float targetYaw_turnPID,int speedTurn_min,int speedTurn_max,float kp_turnPID,float kd_turnPID) {
  unsigned long startTime = millis();
  integral_turn = 0;
  int stableCount = 0;
  int overshootCount = 0;
  bool hasOvershoot = false;
  float preverror_turnPID = targetYaw_turnPID - getContinuousYaw();

  while (true) {
    updateContinuousYaw();
    int current_Yaw = getContinuousYaw();
    float error_turnPID = targetYaw_turnPID - current_Yaw;

    if ((preverror_turnPID > 0 && error_turnPID < 0) || (preverror_turnPID < 0 && error_turnPID > 0)) {
      hasOvershoot = true;
      overshootCount++;
    }
    unsigned long now = millis();
    float deltaTime = max((now - startTime) / 1000.0, 0.001);
    startTime = now;

    integral_turn += error_turnPID * deltaTime;
    integral_turn = constrain(integral_turn, -50, 50);
    float derivative = (error_turnPID - preverror_turnPID) / deltaTime;
    float output = kp_turnPID * error_turnPID + kd_turnPID * derivative;


    //  
    // Serial.print("  current_Yaw  ");Serial.print(getYaw());
    // Serial.print("  Yaw_con  ");Serial.print(current_Yaw);
    // Serial.print("  error_turnPID  ");Serial.print(error_turnPID);
    // Serial.print("  targetYaw_turnPID  ");Serial.print(targetYaw_turnPID);
    // Serial.print("  output  ");Serial.print(output);
    // Serial.print("  speed  ");Serial.println(speed);
    int speed = constrain(abs(output), speedTurn_min, speedTurn_max);
      if (output < 0) {
        motor(1, -speed);
        motor(2, speed);
        motor(3, -speed);
        motor(4, speed);
      } else {
        motor(1, speed);
        motor(2, -speed);
        motor(3, speed);
        motor(4, -speed);
      }

    
    if (abs(error_turnPID) < 1 && hasOvershoot && overshootCount >= 2) {
      stableCount++;
      if (stableCount > 10) {
        ao();
        break;
      }
    } else {
      stableCount = 0;
    }
    if (millis() - startTime > 5000) {
      Serial.println("Timeout! Exiting loop...");
      ao();
      break;
    }
    preverror_turnPID = error_turnPID;
  }
}

void turnNorth() {
  float targetYaw_turnPID = getOffsetYaw();
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
}

void turnEast() {
  float targetYaw_turnPID = getOffsetYaw() + 90;
  //updateContinuousYaw();
  if (getContinuousYaw() < 100) {
    targetYaw_turnPID = targetYaw_turnPID - 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}

void turnSouth() {
  float targetYaw_turnPID = getOffsetYaw() + 180;
  if (getContinuousYaw() < 100) {
    targetYaw_turnPID = targetYaw_turnPID - 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}

void turnWest() {
  float targetYaw_turnPID = getOffsetYaw() - 90;
  if (getContinuousYaw() >= 300) {
    targetYaw_turnPID = targetYaw_turnPID + 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turnByAngle(int turnAngle) {
  int step = turnAngle / 90;  

  int oldDirection_turnPID = Direction_turnPIDIndex;
  Direction_turnPIDIndex += step;
  if (Direction_turnPIDIndex >= 4) Direction_turnPIDIndex = 0;
  if (Direction_turnPIDIndex < 0) Direction_turnPIDIndex = 3;
  if (Direction_turnPIDIndex == NORTH) {
    turnNorth();
  } else if (Direction_turnPIDIndex == EAST) {
    turnEast();
  } else if (Direction_turnPIDIndex == SOUTH) {
    turnSouth();
  } else if (Direction_turnPIDIndex == WEST) {
    turnWest();
  }
}

float normalizeAngle(float angle) {
    while (angle > 180) angle -= 360;
    while (angle <= -180) angle += 360;
    return angle;
}

void moveStraightPID(int Movedirection, float targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight) {
    unsigned long startTime = millis();
    unsigned long endTime = startTime + duration; 
    float integral_straight = 0, preverror_straight = 0;

    while (millis() < endTime) {  
        updateContinuousYaw();  
        float current_Yaw = getContinuousYaw();
        
        // 🔥 ใช้ normalizeAngle() เพื่อลดปัญหาการเปลี่ยนทิศทางผิดพลาด
        float error_straight = normalizeAngle(targetYaw_straight - current_Yaw);

        unsigned long now = millis();
        float deltaTime = max((now - startTime) / 1000.0, 0.001);
        startTime = now;

        integral_straight += error_straight * deltaTime;
        integral_straight = constrain(integral_straight, -50, 50);  
        float derivative = (error_straight - preverror_straight) / deltaTime;
        float output = kp_straight * error_straight + ki_straight * integral_straight + kd_straight * derivative;

        preverror_straight = error_straight;
        int rightSpeed = constrain(speedBase - output, 20, 100);
        int leftSpeed = constrain(speedBase + output, 20, 100);

        if (Movedirection == 0) {  // เดินหน้า
            motor(1, leftSpeed);
            motor(2, rightSpeed);
            motor(3, leftSpeed);
            motor(4, rightSpeed);
        } else {  // ถอยหลัง
            motor(1, -rightSpeed);
            motor(2, -leftSpeed);
            motor(3, -rightSpeed);
            motor(4, -leftSpeed);
        }

        // 🔍 Debug แสดงค่ามุมและค่า PID
        Serial.print("Current Yaw: "); Serial.print(current_Yaw);
        Serial.print(" Target Yaw: "); Serial.print(targetYaw_straight);
        Serial.print(" Error: "); Serial.print(error_straight);
        Serial.print(" PID Output: "); Serial.print(output);
        Serial.print(" Left Speed: "); Serial.print(leftSpeed);
        Serial.print(" Right Speed: "); Serial.println(rightSpeed);
    }

    ao(); delay(20);
    ao(); delay(20);
    ao();
}

// void moveStraightPID(int Movedirection ,float targetYaw_straight, int speedBase, float duration ,float kp_straight,float ki_straight, float kd_straight) {
//   unsigned long startTime = millis();
//   unsigned long endTime = startTime + (duration); 
//   float integral_straight = 0,preverror_straight=0;
//   int stableCount = 0;

//   while (millis() < endTime) {  
//     updateContinuousYaw();  
//     float current_Yaw = getContinuousYaw();
//     float error_straight = targetYaw_straight - current_Yaw;

//     unsigned long now = millis();
//     float deltaTime = max((now - startTime) / 1000.0, 0.001);
//     startTime = now;

//     integral_straight += error_straight * deltaTime;
//     integral_straight = constrain(integral_straight, -50, 50);  
//     float derivative = (error_straight - preverror_straight) / deltaTime;
//     float output = kp_straight * error_straight + ki_straight * integral_straight + kd_straight * derivative;

//     preverror_straight = error_straight;
//     int rightSpeed = constrain(speedBase - output, 20, 100);
//     int leftSpeed = constrain(speedBase + output, 20, 100);

//     if(Movedirection == 0){
//       motor(1, leftSpeed);
//       motor(2, rightSpeed);
//       motor(3, leftSpeed);
//       motor(4, rightSpeed);
//     }
//     else{
//       motor(1, -rightSpeed);
//       motor(2, -leftSpeed);
//       motor(3, -rightSpeed);
//       motor(4, -leftSpeed);
//     }

    
//     Serial.print("  current_Yaw: "); Serial.print(current_Yaw);
//     Serial.print("  error_straight: "); Serial.print(error_straight);
//     Serial.print("  output: "); Serial.print(output);
//     Serial.print("  leftSpeed: "); Serial.print(leftSpeed);
//     Serial.print("  rightSpeed: "); Serial.println(rightSpeed);
//   }
//   ao();
//   delay(20);
//   ao();
//   delay(20);
//   ao();
// }

// void MoveStraightDirection(int Movedirection, int targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight) {
//   float targetYaw_MovePID = 0;

//   if (getContinuousYaw() > 360 || getContinuousYaw() < 0) {
//     resetContinuousYaw();
//   }

//   // คำนวณ targetYaw ตามทิศทางที่เลือก
//   if (targetYaw_straight == 0) {   // N (North)
//     targetYaw_MovePID = getOffsetYaw();
//   }
//   else if (targetYaw_straight == 1) {   // E (East)
//     targetYaw_MovePID = fmod((getOffsetYaw() + 90), 360);
//   }
//   else if (targetYaw_straight == 2) {   // S (South)
//     targetYaw_MovePID = fmod((getOffsetYaw() + 180), 360);
//   }
//   else if (targetYaw_straight == 3) {   // W (West)
//     targetYaw_MovePID = fmod((getOffsetYaw() - 90 + 360), 360);  // แก้ไขตรงนี้
//   }

//   moveStraightPID(Movedirection, targetYaw_MovePID, speedBase, duration, kp_straight, ki_straight, kd_straight);
// }

void MoveStraightDirection(int Movedirection, int targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight) {
    float targetYaw_MovePID = 0;
    float currentYaw = getOffsetYaw(); // อ่านค่าปัจจุบัน

    if (getContinuousYaw() >= 360 || getContinuousYaw() <= 0) {
        resetContinuousYaw();
    }

    // คำนวณเป้าหมายตามทิศทาง
    switch (targetYaw_straight) {
        case 0: // N (North)
            targetYaw_MovePID = currentYaw;
            break;
        case 1: // E (East)
            targetYaw_MovePID = currentYaw + 90;
            break;
        case 2: // S (South)
            targetYaw_MovePID = currentYaw + 180;
            break;
        case 3: // W (West)
            targetYaw_MovePID = currentYaw - 90;
            break;
    }

    // 🔥 ใช้ normalizeAngle() ป้องกันมุมเกิน 360° หรือติดลบ
    targetYaw_MovePID = normalizeAngle(targetYaw_MovePID);

    Serial.print("Move Direction: "); Serial.print(Movedirection);
    Serial.print(" Target Yaw MovePID: "); Serial.println(targetYaw_MovePID);

    moveStraightPID(Movedirection, targetYaw_MovePID, speedBase, duration, kp_straight, ki_straight, kd_straight);
}


// void MoveStraightDirection(int Movedirection, int targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight) {
//     float targetYaw_MovePID = 0;
//     float currentYaw = getOffsetYaw(); // อ่านค่าปัจจุบัน

//     if (getContinuousYaw() >= 360 || getContinuousYaw() <= 0) {
//         resetContinuousYaw();
//     }

//     // คำนวณเป้าหมายตามทิศทาง
//     switch (targetYaw_straight) {
//         case 0: // N (North)
//             targetYaw_MovePID = currentYaw;
//             break;
//         case 1: // E (East)
//             targetYaw_MovePID = currentYaw + 90;
//             break;
//         case 2: // S (South)
//             targetYaw_MovePID = currentYaw + 180;
//             break;
//         case 3: // W (West)
//             targetYaw_MovePID = currentYaw - 90;
//             break;
//     }

//     // ทำให้ค่ามุมอยู่ในช่วง 0-360°
//     if (targetYaw_MovePID >= 360) {
//         targetYaw_MovePID -= 360;
//     } else if (targetYaw_MovePID < 0) {
//         targetYaw_MovePID += 360;
//     }

//     moveStraightPID(Movedirection, targetYaw_MovePID, speedBase, duration, kp_straight, ki_straight, kd_straight);
// }



void MoveDirection_East() {
  float targetYaw_turnPID = getOffsetYaw() + 90;
  //updateContinuousYaw();
  if (getContinuousYaw() < 100) {
    targetYaw_turnPID = targetYaw_turnPID - 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}

void MoveDirection_South() {
  float targetYaw_turnPID = getOffsetYaw() + 180;
  if (getContinuousYaw() < 100) {
    targetYaw_turnPID = targetYaw_turnPID - 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}

void MoveDirection_West() {
  float targetYaw_turnPID = getOffsetYaw() - 90;
  if (getContinuousYaw() >= 300) {
    targetYaw_turnPID = targetYaw_turnPID + 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}