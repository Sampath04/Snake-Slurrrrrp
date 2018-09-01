var canvas = document.querySelector('canvas');
canvas.width = 900;
canvas.height = 900;

var c = canvas.getContext('2d');

var hx = 90;
var hy = 90;
var wx = 30;
var hdx = 1;
var hdy = 0;
var mSpeed = 800; 
var fpsID;
var odx = [1];
var ody = [0];
var snA = [];
var organCount = 5;
var ovx = 1;
var ovy = 0;
var j = 1;
var otx, oty;

function Snake(hx,hy){
	this.draw = function(x,y){
		c.fillStyle = "#fff";
		c.strokeStyle = "#000";
		c.fillRect(x,y,wx,wx);
		c.strokeRect(x,y,wx,wx);
	}
	this.addOrgan = function(){
		var ox = hx;
		var oy = hy;
		var tx; 
		var ty;
		for(var i=0; i<organCount; i++){
			if(j>i){
				ox -= (hdx * wx);
				oy -= (hdy * wx);
				this.draw(ox,oy);
			}
			else{
				ox -= (odx * wx);
				oy -= (ody * wx);
				this.draw(ox,oy);
			}
		}
		j++;	
	}
	this.update = function(){
		c.clearRect(0, 0, canvas.width, canvas.height);
		c.beginPath();
		hx += (hdx * wx);
		hy += (hdy * wx);
		this.draw(hx,hy);
		this.addOrgan();
	}
}

window.addEventListener('keydown', keyPressed);

function keyPressed(e){
	j = 1;
	odx = hdx;
	ody = hdy;
	if(e.keyCode == 37){
		hdx = -1;
		hdy = 0;
	}
	if(e.keyCode == 38){
		hdx = 0;
		hdy = -1;
	}
	if(e.keyCode == 39){
		hdx = 1;
		hdy = 0;
	}
	if(e.keyCode == 40){
		hdx = 0;
		hdy = 1;
	}
}

//Running Time
function move(){
	for( var i=0; i<snA.length; i++){
		snA[i].update();
	}
	console.log(hx);
}

fpsID = setInterval(move, mSpeed);
snA.push(new Snake(hx,hy));
move();
