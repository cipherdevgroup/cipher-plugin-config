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
			'usebanner:plugin',
			'postcss',
			'rtlcss',
			'cssmin:style',
			'replace:style',
			'copy:css'
		]
	}
};
