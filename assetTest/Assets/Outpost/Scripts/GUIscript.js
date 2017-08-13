@script ExecuteInEditMode()

var mainmenuSkin : GUISkin;
var animator : Animator;

function Start () {
	// initialise the reference to the animator component
	animator = GetComponent("Animator");
}


function OnGUI () {

	GUI.skin = mainmenuSkin;
	
	if(GUILayout.Button ("POSE")) {
		animator.SetInteger("State", 101);
	}

	if(GUILayout.Button ("RELAX")) {
		animator.SetInteger("State", 102);
	}

	if(GUILayout.Button ("ALERT")) {
		animator.SetInteger("State", 103);
	}

	if(GUILayout.Button ("WALK")) {
		animator.SetInteger("State", 201);
	}

	if(GUILayout.Button ("RUN")) {
		animator.SetInteger("State", 202);
	}

	if(GUILayout.Button ("SHOT A")) {
		shotA();
	}

	if(GUILayout.Button ("SHOT B")) {
		shotB();
	}

	if(GUILayout.Button ("GUARD")) {
		animator.SetInteger("State", 402);
	}

	if(GUILayout.Button ("DAMAGE")) {
		animator.SetInteger("State", 401);
	}

	if(GUILayout.Button ("DEAD")) {
		animator.SetInteger("State", 403);
	}

}

function Update () {
	//ESC-Quit
	if (Input.GetKeyDown(KeyCode.Home) || Input.GetKeyDown(KeyCode.Escape) || Input.GetKeyDown(KeyCode.Menu)) {
		Application.Quit();
	}

}

function shotA() {
	animator.SetInteger("State", 301);
	yield WaitForSeconds (0.8f);
	animator.SetInteger("State", 303);
}

function shotB() {
	animator.SetInteger("State", 302);
	yield WaitForSeconds (0.3f);
	animator.SetInteger("State", 304);
}


