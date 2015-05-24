function flashlight() {
	//Flashlight
	//THREE.Spotlight(hex, intensity, distance, angle)
	flashlight = new THREE.SpotLight( 0xffffff, 0, 0, Math.PI / 3 );
	camera.add(flashlight);
	flashlight.position.set(5,FLPOSITIONY,1);
	flashlight.castShadow = true;
	flashlight.shadowCameraFov = 120;
	flashlight.shadowCameraNear = 0.1;
	flashlight.shadowCameraFar = 300; //this number is fine when the room is dark
	//flashlight.shadowCameraVisible = true;
	flTarget = new THREE.Object3D();
	camera.add(flTarget);
	flTarget.position.set(5, FLPOSITIONY, 0);
	flashlight.target = flTarget;

	/*var flTexture = THREE.ImageUtils.loadTexture('textures/fl.jpg');
	flTexture.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({alphaTest: 0.5, color: 0xffffff, shading: THREE.FlatShading, map: flTexture, side: THREE.DoubleSide});
	//var material = new THREE.MeshPhongMaterial({color: 0x000000, shading: THREE.FlatShading, map: flTexture, side: THREE.DoubleSide});
	var geometry = new THREE.PlaneBufferGeometry(1, 1, 50, 50);

	var uniforms = { texture:  { type: "t", value: flTexture } };*/

	/*var vertexShader = document.getElementById( 'vertexShaderDepth' ).textContent;
	var fragmentShader = document.getElementById( 'fragmentShaderDepth' ).textContent;

	var flT = new THREE.Mesh(geometry, material);
	flT.castShadow = true;
	camera.add(flT);
	flT.customDepthMaterial = new THREE.ShaderMaterial( { uniforms: uniforms, vertexShader: vertexShader, fragmentShader: fragmentShader } );
	//var depthM = new THREE.ShaderMaterial( { uniforms: uniforms, attributes: attributes, vertexShader: vertexShader, fragmentShader: fragmentShader } );
	//flT.customDepthMaterial = depthM;
	flT.position.set(5, FLPOSITIONY, -1);
	//emitter.position.set(0,0,-30);*/
}