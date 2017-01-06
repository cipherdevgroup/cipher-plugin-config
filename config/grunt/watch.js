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
	images: {
		files: [
			'<%= files.images %>'
		],
		tasks: [
			'build:images'
		]
	},
	php: {
		files: [
			'<%= files.php %>'
		],
		tasks: [
			'build:i18n'
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
