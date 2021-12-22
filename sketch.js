var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  frameRate(1.5)
}

function setup() {
  cnv = createCanvas(425, 425);
  centerCanvas();
}

function windowResized() {
  centerCanvas();
}

var textPositionx = 210
var textPositiony = 240

function draw() {
  background(22, 11, 75);
  for (var x = 25; x<= width; x += 50){
 fill(random(255),70,50)
  {for (var y = 25; y<= height; y+=50) {
  fill(random(255),70,50)
    
    //random(255),100,88)

    rect (x, y, 25, 25)}



  textSize(20);
   textAlign(CENTER);
   textLeading(30);
   fill(255,random(120),random(120));
    text("HOLIDAY GREETINGS",
    textPositionx, 220);
   }       
  noStroke()
    
  }
 

}