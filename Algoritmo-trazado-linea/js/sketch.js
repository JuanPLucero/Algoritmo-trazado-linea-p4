const radio = 100;
const algorithms = [
  { name: "BRESENHAM", action: bresenham },
  { name: "PUNTO PENDIENTE", action: pp },
  { name: "DDA", action: dda }, 
];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  algorithms.forEach(({ name, action }, index)=> {
    const x=(width / 4)*(index +1);
    const y=200;
    push();
    fill("red");
    circle(x, y, radio*2);
    pop();
    textSize(25);
    text(name, x - radio / 2, y + radio * 2);
    action({ x1: x - radio, y1: y, x2: x+radio, y2: y });
    action({ x1: x, y1: y - radio, x2: x, y2: y+radio });
    let r1 =radians(45);
    let r2 =radians(225);
    action({
      x1: Math.floor(x+radio*cos(r2)),
      y1: Math.floor(y+radio*sin(r2)),
      x2: Math.floor(x+radio*cos(r1)),
      y2: Math.floor(y+radio*sin(r1)),
    });
    r1 = radians(135);
    r2 = radians(315);
    action({
      x1: Math.floor(x+radio*cos(r2)),
      y1: Math.floor(y+radio*sin(r2)),
      x2: Math.floor(x+radio*cos(r1)),
      y2: Math.floor(y+radio*sin(r1)),
    });
  });
  noLoop();
}
