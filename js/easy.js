class Rectangle{
	constructor(x,y,width,height){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
	}
}

class Circle{
	constructor(x,y,radius){
		this.x=x;
		this.y=y;
		this.radius=radius;
	}
}

class Ellipse{
	constructor(x,y,width,height){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
	}
}

class Line{
	constructor(x,y,x2,y2){
		this.x=x;
		this.y=y;
		this.x2=x2;
		this.y2=y2;
	}
}

class Text{
	constructor(text,font,x,y){
		this.x=x;
		this.y=y;
		this.text=text;
	}
}

var createCanvas=function(width,height,css) {
	this.width=width;
	this.height=height;
	this.css=css;
	this.drawCanvas=function(){
		let container = document.querySelector(".container");
		this.canvas= document.createElement("CANVAS");
		this.canvas.setAttribute("width",this.width+"");
		this.canvas.setAttribute("height",this.height+"");
		this.canvas.setAttribute("style",this.css+"")
		container.appendChild(this.canvas);
	};
	this.getCanvas=function(){
		return this.canvas;
	}
	this.context=function(){
		return this.canvas.getContext("2d");
	};	
	this.clear=function(){
		this.context().clearRect(0,0,this.width,this.height);
	}

	this.drawRect=function(r,color,bgcolor){
		var ctx=this.context();
		if(typeof r != "undefined" && typeof color != "undefined"){
			ctx.beginPath();
			ctx.rect(r.x,r.y,r.width,r.height);
			ctx.strokeStyle=color;
			ctx.closePath();
			ctx.stroke();
		}
		if(typeof r != "undefined" && typeof color != "undefined" && typeof bgcolor != "undefined"){
			ctx.beginPath();
			ctx.strokeStyle=color;
			ctx.fillStyle=bgcolor;
			ctx.fillRect(r.x,r.y,r.width,r.height);
			ctx.closePath();
		}
		if(typeof r != "undefined" && typeof color == "" && typeof bgcolor != "undefined"){
			ctx.beginPath();
			ctx.fillStyle=bgcolor;
			ctx.fillRect(r.x,r.y,r.width,r.height);
			ctx.closePath();
		}
	}	

	this.drawCircle=function(c,color,bgcolor){
		var ctx=this.context();
		if(typeof c != "undefined" && typeof color != "undefined"){
			ctx.beginPath();
			ctx.strokeStyle=color;
			ctx.arc(c.x,c.y,c.radius,0,2*Math.PI);
			ctx.stroke();ctx.closePath();
		}
		if(typeof c != "undefined" && typeof color != "undefined" && typeof bgcolor != "undefined"){
			ctx.beginPath();
			ctx.strokeStyle=color;
			ctx.fillStyle=bgcolor;
			ctx.arc(c.x,c.y,c.radius,0,2*Math.PI);
			ctx.fill();ctx.closePath();
		}
		if(typeof c != "undefined" && typeof color == "" && typeof bgcolor != "undefined"){
			ctx.beginPath();
			ctx.fillStyle=bgcolor;
			ctx.arc(c.x,c.y,c.radius,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
		}
	}

	this.drawEllipse=function(e,color,bgcolor){
		var ctx=this.context();
		if(typeof e != "undefined" && typeof color != "undefined"){
			ctx.beginPath();
			ctx.moveTo(e.x, e.y - e.height/2);
			
			ctx.bezierCurveTo(e.x + e.width/2, e.y - e.height/2,
				e.x + e.width/2, e.y + e.height/2,
				e.x, e.y + e.height/2);

			ctx.bezierCurveTo(e.x - e.width/2, e.y + e.height/2,
			    e.x - e.width/2, e.y - e.height/2,
			    e.x, e.y - e.height/2);
			 
			ctx.strokeStyle = color;
			ctx.stroke();
			ctx.closePath();
		}	
		if(typeof e != "undefined" && typeof color != "undefined" && typeof bgcolor != "undefined"){
			ctx.beginPath();
			ctx.moveTo(e.x, e.y - e.height/2);
			
			ctx.bezierCurveTo(e.x + e.width/2, e.y - e.height/2,
				e.x + e.width/2, e.y + e.height/2,
				e.x, e.y + e.height/2);

			ctx.bezierCurveTo(e.x - e.width/2, e.y + e.height/2,
			    e.x - e.width/2, e.y - e.height/2,
			    e.x, e.y - e.height/2);
			 
			ctx.strokeStyle = color;
			ctx.stroke();
			ctx.fillStyle=bgcolor;
			ctx.fill();
			ctx.closePath();
		}
		else if(typeof e != "undefined" && typeof color == "" && typeof bgcolor != "undefined"){
			ctx.beginPath();
			ctx.moveTo(e.x, e.y - e.height/2);
			
			ctx.bezierCurveTo(e.x + e.width/2, e.y - e.height/2,
				e.x + e.width/2, e.y + e.height/2,
				e.x, e.y + e.height/2);

			ctx.bezierCurveTo(e.x - e.width/2, e.y + e.height/2,
			    e.x - e.width/2, e.y - e.height/2,
			    e.x, e.y - e.height/2);
			 
			ctx.fillStyle=bgcolor;
			ctx.fill();
			ctx.closePath();
		}
		
	}
	
	this.drawLine=function(l,color){
		var ctx=this.context();
		ctx.beginPath();
		ctx.moveTo(l.x,l.y);
		ctx.lineTo(l.x2,l.y2);
		ctx.strokeStyle=color;
		ctx.closePath();
		ctx.stroke();
	}

	this.drawText=function(t,color){
		var ctx=this.context();
		ctx.font=t.font;
		ctx.strokeStyle=color;
		ctx.strokeText(t.text,t.x,t.y);
	}

	this.setBackground=function(bgcolor){
		this.canvas.style.background=bgcolor;
	}
};

var vibrate=function(shape,two){
	shape.x+=random(two,"-");
	shape.y+=random(two,"-");
}

function distCircle(c1,c2){
	return (Math.sqrt(Math.pow((c2.x-c1.x),2)+Math.pow((c2.y-c1.y),2)));
}

function circleCollide(c1,c2) {
    if(distCircle(c1,c2)<(c1.radius+c2.radius)){
    	return true;
    }
    else{
    	return false;
    }
}

function random(end,negative){
	var k=Math.floor(Math.random()*end);
	if(negative=="-"){
		var PN=Math.ceil(Math.random()*2);
		if(PN==0){
			PN=2;
		}
		if(PN%2==0){
			return k;
		}
		else{
			return k*-1;
		}
	}
	else{
		return k;
	}
}
function randomBetween(start,end,negative){
	var k=Math.floor(Math.random() * (end - start)+start );
	if(negative=="-"){
		var PN=Math.ceil(Math.random()*2);
		if(PN==0){
			PN=2;
		}
		if(PN%2==0){
			return k;
		}
		else{
			return k*-1;
		}
	}
	else{
		return k;		
	}
}
function randomSign(){
	var r=random(10);
	if(r%2==0){
		return 1;
	}
	else{
		return -1;
	}
}
function randomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	    color += letters.charAt(Math.floor(Math.random() * 16));
	}
	return color;
}





