/*
Copyright 2016 Guido Lucassen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var BLACK = "\033[30m";
var RED = "\033[31m";
var GREEN = "\033[32m";
var YELLOW = "\033[33m";
var BLUE = "\033[34m";
var MAGENTA = "\033[35m";
var CYAN = "\033[36m";
var WHITE = "\033[37m";
var DEFAULT_COLOR = "\033[39m";
var RESET = "\033[0m";
var UNDERLINE = "\033[3m";
var ITALIC = "\033[4m";
var BOLD = "\033[1m";
var BLINK = "\033[5m";

function translateToAlternateColor(message) {
	return message.replace(/&+[brgybmcwdruilo]{1}/ig, function(d) {
		var colorchar = d.substring(1);
		switch(colorchar) {
		case "b":
			d = BLACK;
			break;
		case "r":
			d = RED;
			break;
		case "g":
			d = GREEN;
			break;
		case "y":
			d = YELLOW;
			break;
		case "b":
			d = BLUE;
			break;
		case "m":
			d = MAGENTA;
			break;
		case "c":
			d = CYAN;
			break;
		case "w":
			d = WHITE;
			break;
		case "d":
			d = DEFAULT_COLOR;
			break;
		case "r":
			d = RESET;
			break;
		case "u":
			d = UNDERLINE;
			break;
		case "i":
			d = ITALIC;
			break;
		case "l":
			d = BOLD;
			break;
		case "o":
			d = BLINK;
			break;
		}
		return d;
	}) + "\033[0m";
}
exports.translateToAlternateColor = translateToAlternateColor;
