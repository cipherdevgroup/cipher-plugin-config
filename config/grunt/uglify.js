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
				cwd: 'js/',
				src: [
					'*.js',
					'!*.min.js'
				],
				dest: 'js/',
				ext: '.min.js',
				extDot: 'last'
			}
		]
	}
};
