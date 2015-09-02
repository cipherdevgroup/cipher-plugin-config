// https://github.com/axisthemes/grunt-potomo
module.exports = {
	release: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.languages %>src/',
				src: [ '*.po' ],
				dest: '<%= paths.languages %>',
				ext: '.mo',
				nonull: true,
				filter: 'isFile'
			}
		]
	}
};
