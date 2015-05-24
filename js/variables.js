var FLMAXINTENSITY = 3;
var FLINTENSITY = 1.5;
var FLMAXDISTANCE = 225;
var FLDISTANCE = 175;
var BMAX = 100.0;
var BDMAX = 1;
var BDDIF = 0.05;
var BDMIN = 0.01;

var PLAYERHEIGHT = 25;
var FLPOSITIONY = -8; //relative to PLAYERHEIGHT

var camera, scene, renderer;
var geometry, material, mesh;
var controls;

var flashlight;
var flTarget;
var flT;

var objects = [];

var enemy;

var hitray;
var hitDist = 5; //the body of the person (he's basically a cylinder)

//particles
var rain = new THREE.Geometry();
rain.yMax = [];

var ghostP = new THREE.Geometry();

var dust = new THREE.Geometry();

//for instructions
var blocker = document.getElementById( 'blocker' );
var instructions = document.getElementById( 'instructions' );

//for controls
var controlsEnabled = false;

var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;

var moveFLUp = false;
var moveFLDown = false;
var moveFLLeft = false;
var moveFLRight = false;

//flashlight on/off
var flToggle = false;
var battery = BMAX;
var bdrain = 0.0;

//time and movement
var prevTime = performance.now();
var velocity = new THREE.Vector3();

//player speed
var PSpeed = 400;
//enemy speed
var ESpeed = 20;

var up = "up";
var down = "down";
var right = "right";
var left = "left";

//could probably reduce the number of these if I think
var ingame = false;
var pause = false;
var alive = true;
var restart = false;
var win = false;

//model loader

var loader = new THREE.JSONLoader();
var objloader = new THREE.ObjectLoader();

//HTML elements
var battDisp;
var deadScreen;
var dS = false;
var winScreen;
var wS = false;

//sounds
var footsteps;
var ghostSound;