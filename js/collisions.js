//collision detection for the player
//right now it is just the player hitray
//Adapted from http://webmaestro.fr/collisions-detection-three-js-raycasting/

//the "hitrayes" for the player (in this case we use raycasters)
function playerBox() {
	//xz are flat plane, y is vertical

	hitray = [];
	for (var i = 0; i < 8; i++) {
		hitray[i] = new THREE.Object3D();
		camera.add(hitray[i]);
	}
	hitray[0].position.set(0,0,-1); //F
	hitray[1].position.set(1,0,-1); //FR
	hitray[2].position.set(1,0,0); //R
	hitray[3].position.set(1,0,1); //BR
	hitray[4].position.set(0,0,1); //B
	hitray[5].position.set(-1,0,1); //BL
	hitray[6].position.set(-1,0,0); //L
	hitray[7].position.set(-1,0,-1); //FL
}

function playerCollisions() {

	for (var i = 0; i < 8; i++) {
		var raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 15); //origin, direction, near, far
		raycaster.ray.origin.copy( controls.getObject().position );
		raycaster.ray.direction.copy( hitray[i].position);
		camera.localToWorld(raycaster.ray.direction);
		raycaster.ray.origin.y -= 20;
		raycaster.ray.direction.y = 0; //do not care about up and down
		raycaster.ray.direction.x -= raycaster.ray.origin.x;
		raycaster.ray.direction.z -= raycaster.ray.origin.z;
		raycaster.ray.direction.normalize();

		var intersections = raycaster.intersectObjects( objects );
		if (intersections.length > 0 && intersections[0].distance <= hitDist) {
			if ((i === 0 || i === 1 || i === 7) && velocity.z < 0) { //move forward
	        	velocity.z = 0;
	        } 
	        else if ((i === 3 || i === 4 || i === 5) && velocity.z > 0) { //move backward
	        	velocity.z = 0;
	        }

			if ((i === 1 || i === 2 || i === 3) && velocity.x > 0) { //move left
	        	velocity.x = 0;
	        } 
	        else if ((i === 5 || i === 6 || i === 7) && velocity.x < 0) { //move right
	        	velocity.x = 0;
	        }
		}
	}
}