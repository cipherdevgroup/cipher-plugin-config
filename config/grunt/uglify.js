// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	plugin: {
		options: {
			sourceMap: false,
			mangle: true,
			compress: true,
			report: 'gzip'
		},
		files: [
			{
				expand: true,
				cwd: '<%= paths.jsDist %>',
				src: [
					'**/*.js',
					'!**/*.min.js'
				],
				dest: '<%= paths.jsDist %>',
				ext: '.min.js',
				extDot: 'last'
			}
		]
	}
};
