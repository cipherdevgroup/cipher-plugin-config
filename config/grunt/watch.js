// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: [
			'<%= files.js %>'
		],
		tasks: [
			'build:js'
		]
	},
	scss: {
		files: [
			'<%= files.scss %>'
		],
		tasks: [
			'sass:plugin',
			'postcss',
			'cssmin:style',
			'copy:css'
		]
	}
};
