var getRandomColor = require('./random-colour');

function Circle(canvas, id){
	
	this.id = id;
	
	var ctx = canvas.getContext();
	
	var radius = Math.floor(Math.random() * 100) + 50,
		x = Math.floor(Math.random() * canvas.width),
		y = Math.floor(Math.random() * canvas.height),
		direction = Math.floor(Math.random() * 361),
		speed = Math.floor(Math.random() * 100) + 100,
		borderColour = getRandomColor(),
		fillColour = getRandomColor();
	
	function move(distance, angle){
		
		var sin = Math.sin(angle * Math.PI / 180);
		var cos = Math.cos(angle * Math.PI / 180);
		
		var xTravel = sin * distance;
		var yTravel = cos * distance;
		
		x += xTravel;
		y -= yTravel;
		
	}
	
	this.update = function(delta){
		if(x > canvas.width + radius + 5){
			x = 0 - radius;
		}
		if(x < 0 - radius - 5){
			x = canvas.width + radius;
		}
		
		
		if(y > canvas.height + radius + 5){
			y = 0 - radius;
		}
		if(y < 0 - radius - 5){
			y = canvas.height + radius;
		}
		
		move(delta * speed, direction);
	}
	
	this.draw = function(){
		
		
		//this draws from top left not center
		
		ctx.save();
		
		ctx.translate(x, y);
		
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fillStyle = fillColour;
		ctx.strokeStyle  = borderColour;
		ctx.lineWidth = 5;
		ctx.fill();
		ctx.stroke();
		
		ctx.restore();
	}
}
module.exports = Circle;