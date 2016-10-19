function Canvas(location){
	
	var self = this;
	
	this.height = null;
	this.width = null;
	
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	
	document.getElementById(location).appendChild(canvas);
	
	this.getCanvas = function(){
		return canvas;
	}
	
	this.getContext = function(){
		return ctx;
	}
	
	this.clear = function(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	this.draw = function(){
		this.clear();
	}
	this.update = function(){
		/*null*/
	}
	this.resize = function(){
		canvas.width = window.innerWidth;
		self.width = canvas.width;
		canvas.height = window.innerHeight;
		self.height = canvas.height;
	}
	
	this.resize();
}
module.exports = Canvas;