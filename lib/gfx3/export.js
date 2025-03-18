
/*
function exportGLTF( input ) {

	const gltfExporter = new GLTFExporter();

	const options = {
		trs: false,
		onlyVisible: false,
		truncateDrawRange: true,
		binary: false,
		maxTextureSize:  Infinity,
		embedImages :false,
		
	};
	gltfExporter.parse( input, function ( result ) {

		if ( result instanceof ArrayBuffer ) {

			saveArrayBuffer( result, 'scene.glb' );

		} else {

			const output = JSON.stringify( result, null, 2 );
			console.log( output );
			saveString( output, 'scene.gltf' );

		}

	}, options );

}
function saveString( text, filename ) {

	save( new Blob( [ text ], { type: 'text/plain' } ), filename );

}

function save( blob, filename ) {
	const link = document.createElement( 'a' );
	link.style.display = 'none';
	document.body.appendChild( link ); // Firefox workaround, see #6594
	link.href = URL.createObjectURL( blob );
	link.download = filename;
	link.click();

	// URL.revokeObjectURL( url ); breaks Firefox...

}
*/