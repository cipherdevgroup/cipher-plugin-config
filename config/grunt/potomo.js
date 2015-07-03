// https://github.com/axisplugins/grunt-potomo
module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.assets %><%= paths.languages %>',
				src: ['*.po'],
				dest: '<%= paths.plugin%><%= paths.languages %>',
				ext: '.mo',
				nonull: true,
				filter: 'isFile'
			}
		]
	}
};
