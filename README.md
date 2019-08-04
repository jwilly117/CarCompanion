
# Car Companion
<br>

### Summary
Car companion is a React based web app designed to be a user friendly interface for the head unit of a car. It is designed to work on specific hardware (listed below) and some features are dependent on that hardware as it uses input from certain sensors. 

### The goals of this project
My goal with this was to test updating a website from physical exterior sensors in a creative way using React, while also offering other features one would want in a head unit.
Some of the features are local weather updates, music interface with music applications, google maps and routes, rear camera views, distance sensors, and a phone interface via blutooth. It is important to remember some of these feature will only be available on the specified hardware. 

### File Structure
Since the majority of the functionality of this requires specific hardware, some oe the code, such as that found in the Arduino section, will be unfunctioning without the proprietary hardware hooked to the PC it is running on. It is also important to note the blutooth functionality of this will only work with the hardware it is installed on. 

The app, and all of its components were built with react and include the APIs for openweather, google maps, and an embed from spotify. 

The hardware interactions with the sensors were programmed in Java, input once every few miliseconds into a database, and then pulled equally as fast from that database into the react state of the distance values on the page. Without the hardware, the distance values will stay at zero. 

### Instructions
Most users will be familiar with the layout and functionality, as it is fairly similiar to what you would expect from a touch input, single page application, you can use google maps as you would, the weather is automatic, and the pop up windows will appear when their buttons are pressed and dissapear once a user touches or clicks outside of the pop up window area. 

### Deployment & Screenshot
[Link to Deployment](https://jwilly117.github.io/CarCompanion/)

### Sensors
The first sensors tried were ultrasionic distance sensors designed to measure distance based on a ping signal and response time. The idea here is that they would report back a distance to be parking sensors in a way. 
There is also a spot for a backup camera, which a webapp will pick up any USB based camera and use it once the COM port is opened. 

### Further Goals of this project
My future goals for this project are to polish the UI and bring this closer to something that would be a product from a store. 
