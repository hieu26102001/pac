var BOARD_GHOST_STATE_CTX = null;
var STATE_BLINKY_COLOR = "#ed1b24";
var STATE_PINKY_COLOR = "#feaec9";
var STATE_INKY_COLOR = "#4adecb";
var STATE_CLYDE_COLOR = "#f99c00";


function initGhostState() { 

	$("#state").show();
	var ctx = BOARD_GHOST_STATE_CTX;
	var canvas = document.getElementById('canvas-ghost-state');
	canvas.setAttribute('width', '300px');
	canvas.setAttribute('height', '300px');
	if (canvas.getContext) { 
		BOARD_GHOST_STATE_CTX = canvas.getContext('2d');
	}

	canvas = document.getElementById('canvas-state-blinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = STATE_BLINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-state-pinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = STATE_PINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	
	canvas = document.getElementById('canvas-state-inky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = STATE_INKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	
	canvas = document.getElementById('canvas-state-clyde');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = STATE_CLYDE_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
}

function getCanvasState(){
	return BOARD_GHOST_STATE_CTX
}

function drawGridState(){
    var ctx = getBoardCanevasContext()
	for(var x=0; x <= 100 ; x = x+10){
		ctx.moveTo(x,0)
		ctx.lineTo(x,550)

		ctx.moveTo(1,x)
		ctx.lineTo(550,x)

		ctx.strokeStyle="red";
		ctx.lineWidth = "1";
		ctx.stroke();
	}
	initGhosts();
	drawGhosts();
}