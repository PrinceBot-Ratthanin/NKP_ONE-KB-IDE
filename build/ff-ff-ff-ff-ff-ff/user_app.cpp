#include "NKP_ONE.h"





Number tc;



void setup()
{
	NKP_ONE();
    /* setup code */

    /* block setup */

    tc = analog(34)
  ;

  display.setFont(ArialMT_Plain_10);
  display.drawString(0,0,String(tc));
  while(!digitalRead(14));


}

void loop()
{
    servo(1, 170);
  delay(500);
  servo(1, 10);
  delay(500);

  
}
