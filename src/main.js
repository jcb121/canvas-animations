var Canvas = require('./canvas-class');
var Animation = require('./animation');
var Hexagon = require('./hexagon-class');
var Circle = require('./circle-class');
var Triangle = require('./triangle-class');
var Sine_Animation = require('./sine-animation');
var Tank = require('./tank-class');
var Spiral = require('./spiral-class');

var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

var canvas = new Canvas('triangleFrame');
var animation = new Animation(canvas);

window.onresize = function(){
	canvas.resize();
	animation.resize();
}

animation.addItem(new Sine_Animation(canvas, 1));
for(var i = 0; i < 20; i++){
	animation.addItem(new Hexagon(canvas, 1));
	animation.addItem(new Circle(canvas, 1));
	animation.addItem(new Triangle(canvas, 1));
}

var then = Date.now();
function main() {
	var now = Date.now();
	var delta = now - then;
	
	animation.update(delta / 1000);
	animation.draw(canvas.getContext());
	
	then = now;
	requestAnimationFrame(main);
}
main();



