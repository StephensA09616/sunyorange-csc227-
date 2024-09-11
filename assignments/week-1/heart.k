function start() {
	turnLeft();

	repeat(10) {
		move();
}

	turnRight();

	repeat(3){
		move();
}
	collectPileOfBeepers();

	dropBeepers();

	repeat(2) {
		move();
}

	collectPileOfBeepers(); 

	move();

	turnAround();

	dropBeepers();

	repeat(4) {
		move();
}
	
	turnLeft();

	move();

	turnLeft();

	collectPileOfBeepers();

	dropBeepers();

	turnCorner();

	moving();

	repeat(7) {
		finish();
}

	while(frontIsClear()) {
		move();
}
	turnLeft();

	move();

	turnLeft();

}
}











function finish() {
	turnAround();
	collectPileOfBeepers();
	dropBeepers();
	turnCorner();
	moving();
}



function collectDrop() {
	turn();
}

function collectPileOfBeepers() {
	while (beepersPresent()) {
		pickBeeper();
	}
}

function dropBeepers() {
	while (beepersInBag()) {
		putBeeper();
		move();
	}
}

function moving() {
	while(noBeepersPresent()) {
		move();
	}
}

function turnCorner() {
	turnRight();
	move();
	turnRight();
}

function turnRight() {
	repeat(3){
		turnLeft();
	}
}

function turnAround() {
	repeat(2) {
		turnLeft();
	}
}