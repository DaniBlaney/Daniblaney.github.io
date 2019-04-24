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

		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};

/*------------------------------------------------------------------------------*/
/* make mobile touch screen controls--my code added to Florians's*/

// var el = document.getElementsByTagName("canvas")[0];
// el.addEventListener("touchstart", handleStart);
// el.addEventListener("touchmove", handleMove);
// el.addEventListener("touchend", handleEnd);
// el.addEventListener("touchcancel", handleCancel);

// var gameController {
// 	bind : function() {
// 		$(document).on('ontouchstart', function(event) {
// 			return touches.handler(event, true);
// 		});
// 		$(document).on('ontouchend', function(event) {
// 			return touches.handler(event, false);
// 		});
// 	},
// 	reset : function() {
// 		keys.left = false;
// 		keys.right = false;
// 		keys.accelerate = false; //hold
// 		keys.up = false; //a button
// 		keys.down = false; //b button
// 	},
// 	unbind : function() {
// 		$(document).off('ontouchstart');
// 		$(document).off('ontouchend');
// 	},

// 	touchHandler : function(event, status) {
// 		switch(event.keyCode) {
// 			case 57392://CTRL on MAC
// 			case 17://CTRL
// 			case 65://A
// 				keys.accelerate = status;
// 				break;
// 			case 40://DOWN ARROW
// 				keys.down = status;
// 				break;
// 			case 39://RIGHT ARROW
// 				keys.right = status;
// 				break;
// 			case 37://LEFT ARROW
// 				keys.left = status;
// 				break;
// 			case 38://UP ARROW
// 				keys.up = status;
// 				break;
// 			default:
// 				return true;
// 		}

// 	event.preventDefault();
// 	return false;
// },
// accelerate : false,
// left : false,
// up : false,
// right : false,
// down : false,
// };
