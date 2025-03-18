function Deg2Rad(degrees) {
	return degrees/180*Math.PI;
}

function Sin(degrees) {
	return Math.sin(Deg2Rad(degrees));
}

function Cos(degrees) {
	return Math.cos(Deg2Rad(degrees));
}

function Tan(degrees) {
	return Math.tan(Deg2Rad(degrees));
}

export {Deg2Rad, Sin, Cos, Tan}