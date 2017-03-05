#pragma strict

var mainCam : Camera;

var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;

var Player1 : Transform;
var Player2 : Transform;

var wallDistance = 75f;


// Code aus Start()-Methode in Update, falls die Spielfeldgröße während des Spielens geändert werden darf
function Start() {

	// Move each Wall to its edge location
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * 2f, 0f, 0f)).x, 1f);
	// Vector2 = mit 2 Nummern
	// Screen.Width gibt einheit in px zurück, units benötigt
	// Vektor3 benötigt x,y,z deshalb 2f 0f 0f
	topWall.offset = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height, 0f)).y + 0.5f);
	// Center: 0 horizontal
	// vertikal: +0,5, da halbe höhe des colliders, sonst halb neben dem screen

	bottomWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * 2f, 0f, 0f)).x, 1f);
	bottomWall.offset = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).y - 0.5f);

	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height * 2f, 0f)).y);
	leftWall.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x - 0.5f, 0f);

	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height * 2f, 0f)).y);
	rightWall.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x + 0.5f, 0f);

	Player1.position.x = mainCam.ScreenToWorldPoint(new Vector3(wallDistance, 0f, 0f)).x;
	Player2.position.x = mainCam.ScreenToWorldPoint(new Vector3(Screen.width - wallDistance, 0f, 0f)).x;
}

function Update () {

	
}
