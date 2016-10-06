// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require( 'autoprefixer' );

module.exports = {
	options: {
		map: true,
		processors: [
			autoprefixer( {
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Explorer >= 8',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				]
			} )
		]
	},
	plugin: {
		expand: true,
		cwd: '<%= paths.tmp %>',
		src: [
			'*.css',
			'**/*.css',
			'!*.min.css',
			'!**/*.min.css'
		],
		dest: '<%= paths.tmp %>',
		ext: '.css',
		extDot: 'last'
	}
};
