class Rectangle{
	constructor(x,y,width,height,borderColor,fillColor){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.borderColor=borderColor;
		this.fillColor=fillColor;
		this.shape = "rect";
	}
	alignMiddleTo = (Rect)=> {
		this.y = Rect.height*0.5 - this.height/2 + Rect.y;
		this.x = Rect.width*0.5 - this.width/2 + Rect.x;
	}
	alignCenterTo = (Rect)=> {
		this.x = Rect.width*0.5 - this.width/2 + Rect.x;
	}
	alignVerticallyCenterTo = (Rect)=> {
		this.y = Rect.height*0.5 - this.height/2 + Rect.y;
	}
}

class RoundRectangle{
	constructor(x,y,width,height,radii,borderColor,fillColor){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.radii=radii;
		this.borderColor=borderColor;
		this.fillColor=fillColor;
		this.shape = "roundrect";
	}
	alignMiddleTo = (Rect)=> {
		this.y = Rect.height*0.5 - this.height/2 + Rect.y;
		this.x = Rect.width*0.5 - this.width/2 + Rect.x;
	}
	alignCenterTo = (Rect)=> {
		this.x = Rect.width*0.5 - this.width/2 + Rect.x;
	}
	alignVerticallyCenterTo = (Rect)=> {
		this.y = Rect.height*0.5 - this.height/2 + Rect.y;
	}
	
}

class Circle{
	constructor(x,y,radius,borderColor,fillColor){
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.borderColor=borderColor;
		this.fillColor=fillColor;
		this.shape = "circle";
	}
}

class Ellipse{
	constructor(x,y,width,height,borderColor,fillColor){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.borderColor=borderColor;
		this.fillColor=fillColor;
		this.shape = "ellipse";
	}
}

class Line{
	constructor(x,y,x2,y2,borderColor,fillColor){
		this.x=x;
		this.y=y;
		this.x2=x2;
		this.y2=y2;
		this.borderColor=borderColor;
		this.fillColor=fillColor;
		this.shape = "line";
	}
}

class SpriteImage{
	constructor(img,x,y,width,height){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.img= new Image();
		this.img.src=img;
		this.shape = "img";
	}
}

class Text{
	constructor(text,font,x,y,borderColor,fillColor){
		this.x=x;
		this.y=y;
		this.text=text;
		this.font=font;
		this.borderColor=borderColor;
		this.fillColor=fillColor;
		this.shape = "text";
	}

	alignMiddleTo = (Rect)=> {
		this.y = Rect.y + 20;
		this.x = Rect.x + Rect.width / 4;
	}
	alignCenterTo = (Rect)=> {
		this.x = Rect.x + Rect.width / 4;
	}
	alignVerticallyCenterTo = (Rect)=> {
		this.y = Rect.height*0.5 - this.height/2 + Rect.y;
	}
}

var createCanvas=function(width,height,css) {
	this.width=width;
	this.height=height;
	this.css=css;
	let shapes= [];
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

	this.draw = ()=>{
		var ctx=this.context();
		ctx.clearRect(0,0,this.width,this.height);
		shapes.forEach((item)=>{
			item.borderColor = item.borderColor==undefined? "white" : item.borderColor;

			ctx.beginPath();
			ctx.strokeStyle= item.borderColor;
			ctx.fillStyle = item.fillColor;
			
			if(item.shape=="rect") {
				if(item.fillColor==undefined){
					ctx.rect(item.x,item.y,item.width,item.height);
					ctx.stroke();
				}
				else{
					ctx.rect(item.x,item.y,item.width,item.height);
					ctx.stroke();
					ctx.fillRect(item.x,item.y,item.width,item.height);
				}
			}
			if(item.shape=="roundrect") {
				ctx.roundRect(item.x,item.y,item.width,item.height,item.radii);
				if(item.fillColor==undefined){
					ctx.stroke();
				}
				else {
					ctx.stroke();
					ctx.fill();
				}
			}
			else if(item.shape=="circle"){
				ctx.arc(item.x,item.y,item.radius,0,2*Math.PI);
				if(item.fillColor==undefined){
					ctx.stroke();
				}
				else {
					ctx.stroke();
					ctx.fill();
				}
				
			}
			else if(item.shape=="line"){
				ctx.moveTo(item.x,item.y);
				ctx.lineTo(item.x2,item.y2);
				ctx.stroke();
			}
			else if(item.shape=="text"){
				ctx.font=item.font;
				ctx.strokeStyle=item.borderColor;
				ctx.strokeText(item.text,item.x,item.y);
				ctx.stroke();
			}
			else if(item.shape=="ellipse"){
				ctx.moveTo(e.x, e.y - e.height/2);
				ctx.bezierCurveTo(e.x + e.width/2, e.y - e.height/2, e.x + e.width/2, e.y + e.height/2, e.x, e.y + e.height/2);
				ctx.bezierCurveTo(e.x - e.width/2, e.y + e.height/2, e.x - e.width/2, e.y - e.height/2, e.x, e.y - e.height/2);
				if(item.fillColor==undefined){
					ctx.stroke();
				}
				else{
					ctx.fill();
				}
			}
			else if(item.shape=="img"){
				ctx.drawImage(item.img, item.x, item.y,item.width,item.height);
			}

			ctx.closePath();
		});
	}

	this.setShapes = (arr)=>{
		shapes=arr;
	}

	this.getShapes = ()=>{
		return shapes;
	}
	
	this.animate = (moveShapes)=>{
		setInterval(()=>{
			moveShapes();
			this.draw(shapes);
		},0);
	}

	this.setBackground=function(bgcolor){
		this.canvas.style.background=bgcolor;
	}
};
var vibrate=function(shape, number){
	shape.x+=random(number,"-");
	shape.y+=random(number,"-");
}
function distCircle(c1,c2){
	let dist = (Math.sqrt(Math.pow((c2.x-c1.x),2)+Math.pow((c2.y-c1.y),2)));
	return dist;
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





