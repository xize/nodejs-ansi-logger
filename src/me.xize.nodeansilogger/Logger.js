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

var ConsoleColor = require("./ConsoleColor.js");
var fs = require('fs');
var writer = fs.createWriteStream("server.log", {flags: 'a'});
var util = require( "util" );

function convertMonth(m) {
	switch(m) {
	case 'Jan': return '01';
	case 'Feb': return '02';
	case 'Mar': return '03';
	case 'Apr': return '04';
	case 'May': return '05';
	case 'Jun': return '06';
	case 'Jul': return '07';
	case 'Aug': return '08';
	case 'Sep': return '09';
	case 'Okt': return '10';
	case 'Nov': return '11';
	case 'Dec': return '12';
	default: return '?';
	}
}

function formatDate(format, date) {
	var time = date.toString().split(" ");
	return format.replace(/%+[DMYhms]{1}/g, function(d) {
		switch(d) {
		case '%D': d = time[2]; break;
		case '%M': d = convertMonth(time[1]); break;
		case '%Y': d = time[3]; break;
		case '%h': d = time[4].split(":")[0]; break;
		case '%m': d = time[4].split(":")[1]; break;
		case '%s': d = time[4].split(":")[2]; break;
		}
		return d;
	});
}

function log(message, replacement) {
	if(typeof replacement === 'undefined') {
		replacement = ''; //since overloading functions doesn't work, check on null and instance it with empty string to fix (undefined text)
	}
	var time = formatDate("%D-%M-%Y %h:%m:%s", new Date());
	
	//if %d or %s is called replace it with this variable
	var isWritten = writer.write(time + " [Info]: " + util.format(message.toString().trim(), replacement) +"\r\n");
	
	if(isWritten) {
		return console.log(util.format(time + ConsoleColor.translateToAlternateColor("&g[Info]:&d "+message.toString().trim()+"\033[0m"), replacement));
	}
	
	writer.end();
}
exports.log = log;