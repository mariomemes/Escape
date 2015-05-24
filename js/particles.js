//particles
function placeRain(w, h, l, pos_x, pos_y, pos_z, num) {
	//have rain in the lwh box with center at pos_x, pos_y, pos_z;
	//w: pos_x - l/2 to pos_x + l/2
	//l
	for (var i = 0; i < num; i++) {
		var particles = new THREE.PointCloud(rain, rainMaterial);
		scene.add(particles);
		var position = new THREE.Vector3();
		position.x = Math.floor(Math.random() * w) + pos_x - (w / 2);
		position.y = Math.floor(Math.random() * h) + pos_y - (h / 2);
		position.z = Math.floor(Math.random() * l) + pos_z - (l / 2);
		rain.vertices.push(position);
		rain.yMax.push(h);
		rain.colors.push(new THREE.Color(0x0000cc));
	}
}

function addGhostP(num, r) {
	for (var i = 0; i < num; i++) {
		var particles = new THREE.PointCloud(ghostP, ghostMaterial);
		enemy.add(particles);
		//taken from COS426 Assignment 4
		var z = Math.random() * (2 * r) - r; //equation from mozilla page on Math.random
        var phi = Math.random() * (2 * Math.PI);
        var d = Math.sqrt(r * r - z * z);
        var px = d * Math.cos(phi);
        var py = d * Math.sin(phi);
        var pz = z - 1;
        var position = new THREE.Vector3(px, py, pz);
        ghostP.vertices.push(position);
        ghostP.colors.push(new THREE.Color(0xffffff));
	}
}