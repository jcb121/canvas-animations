var getRandomColor = require('./random-colour');

function Triangle(canvas, id){
	
	this.id = id;
	
	var ctx = canvas.getContext();
	
	var height = Math.floor(Math.random() * 100) + 50,
		//width = Math.floor(Math.random() * 100) + 50,
		width = height,
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
		if(x > canvas.width + width + 5){
			x = 0 - width;
		}
		if(x < 0 - width - 5){
			x = canvas.width + width;
		}
		
		
		if(y > canvas.height + height + 5){
			y = 0 - height;
		}
		if(y < 0 - height - 5){
			y = canvas.height + height;
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
		
		//top left
		ctx.moveTo(0 - width /2, 0 - height/2)
		ctx.beginPath()
		
		//right
		ctx.lineTo(0 - width /2, 0 + height/2);
		
		//bottom
		ctx.lineTo(0 + width, 0);
		
		//top left
		ctx.lineTo(0 - width /2, 0 - height/2);
		
		
		ctx.closePath();
		ctx.fillStyle = fillColour;
		ctx.strokeStyle  = borderColour;
		ctx.lineWidth = 5;
		ctx.fill();
		ctx.stroke();
		
		ctx.restore();
	}
}

module.exports = Triangle;