const canvasSketch = require('canvas-sketch');

// import p5 library
const p5 = require("p5");
new p5();

// tell canvas we are using p5 library now
// since canvas can use many different libraries
const settings = {
  p5: true,
  dimensions: [400, 400],
};

// use p5 syntax 
const sketch = () => {
  return () => {
    background(0);
    ellipse(200,200,50);
  };
};

canvasSketch(sketch, settings);
