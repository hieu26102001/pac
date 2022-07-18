var FRUITS_CANVAS_CONTEXT = null;
var LEVEL_FRUITS_CANVAS_CONTEXT = null;
var FRUITS_SIZE = 30;

var FRUITS_POSITION_X = 276;
var FRUITS_POSITION_Y = 310;

var FRUIT_MINIMUM_START = 15;
var FRUIT_CANCEL_TIMER = null;
var FRUIT_CANCEL_SPEED = 7500;
var FRUIT = null;


function initFruits() { 
	var canvas = document.getElementById('canvas-fruits');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		FRUITS_CANVAS_CONTEXT = canvas.getContext('2d');
	}
	
	var levelCanvas = document.getElementById('canvas-level-fruits');
	levelCanvas.setAttribute('width', '265');
	levelCanvas.setAttribute('height', '30');
	if (levelCanvas.getContext) { 
		LEVEL_FRUITS_CANVAS_CONTEXT = levelCanvas.getContext('2d');
	}
	
	var ctx = getLevelFruitsCanevasContext();
	ctx.clearRect(0, 0, 265, 30);
	
	var x = 245;
	var y = 14;
	var i = 0;
	
	if (LEVEL > 7) { 
		var l = LEVEL
		if (l > 13) l = 13;
		i = -(l - 7);
	}
	drawFruit(ctx, "melon", x - ( i * 37), y, 27);
	
}

function getFruitsCanevasContext() { 
	return FRUITS_CANVAS_CONTEXT;
}
function getLevelFruitsCanevasContext() { 
	return LEVEL_FRUITS_CANVAS_CONTEXT;
}

function eatFruit() { 

	
	var s = 0;
	if (FRUIT === "cherry")  s = 100;
	else if (FRUIT === "strawberry")  s = 300;
	else if (FRUIT === "orange")  s = 500;
	else if (FRUIT === "apple")  s = 700;
	else if (FRUIT === "melon")  s = 1000;
	else if (FRUIT === "galboss")  s = 2000;
	else if (FRUIT === "bell")  s = 3000;
	else if (FRUIT === "key")  s = 5000;
	
	score(s, "fruit");
	cancelFruit();
}

function fruit() { 
	
	if (TIME_FRUITS === 2 && $("#board .fruits").length > 0) { 
		$("#board .fruits").remove();
	}
	if (TIME_FRUITS > FRUIT_MINIMUM_START) { 
		if (anyGoodIdea() > 3) { 
			oneFruit();
		}
	}
}
function oneFruit() { 
	if ( FRUIT_CANCEL_TIMER === null ) { 
		var ctx = getFruitsCanevasContext();
		FRUIT = "melon";
		drawFruit(ctx, FRUIT, FRUITS_POSITION_X, FRUITS_POSITION_Y, FRUITS_SIZE);
		FRUIT_CANCEL_TIMER = new Timer("cancelFruit()", FRUIT_CANCEL_SPEED);
	}
}
function cancelFruit() { 
	eraseFruit();
	FRUIT_CANCEL_TIMER.cancel();
	FRUIT_CANCEL_TIMER = null;
	TIME_FRUITS = 0;
}

function eraseFruit() { 

	var ctx = getFruitsCanevasContext();

	ctx.clearRect(FRUITS_POSITION_X - (FRUITS_SIZE), FRUITS_POSITION_Y - (FRUITS_SIZE), FRUITS_SIZE * 2, FRUITS_SIZE * 2);

}

function drawFruit(ctx, x, y, size) {  
	ctx.save();
	drawMelon(ctx, x, y + 7, size / 1.6);

	ctx.restore();
}


function drawMelon(ctx, x, y, size) { 

	ctx.translate(x - (size / 2), y - (size / 2));
	
	ctx.fillStyle = "#198122";
	ctx.beginPath();
	ctx.moveTo(size / 2, size / 6);
	ctx.arc(size / 2, size / 6, size / 1.15, 1.1, 2.5, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#ACFB77";
	ctx.moveTo(size / 2, size / 6);
	ctx.arc(size / 2, size / 6, size / 1.3, 1.1, 2.5, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#F92F2F";
	ctx.moveTo(size / 2, size / 6);
	ctx.arc(size / 2, size / 6, size / 1.7, 1.1, 2.5, true);
	ctx.fill();
	ctx.closePath();

	var mod = size / 23;
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.moveTo(12 * mod, 9 * mod);
	ctx.arc(12 * mod, 9 * mod, size / 12, 1.1, 2.5, true);
	ctx.moveTo(13 * mod, 12 * mod);
	ctx.arc(13 * mod, 12 * mod, size / 12, 1.1, 2.5, true);
	ctx.moveTo(10.5 * mod, 12 * mod);
	ctx.arc(10.5 * mod, 12 * mod, size / 12, 1.1, 2.5, true);
	ctx.fill();
	ctx.closePath();
}
