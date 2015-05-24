//init and animate, and run the game

function init() {

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	scene = new THREE.Scene();
	//load flashlight
	flashlight();
	//load controls
	controller();
	controls.getObject().position.set(0,PLAYERHEIGHT,-20); //player spawn point
	//load the level
	level();
	//player collision rays
	playerBox();

	//load ghost
	loadEnemy(300.0, PLAYERHEIGHT, -1300.0, 10.0);

	//renderer
	renderer = new THREE.WebGLRenderer();
	//renderer.setClearColor( 0xffffff );
	//renderer.setClearColor( 0x0f0000 ); //sky color
	renderer.setClearColor( 0x000000 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	//enable shadows
	renderer.shadowMapEnabled = true;
	renderer.shadowMapType = THREE.PCFSoftShadowMap; //soft
	document.body.appendChild( renderer.domElement );

	//add battery meter
	battDisp = document.createElement('div');
	battDisp.style.position = 'absolute';
	battDisp.style.width = 100;
	battDisp.style.height = 20;
	battDisp.style.color = "white";
	battDisp.style.backgroundColor = "transparent";
	battDisp.innerHTML = "Battery: " + battery.toFixed();
	battDisp.style.top = 10 + 'px';
	battDisp.style.left = 10 + 'px';
	document.body.appendChild(battDisp);

	//window resizing
	window.addEventListener( 'resize', onWindowResize, false );


	//sounds
	footsteps = new Howl({
		urls: ['sounds/footsteps.mp3'],
		loop: true,
		volume: 0.0
	}).play();

	ghostSound = new Howl({
		urls: ['sounds/ghost.mp3'],
		loop:true,
		volume: 0.0
	}).play();
}

function animate() {

	requestAnimationFrame( animate );

	if ( controlsEnabled ) {
		//restart the game if space is pressed after killed
		if (restart) {
			restart = false;
			alive = true;
			pause = false;
			dS = false;
			wS = false;
			flToggle = false;
			controls.getObject().position.set(0, PLAYERHEIGHT, -20); //reset positions
			enemy.position.set(300.0, PLAYERHEIGHT, -1300);
			//reset battery
			battery = BMAX;
			//remove HTML
			if (!win) {
				document.body.removeChild(deadScreen);
			}
			else {
				document.body.removeChild(winScreen);
				win = false;
			}
		}

		var time = performance.now();
		var delta = ( time - prevTime ) / 1000;

		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;
		velocity.y = 0; //just to make sure it doesn't get changed
		//velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass //gravity

		if ( moveForward ) velocity.z -= PSpeed * delta;
		if ( moveBackward ) velocity.z += PSpeed * delta;

		if ( moveLeft ) velocity.x -= PSpeed * delta;
		if ( moveRight ) velocity.x += PSpeed * delta;

		if (moveForward || moveBackward || moveLeft || moveRight) {
			footsteps.volume(1.0);
		}
		else footsteps.volume(0.0);

		playerCollisions();

		//move
		if (ingame && !pause) {
			if (alive) {
				controls.getObject().translateX( velocity.x * delta );
				//controls.getObject().translateY( velocity.y * delta );
				controls.getObject().translateZ( velocity.z * delta );
			}
			else {
				if (controls.getObject().position.y > 5)
					controls.getObject().translateY( -10.0 * delta); //slowly fall until close to ground
				else if (!dS) {
					//display "You are dead, press space to restart"
					deadScreen = document.createElement('div');
					deadScreen.style.position = 'absolute';
					deadScreen.style.width = 400;
					deadScreen.style.height = 100;
					deadScreen.style.color = "white";
					deadScreen.style.backgroundColor = "transparent";
					deadScreen.innerHTML = "<h1>You Have Died</h1></br><h2>Press Space to Restart</h2>";
					deadScreen.style.textAlign = "center";
					deadScreen.style.left = window.innerWidth / 2 - 200 + "px";
					deadScreen.style.top = window.innerHeight / 2 + 100 + "px";
					document.body.appendChild(deadScreen);
					dS = true;
				}
			}
		}

		//move flashlight
		if (moveFLUp) {
			var y = flashlight.position.y;
			if (y < PLAYERHEIGHT - 5) {
				flashlight.position.y += 20.0 * delta;
				flTarget.position.y += 20.0 * delta;
				flT.position.y += 20.0 * delta;
			}
		}
		if (moveFLDown) {
			var y = flashlight.position.y;
			if (y > FLPOSITIONY - 7) {
				flashlight.position.y -= 20.0 * delta;
				flTarget.position.y -= 20.0 * delta;
				//flT.position.y -= 20.0 * delta;
			}
		}

		if (moveFLLeft) {
			var x = flashlight.position.x;
			if (x > -20) {
				flashlight.position.x -= 20.0 * delta;
				flTarget.position.x -= 20.0 * delta;
				//flT.position.x -= 20.0 * delta;
			}
		}

		if (moveFLRight) {
			var x = flashlight.position.x;
			if (x < 20) {
				flashlight.position.x += 20.0 * delta;
				flTarget.position.x += 20.0 * delta;
				//flT.position.x += 20.0 * delta;
			}
		}

		//toggle flashlight, either there is still battery left, or the battery has regained enough power
		if (flToggle && ingame && ((battery > 0 && bdrain >= 0)||(battery > 5 && bdrain < 0))) {
			flashlight.castShadow = true;
			if (flashlight.intensity == 0) {
				flashlight.intensity = FLMAXINTENSITY;
				flashlight.distance = FLMAXDISTANCE;
				bdrain = BDMAX;
			}
			else {
				if (flashlight.intensity > FLINTENSITY) {
					flashlight.intensity -= 0.05;
				}
				if (flashlight.distance > FLDISTANCE) {
					flashlight.distance -= 1;
				}
				if (bdrain > BDMIN) {
					bdrain -= BDDIF;
					if (bdrain < BDMIN) bdrain = BDMIN;
				}
			}
		}
		else {
			flashlight.intensity = 0;
			flashlight.castShadow = false;
			bdrain = -BDMIN;
		}

		//drain battery
		if (ingame && !pause && alive)
			battery -= bdrain;
		if (battery <= 0) {
			battery = 0;
		}
		if (battery > BMAX) {
			battery = BMAX; //can't overcharge
		}
		document.body.removeChild(battDisp);
		battDisp = document.createElement('div');
		battDisp.style.position = 'absolute';
		battDisp.style.width = 100;
		battDisp.style.height = 20;
		battDisp.style.color = "white";
		battDisp.style.backgroundColor = "transparent";
		battDisp.innerHTML = "Battery: " + battery.toFixed();
		battDisp.style.top = 10 + 'px';
		battDisp.style.left = 10 + 'px';
		document.body.appendChild(battDisp);


		//------------------------------
		//move enemy toward player
		var ghostMove = new THREE.Vector3();
		//controls.getObject().position is player position
		ghostMove.x = controls.getObject().position.x - enemy.position.x;
		ghostMove.z = controls.getObject().position.z - enemy.position.z;
		var gDist = ghostMove.length();
		//ghost has collided with player
		if (gDist <= 10) {
			alive = false;
		}

		//play ghost volume based on distance
		var gVol = Math.min(1.0, 50 * 50.0  / (gDist * gDist));
		ghostSound.volume(gVol);

		enemy.lookAt(controls.getObject().position); //face player at all times
		ghostMove.normalize();
		if (ingame && !pause && alive) {
			enemy.position.x += ESpeed * ghostMove.x * delta;
			enemy.position.z += ESpeed * ghostMove.z * delta;
		}

		//if player glitches out of map
		if (controls.getObject().position.length() > 3000) {
			controls.getObject().position.set(0, PLAYERHEIGHT, -20);
		}

		//if player reaches the end
		if (controls.getObject().position.z <= -1210 && !wS) {
			console.log("end");
			ingame = false;
			win = true;
			winScreen = document.createElement('div');
			winScreen.style.position = 'absolute';
			winScreen.style.width = 400;
			winScreen.style.height = 40;
			winScreen.style.color = "white";
			winScreen.style.backgroundColor = "transparent";
			winScreen.innerHTML = "<h1>You Won!</h1></br><h2>Press Space to Restart</h2>"
			winScreen.style.left = window.innerWidth / 2 - 200 + "px";
			winScreen.style.top = window.innerHeight / 2 + 100 + "px";
			document.body.appendChild(winScreen);
			wS = true;
		}


		//rain
		if (ingame) {
			for (var i = 0; i < rain.vertices.length; i++) {
				var rPos = rain.vertices[i];
				rPos.y -= 100.0 * delta;
				if (rPos.y < 0) 
					rPos.y = rain.yMax[i];
				rain.vertices[i].set(rPos.x, rPos.y, rPos.z);
				rain.verticesNeedUpdate = true;
			}
			//ghost TOO MUCH LAG
			/*for (var i = 0; i < ghostP.vertices.length; i++) {
				var gPos = ghostP.vertices[i];
				gPos.y -= 10 * delta;
				gPos.z -= 10 * delta;
				if (gPos.y < -10) {
					var z = Math.random() * (2 * 2) - 2; //radius = 10
					var phi = Math.random() * (2 * Math.PI);
        			var d = Math.sqrt(2 * 2 - z * z);
					gPos.y = d * Math.sin(phi);
					gPos.x = d * Math.cos(phi);
					gPos.z = z - 1;;
				}
				ghostP.vertices[i].set(gPos.x, gPos.y, gPos.z);
				ghostP.verticesNeedUpdate = true;
			}*/
		}

		prevTime = time;

	}
	renderer.render( scene, camera );

}

//run
init();
animate();