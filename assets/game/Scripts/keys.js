/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
 */

var keys = {
	bind : function() {
		$(document).on('keydown', function(event) {
			return keys.handler(event, true);
		});
		$(document).on('keyup', function(event) {
			return keys.handler(event, false);
		});
/*------------------------------------------------------------------------------*/
/* make mobile touch screen controls--my code added to Florians's*/

		var buttonA = new Hammer(document.getElementById('buttonA'));
		buttonA.on("press pressup", function (ev) {
			if (ev.type == "press") {
				keys.up = true;
			}
			if (ev.type == "pressup") {
				keys.up = false;
			}
		});

		var right = new Hammer(document.getElementById('right'));
		right.on("press pressup", function (ev) {
			if (ev.type == "press") {
				keys.right = true;
			}
			if (ev.type == "pressup") {
				keys.right = false;
			}
		});

		var left = new Hammer(document.getElementById('left'));
		left.on("press pressup", function (ev) {
			if (ev.type == "press") {
				keys.left = true;
			}
			if (ev.type == "pressup") {
				keys.left = false;
			}
		});

		var buttonB = new Hammer(document.getElementById('buttonB'));
		buttonB.on("press pressup", function (ev) {
			if (ev.type == "press") {
				keys.accelerate = true;
			}
			if (ev.type == "pressup") {
				keys.accelerate = false;
			}
		});
		//end of my code for touch
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status) {
		console.log(event, "status", status)
		switch(event.keyCode) {
			case 57392://CTRL on MAC
			case 17://CTRL
			case 65://A
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
				keys.down = status;
				break;
			case 39://RIGHT ARROW
				console.log('right')
				keys.right = status;
				break;
			case 37://LEFT ARROW
				keys.left = status;
				break;
			case 38://UP ARROW
				keys.up = status;
				break;
			default:
				return true;
		}

		// event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};
