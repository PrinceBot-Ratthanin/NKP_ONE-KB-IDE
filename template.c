#include <Arduino.h>
#include "NKP_ONE.h"


#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif

#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"



typedef int Number;
typedef int Boolean;

${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
  NKP_ONE();
  Serial.begin(115200);
  Wire.begin();

  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
  

}
