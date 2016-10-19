function Spiral(canvas, id){

	var ctx = canvas.getContext();
	this.id = id;

	var centerx = canvas.width/2;
	var centery = canvas.height/2;

	this.update = function(){
		
	};
	this.draw = function(){

		var a = 10;
		var b = 1;


		var radius = 750;

		ctx.save();
		ctx.translate(centerx, centery);

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#040404';
		ctx.lineWidth = 2;
		ctx.fill();

		ctx.beginPath();

		for (i = 0; i < 7200; i++) {
			angle = 0.1 * i;
			x = (a + b * angle) * Math.cos(angle);
			y = (a + b * angle) * Math.sin(angle);

			ctx.lineTo(x, y);
		}
		ctx.strokeStyle = "#111111";
		ctx.stroke();

		ctx.restore();



		drawShadow(ctx);





		radius = 200;
		ctx.beginPath();
		ctx.arc(centerx, centery, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#ffffff';
		ctx.lineWidth = 2;
		ctx.fill();

		radius = 10;
		ctx.beginPath();
		ctx.arc(centerx, centery, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#000';
		ctx.lineWidth = 2;
		ctx.fill();


	};

	function drawShadow(ctx){
		ctx.save();

		ctx.fillStyle = 'rgba(255,255,255, 0.5)';
		ctx.beginPath();
		ctx.moveTo(centerx, centery);
		ctx.lineTo(canvas.width/2,0);
		ctx.lineTo(canvas.width, 0);

		ctx.lineTo(centerx, centery);
		ctx.lineTo(canvas.width/2,canvas.height);
		ctx.lineTo(0, canvas.height);

		ctx.closePath();
		ctx.shadowBlur=100;
		ctx.shadowColor="rgba(255,255,255, 0.5)";
		ctx.fill();

		ctx.restore();

	}

	this.resize = function(){
		centerx = canvas.width/2;
		centery = canvas.height/2;
	};
}
module.exports = Spiral;