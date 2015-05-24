//Adapted from:
// http://www.html5rocks.com/en/tutorials/pointerlock/intro/
// http://threejs.org/examples/misc_controls_pointerlock.html

var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

if ( havePointerLock ) {

	var element = document.body;

	var pointerlockchange = function ( event ) {

		if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {

			controlsEnabled = true;
			controls.enabled = true;

			blocker.style.display = 'none';

		} else {

			controls.enabled = false;

			blocker.style.display = '-webkit-box';
			blocker.style.display = '-moz-box';
			blocker.style.display = 'box';

			instructions.style.display = '';

		}

	}

	var pointerlockerror = function ( event ) {

		instructions.style.display = '';

	}

	// Hook pointer lock state change events
	document.addEventListener( 'pointerlockchange', pointerlockchange, false );
	document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
	document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

	document.addEventListener( 'pointerlockerror', pointerlockerror, false );
	document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
	document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

	instructions.addEventListener( 'click', function ( event ) {

		instructions.style.display = 'none';
		// Ask the browser to lock the pointer
		element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
		if ( /Firefox/i.test( navigator.userAgent ) ) {

			var fullscreenchange = function ( event ) {

				if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {

					document.removeEventListener( 'fullscreenchange', fullscreenchange );
					document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

					element.requestPointerLock();
				}

			}

			document.addEventListener( 'fullscreenchange', fullscreenchange, false );
			document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

			element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

			element.requestFullscreen();

		} else {

			element.requestPointerLock();

		}

	}, false );

} else {

	instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

}

//Movement and looking (keyboard and mouse)
function controller() {

	controls = new THREE.PointerLockControls( camera );
	scene.add( controls.getObject() );

	var onKeyDown = function ( event ) {
		if (!win)
			ingame = true;
		switch ( event.keyCode ) {
			case 38: // up
				moveFLUp = true;
				break;
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
				moveFLLeft = true;
				break;
			case 65: // a
				moveLeft = true;
				break;

			case 40: // down
				moveFLDown = true;
				break;
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
				moveFLRight = true;
				break;
			case 68: // d
				moveRight = true;
				break;

			/*case 32: // space FIX! THIS IS SHODDY
				if ( canJump === true ) velocity.y += 350;
				canJump = false;
				break;*/ //NO JUMPING FOR NOW

			case 70: //flashlight toggle
				flToggle = !flToggle;
				break;

			case 80: //p, pause
				pause = !pause;
				break;

			case 32: //space, restart game if dead or won
				if (!alive || win) {
					ingame = true;
					restart = true;
				}
				break;
		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: // up
				moveFLUp = false;
				break;
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
				moveFLLeft = false;
				break;
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
				moveFLDown = false;
				break;
			case 83: // s
				moveBackward = false;
				break;

			case 39: // right
				moveFLRight = false;
				break;
			case 68: // d
				moveRight = false;
				break;

		}

	};

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
}

//allows for window resizing
function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}