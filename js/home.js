var HOME = false;

var HOME_PRESENTATION_TIMER = -1;
var HOME_PRESENTATION_STATE = 0;

var HOME_TRAILER_TIMER = -1;
var HOME_TRAILER_STATE = 0;


function initHome() { 
	HOME = true;
	
	GAMEOVER = false;
	LOCK = false;
	PACMAN_DEAD = false;
	

	$("#panel").hide();
	$("#state").hide();
	$("#home").show();
	$("#home h3 em").append( " - " + new Date().getFullYear() );

	
	var ctx = null;
	var canvas = document.getElementById('canvas-presentation-blinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_BLINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	
	canvas = document.getElementById('canvas-presentation-pinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_PINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	
	canvas = document.getElementById('canvas-presentation-inky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_INKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	
	canvas = document.getElementById('canvas-presentation-clyde');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_CLYDE_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	
	startPresentation();
}

function startPresentation() { 
	$("#presentation *").hide();
	$("#canvas-presentation-blinky").show();
	$("#presentation-name-blinky").show();
	$("#canvas-presentation-pinky").show();
	$("#presentation-name-pinky").show();
	$("#canvas-presentation-inky").show();
	$("#presentation-name-inky").show();
	$("#canvas-presentation-clyde").show();
	$("#presentation-name-clyde").show();
}

function stopPresentation() { 

	if (HOME_PRESENTATION_TIMER != -1) { 
		$("#presentation *").hide();
		HOME_PRESENTATION_STATE = 0;
		clearInterval(HOME_PRESENTATION_TIMER);
		HOME_PRESENTATION_TIMER = -1;
	}
}
