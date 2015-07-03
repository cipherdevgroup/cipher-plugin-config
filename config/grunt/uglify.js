// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	plugin: {
		options: {
			sourceMap: true,
			sourceMapName: 'js/plugin.js.map',
			sourceMapIncludeSources: true,
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
