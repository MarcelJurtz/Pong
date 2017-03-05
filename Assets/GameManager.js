#pragma strict

static var player1Score : int = 0;
static var player2Score : int = 0;

var layout : GUISkin;

static function Score(wallName : String) {
	if(wallName == "rightWall") {
		player1Score += 1;
	} else {
		player2Score += 1;
	}
}

var theBall : Transform;
function Start () {
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}

function OnGUI () {
	GUI.skin = layout;
	GUI.Label(new Rect(Screen.width/2-150-12, 25, 100, 100), "" + player1Score);
	GUI.Label(new Rect(Screen.width/2+150-12, 25, 100, 100), "" + player2Score);
	// Textelemente bei center mit Ankerpunkt links oben platziert
	// hälfte der breite subtrahieren um wirklich zentriert zu sein
	// durch -12 gelöst
	if(GUI.Button (new Rect(Screen.width /2 - 121/2, 35, 121, 53), "RESET")) {
		// Zahlen durch Größen der Buttons vorgegeben
		player1Score = 0;
		player2Score = 0;
		theBall.gameObject.SendMessage("ResetBall");
	}
}