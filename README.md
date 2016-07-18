

# NodeLogger

a easy to use library to support ansi text colors into the console.

## Usage

in your project just include Logger.js and ConsoleColor.js inside the project.
after that use the following code:
[code]
var logger = require("./Logger.js"); // depending the logger file is inside the root.
[/code]

then when you want to print something to the console you can do:

```
	logger.log("hello world");
```

to have colors inside the text please see this scheme:
```
	&b = black color
	&r = red color
	&g = green color
	&y = yellow color
	&b = blue color
	&m = magenta color
	&c = cyan color
	&w = white color
	&d = default console color (not reset)
	&r = reset (removes all attributes such as bold and italic)
	&u = underline
	&i = italic
	&l = bold
	&o = blink
```
example:

```
	logger.log("my name is &yGuido&d my text is default again");
```
