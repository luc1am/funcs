/*Lucia Mumma

custom function
  - function func(){

}
use transformation function
  - translate()
  - scale()
  - rotate()
  - angleMode()
  - y mas
include (if can)
  - image or
  - audio or
  - video
*/

var wave;
var ocean;
function preload(){
  //steve = loadImage("steve.jpg");
  wave = loadSound("assets/wave.wav");
  ocean = loadImage("assets/ocean.jpg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  wave.play();
  amplitude = new p5.Amplitude();
  //lou.play();
}

function draw() {
  // put drawing code here
  noFill();
  //blendMode(LIGHTEST);

  //blendMode(BLEND);
  background(0,0,100);
  strokeWeight(1);
  stroke(0);

  for (let i = -width; i<width; i+=20){
    line (i, 0, (i+30)*3, height);
    line((i+30)*3,0, i, height)
    line(0, 250, 4*(width-i), height);
    //startY-(i*1.2)
    //line();
  }
  var mouth = 1/(amplitude.getLevel());
  faceDraw(100,100,250);
  fill(100);

  ellipse(125,150, mouth, mouth);
  noStroke();
  fill(0);
  text("i speak for the ocean",100,150);
  translate(-100,-100);
  push();
  blendMode(DODGE);
  //BLEND, DARKEST, LIGHTEST, DIFFERENCE,
  //MULTIPLY, EXCLUSION, SCREEN, REPLACE,
  //OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE,
  //BURN, ADD, REMOVE or SUBTRACT
  scale(0.5);
  //translate(100,0);
  image(ocean,0,0);
  pop();
  stroke(0);
  faceDraw(400,400,100);
}

function faceDraw(x,y,rad){
  fill(255);
  strokeWeight(10);
  translate(x,y);
  var eyePos = (rad/4);
  ellipse(rad/2,rad/2,rad,rad);
  ellipse(eyePos, eyePos, rad/8, rad/8);
  ellipse(3*eyePos, eyePos, rad/8, rad/8);
  rect(rad/2,rad/4, rad/8, rad/4)
  rectMode(CENTER);
}
