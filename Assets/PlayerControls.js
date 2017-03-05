#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;

var speed : float = 10;


function Update () {
    if(Input.GetKey(moveUp)) {
        GetComponent.<Rigidbody2D>().velocity.y = speed;
    }else if(Input.GetKey(moveDown)) {
        GetComponent.<Rigidbody2D>().velocity.y = -1 * speed;
    }
    else {
        GetComponent.<Rigidbody2D>().velocity.y = 0;
    }
    // Bewegung der Paddles durch Aufprall nur für einen Frame
    GetComponent.<Rigidbody2D>().velocity.x = 0;
}

function Start() {
	GetComponent.<Rigidbody2D>().freezeRotation = true;
}
