import * as THREE from '../lib/three.module.js';
import { GUI } from '../lib/dat.gui.module.js';

var scene;
var $;

export function init(currentScene, onUpdate, onLoaded) {
	scene = currentScene;
	
	//GUI	
	$ = {};
	const G = new GUI();
	
	$.n = 20; G.add( $, 'n', 0, 100 ).step(1).onChange(onUpdate);
	$.min = 20; G.add( $, 'min', 0, 50 ).step(1).onChange(onUpdate);
	
	onLoaded();
}

export function render() {
	
	var matNorm = new THREE.MeshNormalMaterial();
	
	//Origin
	var geoOrigin = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 10, 1, false);	
	var objOrigin = new THREE.Mesh(geoOrigin, matNorm);
	
	scene.add(objOrigin);	
	
}