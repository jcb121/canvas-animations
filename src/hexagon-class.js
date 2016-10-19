var getRandomColor = require('./random-colour');

function Hexagon(canvas, id){
	
	this.id = id;
	
	var ctx = canvas.getContext();
	
	var radius = Math.floor(Math.random() * 100) + 50,
		x = Math.floor(Math.random() * canvas.width),
		y = Math.floor(Math.random() * canvas.height),
		rotation = Math.floor(Math.random() * 360) + 1,
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
		
		rotation += delta * speed /4;
		
		while(rotation > 360){
			rotation-= 360;
		}
		
		move(delta * speed, direction);
	}
	
	this.draw = function(){
		
		
		//this draws from top left not center
		
		ctx.save();
		
		ctx.translate(x, y);
		
		ctx.rotate(rotation * Math.PI /180);
		
		
		var long = Math.cos(30 * Math.PI / 180) * radius;
		var short = Math.sin(30 * Math.PI / 180) * radius;
		var half = radius/2;
		
		var top_left = {
			x: 0 - half,
			y: 0 - long
		};
		
		var mid_left = {
			x: 0 - half - short,
			y: 0
		};
		var bottom_left = {
			x: 0 - radius/2,
			y: 0 + long
		};
		
		var bottom_right = {
			x: 0 + radius/2,
			y: 0 + long
		}
		var mid_right = {
			x: 0 + half + short,
			y: 0
		}
		var top_right = {
			x: 0 + radius / 2,
			y:  0 - long
		}
		
		
		ctx.moveTo(top_left.x, top_left.y);
		ctx.beginPath();
		ctx.lineTo(mid_left.x, mid_left.y);
		ctx.lineTo(bottom_left.x, bottom_left.y);
		ctx.lineTo(bottom_right.x, bottom_right.y);
		ctx.lineTo(mid_right.x, mid_right.y);
		ctx.lineTo(top_right.x, top_right.y);
		ctx.lineTo(top_left.x, top_left.y);
		
		ctx.closePath();
		
		ctx.fillStyle = fillColour;
		ctx.strokeStyle  = borderColour;
		ctx.lineWidth = 5;
		//ctx.fill();
		ctx.stroke();
		
		ctx.restore();
	}
}
module.exports = Hexagon;