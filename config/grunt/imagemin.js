// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.imagesSrc %>',
				src: [
					'*',
					'**/*'
				],
				dest: '<%= paths.imagesDist %>'
			}
		]
	}
};
