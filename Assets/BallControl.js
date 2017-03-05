#pragma strict

function Start () {
	yield WaitForSeconds(2);
	LoadBall();
}

function Update () {
	// Langsame Geschwindigkeit durch Abprallen an Rändern verhindern
	var minSpeed = 7;
	var xVel : float = GetComponent.<Rigidbody2D>().velocity.x;
	if(xVel < minSpeed && xVel > -1 * minSpeed && xVel != 0) {
		if(xVel > 0) {
			// Bewegung nach rechts
			GetComponent.<Rigidbody2D>().velocity.x = 10;
		} else {
			// Bewegung nach links
			GetComponent.<Rigidbody2D>().velocity.x = -10;
		}
	}
}

// Andrehen des Balls
function OnCollisionEnter2D (coliderInfo : Collision2D) {
	if(coliderInfo.collider.tag == "Player") {
		GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y/2 + coliderInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
	}
}

function LoadBall() {
	// Start in zufällige Richtung
	var randomNumber = Random.Range(0, 2);

	var forceX : float = 50;
	var forceY : float = 10;
	if(randomNumber <= 0.5) {
		// nach rechts
		GetComponent.<Rigidbody2D>().AddForce(new Vector2 (forceX, forceY));
	} else { 
		GetComponent.<Rigidbody2D>().AddForce(new Vector2(-forceX, -forceY));
	}
}

function ResetBall() {
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = 0;

	yield WaitForSeconds(0.5);
	LoadBall();
}