import {Slider} from '/lib/gfx2/gui.js';
import {Line, Circle, Rect} from '/lib/gfx2/draw.js';

const WIDTH = 600;
const HEIGHT = 600;



window.$rows = Slider('rows', 2,50, 10, 1);
window.$cols = Slider('cols', 2,50, 10, 1);



window.Render = function () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	var SIZE_X = WIDTH/$cols;
	var SIZE_Y = HEIGHT/$rows;

	for (var i = 0; i < 20;i++){
		var rndX = Math.floor(Math.random()*$cols);
		var rndY = Math.floor(Math.random()*$rows);
		ctx.fillStyle = RandomColor();
		Rect(rndX*SIZE_X, rndY*SIZE_Y, SIZE_X, SIZE_Y);
	}

	ctx.strokeStyle = 'black';
	for (var r = 0; r < $rows; r++){
		var y = r * SIZE_Y; 
		Line(0, y, WIDTH, y);
	}	

	for (var c = 0; c < $cols; c++) {
		var x = c * SIZE_X;
		Line(x, 0, x, HEIGHT);

	}


}



