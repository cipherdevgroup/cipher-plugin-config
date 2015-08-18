// https://github.com/sindresorhus/grunt-sass
module.exports = {
	options: {
		sourceMap: false,
		lineNumbers: false,
		outputStyle: 'expanded'
	},
	plugin: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.scss %>',
				src: '<%= pkg.nameDashed %>.scss',
				dest: 'css/',
				ext: '.css'
			}
		]
	}
};
