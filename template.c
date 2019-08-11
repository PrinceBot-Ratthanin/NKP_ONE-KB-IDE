#include "NKP_ONE.h"
float Kp = 0.5 ;
  float Ki = 0;
  float Kd = 0;
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error;


${EXTINC}


${VARIABLE}

${FUNCTION}

void setup()
{
	NKP_ONE();
    /* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
