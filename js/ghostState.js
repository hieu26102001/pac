var BOARD_GHOST_STATE_CTX = null;
var STATE_BLINKY_COLOR = "#ed1b24";
var STATE_PINKY_COLOR = "#feaec9";
var STATE_INKY_COLOR = "#4adecb";
var STATE_CLYDE_COLOR = "#f99c00";


function initGhostState() { 

	$("#state").show();
	var ctx = BOARD_GHOST_STATE_CTX;
	var canvas = document.getElementById('canvas-ghost-state');
	canvas.setAttribute('width', '400px');
	canvas.setAttribute('height', '400px');
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
	// drawGridState();
	drawStateBoard();
	StateGhost()
}

function getCanvasState(){
	return BOARD_GHOST_STATE_CTX
}

function drawStateBoard(){
	var ctx = getCanvasState()
	ctx.strokeStyle = "blue";
	ctx.lineWidth = "5";

	ctx.roundRect(10,10,380,380,5);
	ctx.stroke()

}

function drawGridState(){
	var ctx = getCanvasState()
	for(var x=0; x <= 400 ; x = x+10){
		ctx.moveTo(x,0)
		ctx.lineTo(x,400)

		ctx.moveTo(0,x)
		ctx.lineTo(400,x)

		ctx.strokeStyle="red";
		ctx.lineWidth = "1";
		ctx.stroke();
	}
}

function StateGhost(){ 
	var ghost = [
		{name:"blinky",
		state:blinky},
		{name:"pinky",
		state:inky},
		{name:"inky",
		state:pinky},
		{name:"clyde",
		state:clyde}
	]
	var pacmanX = PACMAN_POSITION_X;
	var pacmanY = PACMAN_POSITION_Y;

	ghost.map((ghost,i) => {
		eval('var state = GHOST_' + ghost.name.toUpperCase() + '_STATE');
		eval('var ghostX = GHOST_' + ghost.name.toUpperCase() + '_POSITION_X');
		eval('var ghostY = GHOST_' + ghost.name.toUpperCase() + '_POSITION_Y');
		
		if(state === 0){
			if (Math.abs(ghostX - pacmanX) <= 150 && Math.abs(ghostY - pacmanY) <=150){
				ghost.name === "inky" || ghost.name === "pinky"
					? ghost.state = "Block" 
					: ghost.state = "Chase"
			} else ghost.state = "Find"
		} else if(state === 1) {ghost.state = "Afraid"}
		else ghost.state = "Spawn"
	return (document.getElementById(ghost.name).innerHTML = ghost.state.toUpperCase(),
			document.getElementById((i+1).toString()).innerHTML = ghost.name.toUpperCase())
	
	})
}