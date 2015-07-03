// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
	options: {
		browsers: [
			'Android >= 2.1',
			'Chrome >= 21',
			'Explorer >= 8',
			'Firefox >= 17',
			'Opera >= 12.1',
			'Safari >= 6.0'
		],
		map: false,
		diff: false
	},
	plugin: {
		src: [
			'*.css',
			'!*.min.css'
		],
		dest: '<%= paths.tmp %>*.css'
	}
};
