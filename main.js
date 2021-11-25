function preload() {
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 25, 50 ,350 ,300);
    tint(tint_color);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(350, 50, 70);
  
  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(50, 50, 70);
  
  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(350, 350, 70);
  
  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(50, 350, 70);
}

