import * as THREE from '/lib/gfx3/three.module.js';
import { OrbitControls } from './orbit-controls.js';

//Globals
var camera;
var controls;
var scene;
var renderer;
var canvasModule;


	
if (window.location.search) {
	init();
	var src = window.location.search.substr(1);
	canvasModule = await import('../' + src + '.js');
	canvasModule.init(scene, onUpdate, function() {		        
		canvasModule.render();
	});	
	animate();
}
                


function init() {

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
    
	controls = new OrbitControls( camera, renderer.domElement );
    window.controls = controls;
    window.camera = camera;
	camera.position.set( 5, 5, 5);
	camera.lookAt( 0, 0, 0 );
	controls.update();    

	document.body.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize );

	scene = new THREE.Scene();
	addLight(-1, 2, 4);
	addLight( 1, -1, -2);
    
}



function onUpdate() { //gui update
	scene.remove.apply(scene, scene.children);
	addLight(-1, 2, 4);
	addLight( 1, -1, -2);
	canvasModule.render();
}


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}


function animate() {
	requestAnimationFrame( animate );
	controls.update();	
	renderer.render( scene, camera );	
}

function addLight(...pos) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...pos);
	scene.add(light);
}