var canvas = document.querySelector('canvas');
canvas.width = 900;
canvas.height = 900;

var c = canvas.getContext('2d');

var hx = 90;
var hy = 90;
var wx = 30;
var hdx = 30;
var mSpeed = 100; 
let fpsID;

//Running Time
function move(){
	var fx = hx + wx;
	var sx = fx + wx;
	var sTip = sx + wx;
	c.clearRect(0, 0, canvas.width, canvas.height);
	//Baby Snake
	c.beginPath();
	c.fillStyle = "#fff";
	c.strokeStyle = "#000";
	c.fillRect(hx,hy,30,30);
	c.fillRect(fx,hy,30,30);
	c.fillRect(sx,hy,30,30);
	c.strokeRect(hx,hy,30,30);
	c.strokeRect(fx,hy,30,30);
	c.strokeRect(sx,hy,30,30);
	hx += hdx;
	if(sTip > canvas.width){
		clearInterval(fpsID);
		alert("Game Over!!");
	}
}

fpsID = setInterval(move, mSpeed);

