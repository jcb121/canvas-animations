function Tank(canvas, id){
	
	this.id = id;
		
	var ctx = canvas.getContext();
	var x,
		y,
		height = 100,
		width = 100;
	
	var shape = {
		"rect":[
			{
				x:0,
				y:0,
				width:0,
				height:0
			}
		],
		"poly":[
			[
				{x:200,y:0},
				{x:400,y:0},
				{x:400,y:100},
				{x:200,y:100}
			],
			[
				{x:0,y:100},
				{x:600,y:100},
				{x:600,y:200},
				{x:0,y:200}
			],
			[
				{x:0,y:200},
				{x:600,y:200},
				{x:550,y:300},
				{x:50,y:300}
			]
		],
		"circ":[
			
		]
	};
	
	this.resize = function(){
		
	}
	this.update = function(){
		
	}
	this.draw = function(){
		
		ctx.moveTo(x, y);
		
		ctx.fillStyle = 'black';
		
		shape.rect.forEach(function(r){
			ctx.beginPath();
			ctx.rect(r.x, r.y, r.width, r.height);
		})
		
		shape.poly.forEach(function(polygon){
			ctx.beginPath();
			polygon.forEach(function(point){
				ctx.lineTo(point.x, point.y);
			})
			ctx.lineTo(polygon[0].x, polygon[0].y);
			ctx.closePath();
			//ctx.fill();
			ctx.stroke();
		})
		
		shape.circ.forEach(function(circle){
			
		})
		
		
		
		
		
		
		ctx.restore();
	}
}
module.exports = Tank;