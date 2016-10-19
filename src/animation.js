function Animation(canvas){
	
	var children = [];
	this.canvas = canvas;
	
	this.addItem = function( item ){
		if(typeof item.id === 'undefined' || typeof item.draw === 'undefined' || typeof item.update === 'undefined'){
			throw "missing properties";
		}else{
			children.push(item);
		}
	};
	
	this.removeItem = function(id){
		for(var i = 0; i > children.length; i++){
			if(children[i]['id'] == id){
				//
			}
		}
	}
	
	this.resize = function(){
		children.forEach(function(child){
			if(typeof child.resize !== 'undefined'){
				child.resize();
			}
		})
	}
	
	this.update = function(delta){
		children.forEach(function(child){
			child.update(delta);
		})
	}
	
	this.draw = function(){
		this.canvas.clear();
		children.forEach(function(child){
			child.draw();
		})
	}
}
module.exports = Animation;



