//enemy
function loadEnemy(pos_x, pos_y, pos_z) {
	
    objloader.load( 'models/ghost.json', function ( object) {
    	//var object = new THREE.Mesh(object, material);
    	//console.log(object.geometry.morphNormals.length);
    	enemy = object;
    	enemy.scale.set(5, 5, 5);
    	enemy.position.x = pos_x;
    	enemy.position.y = pos_y;
    	enemy.position.z = pos_z;
        scene.add( enemy );
        //addGhostP(50, 2); causes too much lag
    });
}