// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: 'images/src/',
				src: [ '*.*' ],
				dest: 'images/'
			}
		]
	}
};
