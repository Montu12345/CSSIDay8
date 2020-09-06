/* global createCanvas, colorMode, HSB, random, width, height, background, noStroke, fill, ellipse */

let drop1x, drop1y, drop1d, drop1FallSpeed;
const NUM_OF_DROPS = 30;
const WIDTH_OF_GRASS = 5;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  asdf = 0;

  //creating drops
  rain = [];
  for (let i = 0; i < NUM_OF_DROPS; i++) {
    rainDropp = new RainDrop();
    rain.push(rainDropp);
  }

  //creating grass
  grass = [];
  for (let i = 0; i < width; i++) {
    grassLeaf = new Grass(i * WIDTH_OF_GRASS);
    grass.push(grassLeaf);
  }
}

function draw() {
  background(0, 0, 0);

  //printing and dropping rain
  for (let i = 0; i < rain.length; i++) {
    rain[i].show();
    rain[i].drip();
    /* if (rain[i].y > height - 20){
      for (let j = 0; j < grass.length; j++){
        if (grass[j].x1 == rain[i].x){
          console.log("yeet");
          grass[j].y1 -= 50;
        }
      }
    }*/
  }
  
  //printing grass
  for (let i = 0; i < grass.length; i++) {
    grass[i].show();
  }
  //telling grass to grow
  grassGrow(grass);
}

//class for rain
class RainDrop {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.d = random(20, 30);
    this.fallSpeed = random(1, 7);
  }
  
  //show the raindrop
  show() {
    noStroke();
    fill(180, 80, 80);
    arc(this.x, this.y, this.d, this.d, QUARTER_PI, PI - QUARTER_PI);
  }
  
  //make the raindrop drop
  drip() {
    this.y += this.fallSpeed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }
  //doesn't work :/
  grassGrow(array) {
    console.log("yay");
    for (let i = 0; i < array.length; i++) {
      console.log("yay1");
      if (array[i].y1 == this.y) {
        console.log("yay3");
        array[i].y1 -= 50;
      }
    }
  }
}

//class for grass
class Grass {
  constructor(x1) {
    this.x1 = x1;
    this.y1 = random(height - 10, height - 20);
    this.x2 = x1 - 2;
    this.y2 = height;
    this.x3 = x1 + 2;
    this.y3 = height;
  }
  
  //print the grass
  show() {
    noStroke();
    fill(113, 100, 100);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

//makes the grass grow taller
function grassGrow(array) {
  if (asdf % 200 == 0) {
    for (let p = 0; p < array.length; p++) {
      array[p].y1 -= 1;
    }
  }
  asdf++;
}

