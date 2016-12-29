// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	options: {
		report: 'gzip',
		sourceMap: false
	},
	style: {
		expand: true,
		cwd: '<%= paths.cssDist %>',
		src: [
			'*.css',
			'**/*.css',
			'!*.min.css',
			'!**/*.min.css'
		],
		dest: '<%= paths.cssDist %>',
		ext: '.min.css',
		extDot: 'last'
	}
};
