function level() {
	//scene is already created earlier, don't need to make a new one

	//light
	scene.fog = new THREE.Fog( 0x030303, 0, 500 );

	//var light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.7 );
	//light.position.set( 0.5, 1, 0.75 );
	//scene.add( light );

	//add ambient light to make everything barely visible without flashlight
	//var amlight = new THREE.AmbientLight( 0x101010 ); // soft white light
	var amlight = new THREE.AmbientLight( 0x030303 ); // soft white light
	//var amlight = new THREE.AmbientLight( 0xf0f0f0 );
	scene.add( amlight );

	// floors and ceilings
	//wood 1
	placeFloor(200, 450, 100, 100, 0, 0, -225, wood[0], woodTW, woodTH);
	//ceiling 1
	placeCeiling(200, 450, 100, 100, 0, 60, -225, ceil[0], ceilTW, ceilTH);

	//wood 2
	placeFloor(200, 1050, 100, 100, 200, 0, -675, wood[1], woodTW, woodTH);
	//ceiling 2
	placeCeiling(200, 1050, 100, 100, 200, 60, -675, ceil[1], ceilTW, ceilTH);

	//wood 3
	placeFloor(350, 150, 100, 100, -75, 0, -875, wood[2], woodTW, woodTH);
	//ceiling 3
	placeCeiling(350, 150, 100, 100, -75, 60, -875, ceil[2], ceilTW, ceilTH);

	//grass 1
	placeFloor(200, 150, 100, 100, 200, 0, -75, grass, grassTW, grassTH);
	//placeBush(170, 0, -100);

	//var lightTarget = 
	//light above the grass
	var light = new THREE.SpotLight( 0xffffff, 3, 0, Math.PI / 3);
	light.position.set(110, 50,-130); //light post
	light.castShadow = true;
	light.shadowDarkness = 0.8;
	light.shadowCameraFov = 60;
	light.shadowCameraNear = 1;
	light.shadowCameraFar = 400;
	//light.shadowCameraVisible = true;
	var lTarget = new THREE.Object3D();
	scene.add(lTarget);
	lTarget.position.set(170, 0, -20);
	light.target = lTarget;
	scene.add(light);

	//grass 2
	placeFloor(200, 350, 100, 100, 0, 0, -625, grass, grassTW, grassTH);


	//WALLS

	// ROOM 1 START ROOM
	// left
	placeWall(150, 60, 50, 50, -100, 30, -75, true, rock[0], rockTW, rockTH);
	//placeBarrel(10, 0, -50, barrelMat);
	placeBarrel(-30, 0, -70, barrelMat);
	//placeBarrel(-10, 0, -90, barrelMat);
	placeBarrel(10, 0, -130, barrelMat);
	placeBarrel(70, 0, -100, barrelMat);
	//placeBarrel(50, 0, -30, barrelMat);
	//placeBarrel(10, 0, -50, barrelMat);
	placeBarrel(-80, 0, -110, barrelMat);

	placeBush(240, 0, -70, 1.5);
	placeBush(150, 0, -95, 1);
	// right WINDOW
	placeWallWindow(150, 60, 50, 50, 100, 30, -75, true, 4, rock[11], rock[12], rock[13], rockTW, rockTH);
	//add rain
	placeRain(50, 60, 80, 130, 30, -75, 30);


	// up DOOR
	placeWallDoor(200, 60, 50, 50, 0, 30, -150, false, -4, rock[5], rock[6], rock[7], rockTW, rockTH);
	// down
	placeWall(200, 60, 50, 50, 0, 30, 0, false, rock[1], rockTW, rockTH);

	// ROOM 2 and 2.5 //ADDED AN EXTRA WALL IN ROOM 2
	// left2
	placeWall(150, 60, 50, 50, -100, 30, -225, true, rock[0], rockTW, rockTH);
	// right2
	placeWall(150, 60, 50, 50, 300, 30, -225, true, rock[0], rockTW, rockTH);
	//right extra middle 2 DOOR
	placeWallDoor(150, 60, 50, 50, 100, 30, -225, true, 4, rock[5], rock[6], rock[7], rockTW, rockTH);
	// down2
	placeWall(200, 60, 50, 50, 200, 30, -150, false, rock[1], rockTW, rockTH);

	placeTable(40, 30, 13, 0, 0, -225, table);
	placeChair(10, 10, 18, 0, 0, -200, table, down);
	placeChair(10, 10, 18, 0, 0, -250, table, up);
	placeChair(10, 10, 18, 20, 0, -225, table, right);
	placeChair(10, 10, 18, -20, 0, -225, table, left);
	placeTable(20, 40, 13, 140, 0, -289, table);
	placeChair(10, 10, 15, 140, 0, -275, table, down);

	// ROOM 3
	// left3
	placeWall(150, 60, 50, 50, -100, 30, -375, true, rock[0], rockTW, rockTH);
	// right3
	placeWall(150, 60, 50, 50, 100, 30, -375, true, rock[0], rockTW, rockTH);
	// up3
	placeWall(200, 60, 50, 50, 0, 30, -450, false, rock[1], rockTW, rockTH);
	// down3 DOOR
	placeWallDoor(200, 60, 50, 50, 0, 30, -300, false, 4, rock[5], rock[6], rock[7], rockTW, rockTH);

	//upleftcorner
	placeBox(-100, 0, -449, crate);
	placeBox(-100, 15, -449, crate);
	placeBox(-100, 30, -449, crate);
	placeBox(-85, 0, -449, crate);
	placeBox(-85, 15, -449, crate);
	placeBox(-70, 0, -449, crate);
	placeBox(-55, 0, -449, crate);
	placeBox(-100, 0, -435, crate);
	placeBox(-100, 15, -435, crate);
	placeBox(-100, 30, -435, crate);
	placeBox(-100, 0, -420, crate);
	//uprightcorner
	placeBox(84, 0, -449, crate);
	placeBox(84, 15, -449, crate);
	placeBox(84, 30, -449, crate);
	placeBox(70, 0, -449, crate);
	placeBox(70, 15, -449, crate);
	placeBox(55, 0, -449, crate);
	placeBox(40, 0, -449, crate);
	placeBox(84, 0, -435, crate);
	placeBox(84, 15, -435, crate);
	placeBox(84, 30, -435, crate);
	placeBox(84, 0, -420, crate);
	// random boxes
	placeBox(-50, 0, -400, crate);
	placeBox(-50, 15, -400, crate);
	placeBox(-60, 0, -370, crate);
	placeBox(30, 0, -330, crate);
	placeBox(30, 15, -330, crate);
	placeBox(40, 0, -420, crate);
	//placeBox(80, 0, -420, crate);
	placeBox(-80, 0, -330, crate);
	placeBox(0, 0, -430, crate);
	placeBox(10, 0, -350, crate);
	placeBox(25, 0, -380, crate);

	// ROOM 4 OUTSIDE
	// left4
	placeWall(350, 60, 50, 50, -100, 30, -625, true, rock[2], rockTW, rockTH);
	// right4 DOOR
	placeWallDoor(350, 60, 50, 50, 100, 30, -625, true, -4, rock[8], rock[9], rock[10], rockTW, rockTH);
	// up4 DOOR
	placeWallDoor(200, 60, 50, 50, 0, 30, -800, false, -4, rock[5], rock[6], rock[7], rockTW, rockTH);

	placeBush(-85, 0, -660, 1.5);

	placeBush(35, 0, -770, 1.6);
	placeBush(25, 0, -620, 1.5);
	//placeBush(65, 0, -710, 1.2);
	placeBush(-70, 0, -510, 1.5);
	placeBush(55, 0, -550, 1.5);
	//placeBush(20, 0, -700, 1.2);
	placeBush(0, 0, -520, 1.4);
	placeBush(-50, 0, -730, 1.5);
	//add rain
	placeRain(200, 200, 350, 0, 100, -625, 100);
	// ROOM 5 LONG HALLWAY

	// long table
	placeTable(160, 35, 15, 200, 0, -500, table);
	
	placeChair(10, 10, 18, 180, 0, -430, table, left);
	placeChair(10, 10, 18, 180, 0, -450, table, left);
	placeChair(10, 10, 18, 180, 0, -470, table, left);
	placeChair(10, 10, 18, 180, 0, -490, table, left);
	placeChair(10, 10, 18, 180, 0, -510, table, left);
	placeChair(10, 10, 18, 180, 0, -530, table, left);
	placeChair(10, 10, 18, 180, 0, -550, table, left);
	placeChair(10, 10, 18, 180, 0, -570, table, left);

	placeChair(10, 10, 18, 220, 0, -430, table, right);
	placeChair(10, 10, 18, 220, 0, -450, table, right);
	placeChair(10, 10, 18, 220, 0, -470, table, right);
	placeChair(10, 10, 18, 220, 0, -490, table, right);
	placeChair(10, 10, 18, 220, 0, -510, table, right);
	placeChair(10, 10, 18, 220, 0, -530, table, right);
	placeChair(10, 10, 18, 220, 0, -550, table, right);
	placeChair(10, 10, 18, 220, 0, -570, table, right);

	placeChair(10, 10, 18, 200, 0, -580, table, up);
	placeSkull(200, 24, -580, 1, 0);
	placeChair(10, 10, 18, 200, 0, -420, table, down);
	placeSkull(200, 24, -420, 1, Math.PI);

	// right5 WINDOW
	placeWallWindow(400, 60, 50, 50, 300, 30, -500, true, 4, rock[14], rock[15], rock[16], rockTW, rockTH);
	//window light
	var light = new THREE.SpotLight( 0xffffff, 2, 0, Math.PI / 3);
	light.position.set(360, 60,-500); //light post
	light.castShadow = true;
	light.shadowDarkness = 0.8;
	light.shadowCameraFov = 60;
	light.shadowCameraNear = 1;
	light.shadowCameraFar = 200;
	//light.shadowCameraVisible = true;
	var lTarget = new THREE.Object3D();
	scene.add(lTarget);
	lTarget.position.set(340, 20, -500);
	light.target = lTarget;

	scene.add(light);

	// up5
	placeWall(200, 60, 50, 50, 200, 30, -700, false, rock[1], rockTW, rockTH);
	// down5 DOOR
	placeWallDoor(200, 60, 50, 50, 200, 30, -300, false, 4, rock[5], rock[6], rock[7], rockTW, rockTH);
	// ROOM 6 above long hallway

	// right6
	placeWall(100, 60, 50, 50, 300, 30, -750, true, rock[3], rockTW, rockTH);
	// up6 DOOR
	placeWallDoor(200, 60, 50, 50, 200, 30, -800, false, -4, rock[5], rock[6], rock[7], rockTW, rockTH);

	placeBox(100, 0, -785, crate);
	placeBox(100, 0, -716, crate);
	placeBox(100, 15, -716, crate);
	placeBox(100, 30, -716, crate);
	placeBox(115, 0, -716, crate);
	placeBox(115, 15, -716, crate);
	placeBox(130, 0, -716, crate);
	placeBox(100, 0, -731, crate);
	placeBox(175, 0, -731, crate);
	placeBox(175, 15, -731, crate);
	placeBox(180, 0, -750, crate);
	placeBox(150, 0, -775, crate);
	placeBox(285, 0, -716, crate);
	placeBox(285, 0, -731, crate);
	placeBox(285, 15, -716, crate);
	placeBox(270, 0, -716, crate);
	placeBox(250, 0, -765, crate);

	// ROOM 7 one on far left
	// left7
	placeWall(150, 60, 50, 50, -250, 30, -875, true, rock[0], rockTW, rockTH);
	// right7 DOOR
	placeWallDoor(150, 60, 50, 50, -100, 30, -875, true, -4, rock[5], rock[6], rock[7], rockTW, rockTH);
	// up7
	placeWall(150, 60, 50, 50, -175, 30, -950, false, rock[0], rockTW, rockTH);
	// down7
	placeWall(150, 60, 50, 50, -175, 30, -800, false, rock[0], rockTW, rockTH);
	// x[-100, -250] z[-800, -950]
	placeBarrel(-190, 0, -830, barrelMat);
	placeBarrel(-195, 0, -880, barrelMat);
	placeBarrel(-220, 0, -900, barrelMat);
	placeBarrel(-130, 0, -920, barrelMat);
	placeBarrel(-140, 0, -820, barrelMat);
	placeBarrel(-120, 0, -820, barrelMat);
	placeBarrel(-150, 0, -870, barrelMat);
	placeBarrel(-230, 0, -840, barrelMat);
	placeBarrel(-170, 0, -930, barrelMat);


	// ROOM 8 one above outside
	// right8 DOOR
	placeWallDoor(150, 60, 50, 50, 100, 30, -875, true, -4, rock[5], rock[6], rock[7], rockTW, rockTH);
	// up8
	placeWall(200, 60, 50, 50, 0, 30, -950, false, rock[1], rockTW, rockTH);
	placeBox(-50, 0, -830, crate);
	placeBox(-35, 0, -900, crate);
	placeBox(30, 0, -930, crate);
	placeBox(-20, 0, -855, crate);
	placeBox(50, 0, -890, crate);
	placeBox(80, 0, -925, crate);
	placeBox(0, 0, -820, crate);

	// ROOM 9
	// right9
	placeWall(150, 60, 50, 50, 300, 30, -875, true, rock[0], rockTW, rockTH);
	// up9 DOOR
	placeWallDoor(200, 60, 50, 50, 200, 30, -950, false, 4, rock[5], rock[6], rock[7], rockTW, rockTH);
	placeBox(220, 0, -890, crate);
	placeBox(260, 0, -850, crate);
	placeBox(130, 0, -820, crate);
	placeBox(120, 0, -925, crate);
	placeBarrel(150, 0, -930, barrelMat);
	placeBarrel(180, 0, -870, barrelMat);
	placeBarrel(110, 0, -880, barrelMat);
	placeBarrel(230, 0, -820, barrelMat);

	//ROOM 10 last room
	// left10
	placeWall(250, 60, 50, 50, 100, 30, -1075, true, rock[4], rockTW, rockTH);
	// right10
	placeWall(250, 60, 50, 50, 300, 30, -1075, true, rock[4], rockTW, rockTH);
	// up10 DOOR
	placeWallDoor(200, 60, 50, 50, 200, 30, -1200, false, 4, rock[5], rock[6], rock[7], rockTW, rockTH);
	//placeSkull(200, 40, -1175, 3, 0);
}

//------------------------------------------------------------------------------------------------------------

//floor and ceiling

function placeFloor(width, height, widthSegs, heightSegs, x, y, z, material, tW, tH) {
	geometry = new THREE.PlaneBufferGeometry( width, height, widthSegs, heightSegs );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
	if (material.map != null) {
		material.map.repeat.set( 4 * width / tW, 4 * height / tH);
		material.specularMap.repeat.set( width / tW, height / tH);
		material.normalMap.repeat.set( width / tW, height / tH);
	}
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.x = x;
	mesh.position.y = y;
	mesh.position.z = z;
	mesh.receiveShadow = true;
	scene.add( mesh );
}

function placeCeiling(width, height, widthSegs, heightSegs, x, y, z, material, tW, tH) {
	geometry = new THREE.PlaneBufferGeometry( width, height, widthSegs, heightSegs );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
	if (material.map != null) {
		material.map.repeat.set( 8 * width / tW, 8 * height / tH);
		material.specularMap.repeat.set( width / tW, height / tH);
		material.normalMap.repeat.set( width / tW, height / tH);
	}
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.x = x;
	mesh.position.y = y;
	mesh.position.z = z;
	//mesh.castShadow = true;
	mesh.receiveShadow = true;
	scene.add( mesh );
}


function placeWall(width, height, widthSegs, heightSegs, x, y, z, rotate, material, tW, tH) {
	var geometry = new THREE.PlaneBufferGeometry(width, height, widthSegs, heightSegs);
	if (rotate)	geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material.map != null) {
		material.map.repeat.set( 4 * width / tW, 4 * height / tH);
		material.specularMap.repeat.set( width / tW, height / tH);
		material.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material );
	plane.position.x = x;
	plane.position.y = y;
	plane.position.z = z;
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add( plane );
	objects.push(plane);
}

function placeWallDoor(width, height, widthSegs, heightSegs, x, y, z, rotate, thickness, material1, material2, material3, tW, tH) { //places door in middle of wall
	var portionW = width / 5.0;
	var portionH = height / 6.0;
	var off = 3 * portionW / 2.0;

	//one side
	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material1.map != null) {
		material1.map.repeat.set( 2 * width / tW, 4 * height / tH);
		material1.specularMap.repeat.set( width / tW, height / tH);
		material1.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x;
		plane.position.z = z - off;
	}
	else {
		plane.position.z = z;
		plane.position.x = x - off;
	}
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z - off;
	}
	else {
		plane.position.z = z - thickness;
		plane.position.x = x - off;
	}
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	//other side
	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x;
		plane.position.z = z + off;
	}
	else {
		plane.position.z = z;
		plane.position.x = x + off;
	}
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z + off;
	}
	else {
		plane.position.z = z - thickness;
		plane.position.x = x + off;
	}
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	//top
	var geometry = new THREE.PlaneBufferGeometry( portionW, 2 * portionH, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material2.map != null) {
		material2.map.repeat.set( 1 * width / tW, 1 * height / tH);
		material2.specularMap.repeat.set( width / tW, height / tH);
		material2.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material2 );
	plane.position.y = 50; //wall height is always 60 for now
	plane.position.x = x;
	plane.position.z = z;
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);

	var geometry = new THREE.PlaneBufferGeometry( portionW, 2 * portionH, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material2 );
	plane.position.y = 50; //wall height is always 60 for now
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z;
	}
	else {
		plane.position.x = x;
		plane.position.z = z - thickness;
	}
	plane.receiveShadow = true;
	scene.add(plane);

	//mini side walls left and right
	var geometry = new THREE.PlaneBufferGeometry( thickness, 4 *portionH, widthSegs, heightSegs );
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material3.map != null) {
		material3.map.repeat.set( 0.2 * width / tW, 4 * height / tH);
		material3.specularMap.repeat.set( width / tW, height / tH);
		material3.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 20;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z + (portionW / 2.0);
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x - (portionW / 2.0);
	}
	scene.add(plane);
	objects.push(plane);

	var geometry = new THREE.PlaneBufferGeometry( thickness, 4 *portionH, widthSegs, heightSegs );
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 20;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z +- (portionW / 2.0);
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x + (portionW / 2.0);
	}
	scene.add(plane);
	objects.push(plane);

	//top
	var geometry = new THREE.PlaneBufferGeometry( thickness, portionW, widthSegs, heightSegs );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 40;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z;
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x;
	}
	scene.add(plane);
}

function placeWallWindow(width, height, widthSegs, heightSegs, x, y, z, rotate, thickness, material1, material2, material3, tW, tH) { //places the window in the middle of the wall, below center
	var portionW = width / 5.0;
	var portionH = height / 6.0;
	var off = 3 * portionW / 2.0;

	//thickness can be positive or negative, based on which way to add the extra "wall"

	//one side
	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material1.map != null) {
		material1.map.repeat.set( 2 * width / tW, 4 * height / tH);
		material1.specularMap.repeat.set( width / tW, height / tH);
		material1.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x;
		plane.position.z = z - off;
	}
	else {
		plane.position.z = z;
		plane.position.x = x - off;
	}
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z - off;
	}
	else {
		plane.position.z = z - thickness;
		plane.position.x = x - off;
	}
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	//other side
	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x;
		plane.position.z = z + off;
	}
	else {
		plane.position.z = z;
		plane.position.x = x + off;
	}
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	var geometry = new THREE.PlaneBufferGeometry( 2 * portionW, height, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material1 );
	plane.position.y = y;
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z + off;
	}
	else {
		plane.position.z = z - thickness;
		plane.position.x = x + off;
	}
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	//top
	var geometry = new THREE.PlaneBufferGeometry( portionW, 3 * portionH, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material2.map != null) {
		material2.map.repeat.set( 1 * width / tW, 2 * height / tH);
		material2.specularMap.repeat.set( width / tW, height / tH);
		material2.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material2 );
	plane.position.y = 45; //wall height is always 60 for now
	plane.position.x = x;
	plane.position.z = z;
	plane.receiveShadow = true;
	scene.add(plane);

	var geometry = new THREE.PlaneBufferGeometry( portionW, 3 * portionH, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material2 );
	plane.position.y = 45; //wall height is always 60 for now
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z;
	}
	else {
		plane.position.x = x;
		plane.position.z = z - thickness;
	}
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);

	//bottom
	var geometry = new THREE.PlaneBufferGeometry( portionW, portionH, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material2 );
	plane.position.y = 5; //wall height is always 60 for now
	plane.position.x = x;
	plane.position.z = z;
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	var geometry = new THREE.PlaneBufferGeometry( portionW, portionH, widthSegs, heightSegs );
	if (rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material2 );
	plane.position.y = 5; //wall height is always 60 for now
	if (rotate) {
		plane.position.x = x + thickness;
		plane.position.z = z;
	}
	else {
		plane.position.x = x;
		plane.position.z = z - thickness;
	}
	//plane.castShadow = true;
	plane.receiveShadow = true;
	scene.add(plane);
	objects.push(plane);

	//mini side walls left and right
	var geometry = new THREE.PlaneBufferGeometry( thickness, 2 *portionH, widthSegs, heightSegs );
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	if (material3.map != null) {
		material3.map.repeat.set( 0.2 * width / tW, 4 * height / tH);
		material3.specularMap.repeat.set( width / tW, height / tH);
		material3.normalMap.repeat.set( width / tW, height / tH);
	}
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 20;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z + (portionW / 2.0);
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x - (portionW / 2.0);
	}
	scene.add(plane);

	var geometry = new THREE.PlaneBufferGeometry( thickness, 2 *portionH, widthSegs, heightSegs );
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 20;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z - (portionW / 2.0);
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x + (portionW / 2.0);
	}
	scene.add(plane);

	//up and down
	var geometry = new THREE.PlaneBufferGeometry( thickness, portionW, widthSegs, heightSegs );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) ); //rotate flat
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 10;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z;
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x;
	}
	scene.add(plane);

	var geometry = new THREE.PlaneBufferGeometry( thickness, portionW, widthSegs, heightSegs );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
	if (!rotate) geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - Math.PI / 2 ) );
	var plane = new THREE.Mesh( geometry, material3 );
	plane.position.y = 30;
	if (rotate) {
		plane.position.x = x + (thickness / 2.0);
		plane.position.z = z;
	}
	else {
		plane.position.z = z - (thickness / 2.0);
		plane.position.x = x;
	}
	scene.add(plane);



	//window
}

//objects

function placeTable(length, width, height, pos_x, pos_y, pos_z, material) {
	// legs
	var geometry = new THREE.BoxGeometry( 1, height, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x - width / 2 + 1/2;
	cube.position.y = pos_y + height / 2;
	cube.position.z = pos_z - length / 2 + 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	objects.push(cube);

	var geometry = new THREE.BoxGeometry( 1, height, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x + width / 2 -1/2;
	cube.position.y = pos_y + height / 2;
	cube.position.z = pos_z + length / 2 - 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	objects.push(cube);
	
	var geometry = new THREE.BoxGeometry( 1, height, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x + width / 2 - 1/2;
	cube.position.y = pos_y + height / 2;
	cube.position.z = pos_z - length / 2 + 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	objects.push(cube);

	var geometry = new THREE.BoxGeometry( 1, height, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x - width / 2 + 1/2;
	cube.position.y = pos_y + height / 2;
	cube.position.z = pos_z + length / 2 - 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	objects.push(cube);

	// top
	var geometry = new THREE.BoxGeometry( width, 1 , length );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x;
	cube.position.y = pos_y + height + 1/2;
	cube.position.z = pos_z;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	objects.push(cube);

	//hitbox
	var geometry = new THREE.BoxGeometry( width, height , length );
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({visible: false}));
	mesh.position.x = pos_x;
	mesh.position.y = pos_y;
	mesh.position.z = pos_z;
	scene.add( mesh );
	objects.push(mesh);
}

function placeChair(length, width, height, pos_x, pos_y, pos_z, material, direction) {
	// legs
	var geometry = new THREE.BoxGeometry( 1, height / 2, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x - width / 2 + 1/2;
	cube.position.y = pos_y + height / 4;
	cube.position.z = pos_z - length / 2 + 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );

	var geometry = new THREE.BoxGeometry( 1, height / 2, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x + width / 2 -1/2;
	cube.position.y = pos_y + height / 4;
	cube.position.z = pos_z + length / 2 - 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	
	var geometry = new THREE.BoxGeometry( 1, height / 2, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x + width / 2 - 1/2;
	cube.position.y = pos_y + height / 4;
	cube.position.z = pos_z - length / 2 + 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );

	var geometry = new THREE.BoxGeometry( 1, height / 2, 1 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x - width / 2 + 1/2;
	cube.position.y = pos_y + height / 4;
	cube.position.z = pos_z + length / 2 - 1/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );

	// seat
	var geometry = new THREE.BoxGeometry( width, 1 , length );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x;
	cube.position.y = pos_y + height/2 + 1/2;
	cube.position.z = pos_z;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	// back
	if (direction == "down") {
		var geometry = new THREE.BoxGeometry( width, height , 1 );
		cube = new THREE.Mesh( geometry, material );
		cube.position.x = pos_x;
		cube.position.y = pos_y + height + 1/2;
		cube.position.z = pos_z + length / 2 - 1/2;
		cube.castShadow = true;
		cube.receiveShadow = true;
		scene.add( cube );
	}
	if (direction == "up") {
		var geometry = new THREE.BoxGeometry( width, height , 1 );
		cube = new THREE.Mesh( geometry, material );
		cube.position.x = pos_x;
		cube.position.y = pos_y + height + 1/2;
		cube.position.z = pos_z - length / 2 + 1/2;
		cube.castShadow = true;
		cube.receiveShadow = true;
		scene.add( cube );
	}
	if (direction == "left") {
		var geometry = new THREE.BoxGeometry( 1, height , length );
		cube = new THREE.Mesh( geometry, material );
		cube.position.x = pos_x - width / 2 + 1/2;
		cube.position.y = pos_y + height + 1/2;
		cube.position.z = pos_z;
		cube.castShadow = true;
		cube.receiveShadow = true;
		scene.add( cube );
	}
	if (direction == "right") {
		var geometry = new THREE.BoxGeometry( 1, height , length );
		cube = new THREE.Mesh( geometry, material );
		cube.position.x = pos_x + width/2 - 1/2;
		cube.position.y = pos_y + height + 1/2;
		cube.position.z = pos_z;
		cube.castShadow = true;
		cube.receiveShadow = true;
		scene.add( cube );
	}	

	//hitbox
	var geometry = new THREE.BoxGeometry( width, height , length );
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({visible: false}));
	mesh.position.x = pos_x;
	mesh.position.y = pos_y;
	mesh.position.z = pos_z;
	scene.add( mesh );
	objects.push(mesh);
}

function placeBox(pos_x, pos_y, pos_z, material) {
	var geometry = new THREE.BoxGeometry( 15 , 15, 15 );
	cube = new THREE.Mesh( geometry, material );
	cube.position.x = pos_x + 15/2;
	cube.position.y = pos_y + 15/2;
	cube.position.z = pos_z + 15/2;
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add( cube );
	objects.push(cube);
}

// barrel model from http://codepen.io/nickpettit/pen/ctpna
function placeBarrel(pos_x, pos_y, pos_z, material) {
  	loader.load('models/barrel.js', function (geometry) {
    	var mesh = new THREE.Mesh(geometry, material);
    	mesh.scale.set(20, 20, 20);
    	mesh.position.x = pos_x;
    	mesh.position.y = pos_y;
    	mesh.position.z = pos_z;
    	mesh.castShadow = true;
		mesh.receiveShadow = true;
    	scene.add(mesh);
    	objects.push(mesh);
  	});
  	
}

function placeSkull(pos_x, pos_y, pos_z, scale, rotate) {
	objloader.load( 'models/skull.json', function ( object ) {
		/*var material = new THREE.MeshPhongMaterial( {
			specular: 0xd3d3d3,
			shading: THREE.FlatShading,
			side: THREE.DoubleSide,
		});
		var skull = new THREE.Mesh(object.geometry, material);
		skull.scale.set(.7 * scale, .7 * scale, .7 * scale);
    	skull.rotation.set(skull.rotation.x, rotate, skull.rotation.z);
    	skull.position.x = pos_x;
    	skull.position.y = pos_y;
    	skull.position.z = pos_z;
    	skull.castShadow = true;
		skull.receiveShadow = true;
        scene.add( skull );
        objects.push(skull);*/
    	object.scale.set(.7 * scale, .7 * scale, .7 * scale);
    	object.rotation.set(object.rotation.x, rotate, object.rotation.z);
    	object.position.x = pos_x;
    	object.position.y = pos_y;
    	object.position.z = pos_z;
    	object.castShadow = true;
		object.receiveShadow = true;
        scene.add( object );
        //objects.push(object);
    });

}
function placeBush(pos_x, pos_y, pos_z, scale) {
	var stemgeo = new THREE.BoxGeometry(1, 2 * scale, 1);
	var stemmat = table;
	var stem = new THREE.Mesh(stemgeo, stemmat);
	stem.position.x = pos_x;
	stem.position.y = pos_y + scale;
	stem.position.z = pos_z;
	stem.castShadow = true;
	stem.receiveShadow = true;
	scene.add(stem);

    var verticesOfCube = [ -1,-1,-1, 1,-1,-1, 1, 1,-1, -1, 1,-1, -1,-1, 1, 1,-1, 1, 1, 1, 1, -1, 1, 1, ]; 
    var indicesOfFaces = [ 2,1,0, 0,3,2, 0,4,7, 7,3,0, 0,1,5, 5,4,0, 1,2,6, 6,5,1, 2,3,7, 7,6,2, 4,5,6, 6,7,4 ]; 
    var geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 3 );
	var material = grass;
	var bush = new THREE.Mesh(geometry, material);
	bush.scale.set(scale, scale, scale);
	bush.position.x = pos_x;
	bush.position.y = pos_y + 6 * scale + 2*scale;
	bush.position.z = pos_z;
	bush.castShadow = true;
	bush.receiveShadow = true;
	scene.add(bush);
	objects.push(bush);

	for (var i = 0; i < geometry.faces.length; i+=3) {
		var box = new THREE.BoxGeometry(.3 * scale, .3 * scale, .3 * scale);
		var spike = new THREE.Mesh(box, material);
		var rface = geometry.faces[i];
		var p = new THREE.Vector3();
		var verts = geometry.vertices;
		var normal = geometry.faces[i].normal;
        var r1 = Math.random();
        var r2 = Math.random();
        var a = 1-Math.sqrt(r1);
        var b = Math.sqrt(r1) * (1-r2);
        var c = Math.sqrt(r1) *r2;
        p.x = a*verts[rface.a].x + b*verts[rface.b].x + c*verts[rface.c].x;
        p.y = a*verts[rface.a].y + b*verts[rface.b].y + c*verts[rface.c].y;
        p.z = a*verts[rface.a].z + b*verts[rface.b].z + c*verts[rface.c].z;
		spike.position.x = pos_x + p.x * scale ;
		spike.position.y = pos_y + 6* scale + p.y * scale + 2*scale ;
		spike.position.z = pos_z + p.z * scale ;

		scene.add(spike);
	}
}

function placePlank(x, y, z, pos_x, pos_y, pos_z) {
	var box = new THREE.BoxGeometry(x, y, z);
	var material = plank;
	var plnk = new THREE.Mesh(box, material);
	plnk.position.x = pos_x;
	plnk.position.y = pos_y;
	plnk.position.z = pos_z;
	plnk.castShadow = true;
	
	scene.add(plnk);
}


