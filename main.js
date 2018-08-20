var canvas = document.querySelector('canvas');
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
canvas.width = 900;
canvas.height = 900;

var c = canvas.getContext('2d');

var hx = 90;
var hy = 90;
var wx = 30;
var hdx = 90;
var mSpeed = 300; 
var fpsID;

//Running Time
function move(){
	var fx = hx + wx;
	var sx = fx + wx;
	var sTip = sx + wx;
	setTimeout(function(){
		fpsID = requestAnimationFrame(move);
	}, mSpeed);
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
	console.log(sTip);
	console.log(canvas);
	if(sTip > canvas.width){
		cancelAnimationFrame(fpsID);
		fpsID = null;
	}
}

// fpsID = requestAnimationFrame(move);
move();