module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.initConfig({
		jshint: {
			files: [
			  'GruntFile.js',
			  'src/me.xize.nodeansilogger/test/test.js'
			],
			options: {
			  ignores:[]
			}
		}
	});
	
	grunt.registerTask('default', ['jshint']);
	
};