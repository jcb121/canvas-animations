function Sine_Animation(canvas, id){
	
	this.id = id;
	var points = [];
	var time_degrees = 0;
	var speed = 30;
	var count = 30;
	var ctx = canvas.getContext();
	
	generate_points();
	
	function generate_points(){
		for(var i = 0; i < count + 1 ; i++){
			
			if(typeof points[i] === 'undefined') points[i] = [];
			
			for(var j = 0; j < count + 1; j++){
				var x = canvas.width / count * j;
				var y = canvas.height / count * i;
				points[i][j] = new Point(canvas, x, y);
			}
		}
	}
	
	this.resize = function(){
		points = [];
		generate_points();
	}
	
	this.update = function(delta){
		time_degrees += speed * delta;
		
		while(time_degrees > 360){
			time_degrees -= 360;
		}
		
		points.forEach(function(rows){
			rows.forEach(function(point){
				point.update(delta, time_degrees);
			})
		})
	}
	
	this.draw = function(){
		
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	
		points.forEach(function(rows){
			rows.forEach(function(point){
				point.draw();
			})
		})
	}
}

function Point(canvas, x, y){
	var direction = 0,
		ctx = canvas.getContext(),
		target_x = x,
		targey_y = y,
		radius = 20,
		velocity_x = 0,
		velocity_y = 0,
		colour =  get_random_colour(),
		modifier = 0,
		distance = distance_from(canvas.width/2, canvas.height/2);
	
	x += (Math.random() * 50) -25;
	y += (Math.random() * 50) -25;
	
	apply_force(Math.random(),Math.random());
	function get_random_colour() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	function apply_force(force_x, force_y){
		if(!force_x){
			force_x = 0;
		}
		if(!force_y){
			force_y = 0;
		}
		
		velocity_x += force_x;
		velocity_y += force_y;
	}	
	function distance_from(_x,_y){
		
		var x_diff = _x - x,
			y_diff = _y - y,					
			_distance = Math.sqrt(Math.pow(x_diff, 2) + Math.pow(y_diff, 2));				
		return Math.abs(_distance);
	}
	this.update = function(_delta, _time_degrees){		
		
		if(x > target_x){
			apply_force(-0.02,false)
		}else{
			apply_force(0.02, false)
		}
		
		if(y > targey_y){
			apply_force(false, -0.02)
		}else{
			apply_force(false, 0.02)
		}
		
		x += velocity_x;
		y += velocity_y;
		
		distance = distance_from(canvas.width/2, canvas.height/2);
		modifier = Math.sin((_time_degrees + distance) * (Math.PI/180));
		modifier += 1;
		modifier /= 2;
		
		if(modifier < 0.001){
			colour = get_random_colour();
		}
	}
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(x,y,radius * modifier,0, 2 * Math.PI);
		//ctx.stroke();
		ctx.fillStyle = colour;
		ctx.fill();
	}
}

module.exports = Sine_Animation;