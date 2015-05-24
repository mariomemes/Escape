//woodFloor
var woodDiffuse = [];
var woodDisp = [];
var woodNorm = [];
var wood = [];
var woodTW = 512.0;
var woodTH = 512.0;

for (var i = 0; i < 3; i++) {
	woodDiffuse[i] = THREE.ImageUtils.loadTexture('textures/woodDiff.jpg');
	woodDisp[i] = THREE.ImageUtils.loadTexture('textures/woodDisp.jpg');
	woodNorm[i] = THREE.ImageUtils.loadTexture('textures/woodNorm.jpg');
	woodDiffuse[i].minFilter = THREE.LinearFilter;
	woodDiffuse[i].wrapS = woodDiffuse[i].wrapT = THREE.RepeatWrapping;
	woodDisp[i].minFilter = THREE.LinearFilter;
	woodDisp[i].wrapS = woodDisp[i].wrapT = THREE.RepeatWrapping;
	woodNorm[i].minFilter = THREE.LinearFilter;
	woodNorm[i].wrapS = woodNorm[i].wrapT = THREE.RepeatWrapping;
	//
	wood[i] = new THREE.MeshPhongMaterial( {
		specular: 0xffffff,
		specularMap: woodDisp[i], 
		map: woodDiffuse[i],
		shading: THREE.FlatShading,
		normalMap: woodNorm[i],
		normalScale: new THREE.Vector2(3,3),
		shininess: 1,
		side: THREE.DoubleSide,
	} );
}

//ceiling
var ceilDiffuse = [];
var ceilDisp = [];
var ceilNorm = [];
var ceil = [];
var ceilTW = 512.0;
var ceilTH = 512.0;

for (var i = 0; i < 3; i++) {
	ceilDiffuse[i] = THREE.ImageUtils.loadTexture('textures/ceilDiff.jpg');
	ceilDisp[i] = THREE.ImageUtils.loadTexture('textures/ceilDisp.jpg');
	ceilNorm[i] = THREE.ImageUtils.loadTexture('textures/ceilNorm.jpg');
	ceilDiffuse[i].minFilter = THREE.LinearFilter;
	ceilDiffuse[i].wrapS = ceilDiffuse[i].wrapT = THREE.RepeatWrapping;
	ceilDisp[i].minFilter = THREE.LinearFilter;
	ceilDisp[i].wrapS = ceilDisp[i].wrapT = THREE.RepeatWrapping;
	ceilNorm[i].minFilter = THREE.LinearFilter;
	ceilNorm[i].wrapS = ceilNorm[i].wrapT = THREE.RepeatWrapping;
	//
	ceil[i] = new THREE.MeshPhongMaterial( {
		specular: 0xffffff,
		specularMap: ceilDisp[i], 
		map: ceilDiffuse[i],
		shading: THREE.FlatShading,
		normalMap: ceilNorm[i],
		normalScale: new THREE.Vector2(0.5,0.5),
		shininess: 1,
		side: THREE.DoubleSide,
	} );
}


//stone walls
//rock 0-4 are for walls
//rock 5-7, 8-10 are for doors
//rock 11-13, 14-16 are for windows
var rockDiffuse = [];
var rockDisp = [];
var rockNorm = [];
var rock = [];
var rockTW = 512.0;
var rockTH = 512.0;

for (var i = 0; i < 17; i++) {
	rockDiffuse[i] = THREE.ImageUtils.loadTexture('textures/rockDiff.jpg');
	rockDisp[i] = THREE.ImageUtils.loadTexture('textures/rockDisp.jpg');
	rockNorm[i] = THREE.ImageUtils.loadTexture('textures/rockNorm.jpg');
	rockDiffuse[i].minFilter = THREE.LinearFilter;
	rockDiffuse[i].wrapS = rockDiffuse[i].wrapT = THREE.RepeatWrapping;
	rockDisp[i].minFilter = THREE.LinearFilter;
	rockDisp[i].wrapS = rockDisp[i].wrapT = THREE.RepeatWrapping;
	rockNorm[i].minFilter = THREE.LinearFilter;
	rockNorm[i].wrapS = rockNorm[i].wrapT = THREE.RepeatWrapping;
	//
	rock[i] = new THREE.MeshPhongMaterial( {
		specular: 0xffffff,
		specularMap: rockDisp[i], 
		map: rockDiffuse[i],
		shading: THREE.FlatShading,
		normalMap: rockNorm[i],
		normalScale: new THREE.Vector2(5,5),
		shininess: 1,
		side: THREE.DoubleSide,
	} );
}

//grass
var grassDiffuse = THREE.ImageUtils.loadTexture('textures/grassDiff.jpg');
var grassDisp = THREE.ImageUtils.loadTexture('textures/grassDisp.jpg');
var grassNorm = THREE.ImageUtils.loadTexture('textures/grassNorm.jpg');
var grassTW = 512.0;
var grassTH = 512.0;
grassDiffuse.minFilter = THREE.LinearFilter;
grassDiffuse.wrapS = grassDiffuse.wrapT = THREE.RepeatWrapping;
grassDisp.minFilter = THREE.LinearFilter;
grassDisp.wrapS = grassDisp.wrapT = THREE.RepeatWrapping;
grassNorm.minFilter = THREE.LinearFilter;
grassNorm.wrapS = grassNorm.wrapT = THREE.RepeatWrapping;
//
var grass = new THREE.MeshPhongMaterial( {
	specular: 0xffffff,
	specularMap: grassDisp, 
	map: grassDiffuse,
	shading: THREE.FlatShading,
	normalMap: grassNorm,
	normalScale: new THREE.Vector2(0.2,0.2),
	shininess: 1,
	side: THREE.DoubleSide,
} );

//---------------------------------------------------------------------
//objects

//barrel
var barrelDiffuse = THREE.ImageUtils.loadTexture( 'textures/barrel.jpg' );
var barrelSpecular = THREE.ImageUtils.loadTexture( 'textures/barrel2.jpg' );
var barrelNormal = THREE.ImageUtils.loadTexture( 'textures/barrel3.jpg' );

var barrelMat = new THREE.MeshPhongMaterial({
	map: barrelDiffuse,
	specular: 0xffffff,
	specularMap: barrelSpecular,
	shininess: 10,
	normalMap: barrelNormal,
	normalScale: new THREE.Vector2(1,1),
});

// crate texture from http://opengameart.org/content/3-crate-textures-w-bump-normal
var crateTexture = THREE.ImageUtils.loadTexture('textures/crate1_diffuse.png');
var crateBump = THREE.ImageUtils.loadTexture('textures/crate1_bump.png');
crateTexture.minFilter = THREE.LinearFilter;
crateTexture.wrapS = crateTexture.wrapT = THREE.RepeatWrapping;
crateTexture.repeat.set( 1, 1 );
var crate = new THREE.MeshPhongMaterial( {
	specular: 0xffffff, 
	specularMap: grassDisp, //weird. but makes it look less plain
	map: crateTexture,
	bumpMap: crateBump,
	shading: THREE.FlatShading,
	shininess: 1,
	side: THREE.DoubleSide,
	normalScale: new THREE.Vector2(2,2),
} );

// table texture from http://www.rendertextures.com/royal-walnut-wood-planks-texture/
var tableTexture = THREE.ImageUtils.loadTexture('textures/tableDiff.jpg');
var tableBump = THREE.ImageUtils.loadTexture('textures/tableDisp.jpg');
tableTexture.minFilter = THREE.LinearFilter;
tableTexture.wrapS = tableTexture.wrapT = THREE.RepeatWrapping;
tableTexture.repeat.set( 0.5, 0.5 );
var table = new THREE.MeshPhongMaterial( {
	specular: 0x000000,
	map: tableTexture,
	bumpMap: tableBump,
	shading: THREE.FlatShading,
	side: THREE.DoubleSide
} );

// plank texture from http://texturelib.com/#!/category/?path=/Textures/wood/planks%20old
var plankTexture = THREE.ImageUtils.loadTexture('textures/plank.jpg');
//var plankBump = THREE.ImageUtils.loadTexture('textures/plankbump.jpg');
plankTexture.minFilter = THREE.LinearFilter;
plankTexture.wrapS = plankTexture.wrapT = THREE.RepeatWrapping;
plankTexture.repeat.set( 1, 1 );
var plank = new THREE.MeshLambertMaterial( {
	specular: 0x000000,
	map: plankTexture,
	//bumpMap: plankBump,
	shading: THREE.FlatShading,
	side: THREE.DoubleSide
} );




//------------------------------------------------------------------
//water particle
var rainTexture = THREE.ImageUtils.loadTexture('textures/base.png');
var rainMaterial = new THREE.PointCloudMaterial( { size: 3.0,
    map: rainTexture,
    color: 0x4d4ddb,
    blending: THREE.NormalBlending, //THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: THREE.VertexColors
} );

//ghost particle
var ghostTexture = THREE.ImageUtils.loadTexture('textures/smoke.png');
var ghostMaterial = new THREE.PointCloudMaterial( { size: 3.0,
    map: ghostTexture,
    color: 0xffffff,
    blending: THREE.NormalBlending, //THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: THREE.VertexColors
} );