var hour1, min, sec
var hrAngle, minAngle, secAngle
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
translate(200,200);
rotate(-90);
hour1 = hour();
min = minute();
sec = second();
secAngle = map(sec,0,60,0,360);
minAngle = map(min,0,60,0,360);
hrAngle = map(hour1%12,0,12,0,360);
//drawing seconds hand
push();
rotate(secAngle);
stroke("red");
strokeWeight(7);
line(0,0,100,0);
pop();
//drawing minute hand
push();
rotate(minAngle);
stroke("green");
strokeWeight(7);
line(0,0,75,0);
pop();
//drawing hour hand
push();
rotate(hrAngle);
stroke("blue");
strokeWeight(7);
line(0,0,50,0);
pop();
stroke(255,0,255);
point(0,0);
//drawing the arcs
strokeWeight(10);
noFill();
//drawing the seconds
stroke(255,0,0);
arc(0,0,300,300,0,secAngle);

stroke(0,255,0);
arc(0,0,280,280,0,minAngle);

stroke(0,0,255);
arc(0,0,260,260,0,hrAngle)
}