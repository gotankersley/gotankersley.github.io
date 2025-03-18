function Line(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	
}


function Circle(x, y, radius) {
	ctx.beginPath();	
	ctx.arc(x, y, radius, 0, 2*Math.PI);		
	ctx.fill();
}



function Triangle(x1, y1, x2, y2, x3, y3) {
	
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3, y3);
	
	ctx.closePath();
	ctx.fill();

}

function Hexagon(x, y, size) {
	 
	ctx.beginPath();
	ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          

	for (var i = 1; i <= 6;i += 1) {
		var px = x + size * Math.cos(i * 2 * Math.PI / 6);
		var py = y + size * Math.sin(i * 2 * Math.PI / 6)
		ctx.lineTo (px, py);
	}

	ctx.closePath();
	ctx.fill();

}

function Rect(x, y, w, h) {	
	ctx.fillRect(x, y, w, h);
}

export {Line, Circle, Rect, Triangle, Hexagon}