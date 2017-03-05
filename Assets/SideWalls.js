#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
	if(hitInfo.name == "ball") {
		var wallName = transform.name;
		GameManager.Score(wallName);

		hitInfo.gameObject.SendMessage("ResetBall");
	}
}
