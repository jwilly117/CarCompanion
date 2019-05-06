#include <Servo.h>  // Load the servo library

//Variables
int trigPin=13; //Sensor Trig Pin is connected to arduino pin 13
int echoPin=11;    //Sensor Echo Pin is onnected to arduino pin 11

int trigPin2=9;   //2nd Sensor Tirgger Pin connected to arduino pin 9
int echoPin2=7;    // 2nd Echo Pin is connected to arduino pin 7



float pingTime;  //Time for ping to travel to target and return
float pingTime2; // Time for ping to travel to target of second sensor

float targetDistance; // Distance from sensor to target
float targetDistance2; // Distance from 2nd sensor to 2nd target

float speedofSound= 776.5; // Speed of sound at 77 Degrees F
  

void setup() {
 
  Serial.begin(9600);  //Turn on serial Port

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT); 

  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);

  

}

void loop() {
// PIN NUMBER 1
//runs repeatedlyyyyyyyy
  digitalWrite(trigPin, LOW); //Set trigger pin low
  delayMicroseconds(2000);
  digitalWrite(trigPin,HIGH); //Set trigger pin high
  delayMicroseconds(15);
  digitalWrite(trigPin, LOW);

  pingTime = pulseIn(echoPin, HIGH); //Measure PingTime at echoPin in microseconds
  pingTime = pingTime/1000000; //Converts ping time to seconds
  pingTime = pingTime/3600; //converts pint gimt to hours
  

//PIN NUMBER 2
    // put your main code here, to run repeatedly:
  digitalWrite(trigPin2, LOW); //Set trigger pin low
  delayMicroseconds(2000);
  digitalWrite(trigPin2,HIGH); //Set trigger pin high
  delayMicroseconds(15);
  digitalWrite(trigPin2, LOW);

 

  pingTime2 = pulseIn(echoPin2, HIGH); //Measure PingTime at echoPin in microseconds
  pingTime2 = pingTime2/1000000; //Converts ping time to seconds
  pingTime2 = pingTime2/3600; //converts pint gimt to hours



  targetDistance = speedofSound * pingTime; // calculates distance in miles
  targetDistance = targetDistance / 2; //accounds for round trip on ping to target
  targetDistance = targetDistance*63360; // converts targetDistance to inches (63360 inch in mile)


  targetDistance2 = speedofSound * pingTime2; // calculates distance in miles
  targetDistance2 = targetDistance2 / 2; //accounds for round trip on ping to target
  targetDistance2 = targetDistance2 * 63360; // converts targetDistance to inches (63360 inch in mile)

  
  int D1 = (int)targetDistance; //
  int D2 = (int)targetDistance2; //
  
  Serial.print(D1);
//  Serial.print("in");
  Serial.print("|");
  Serial.println(D2);
//  Serial.println("in");
  delay(300); 
}