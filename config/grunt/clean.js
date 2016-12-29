// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	bower: {
		src: [
			'<%= paths.bower %>'
		]
	},
	css: {
		src: [
			'css/*',
			'css/**',
			'!<%= paths.cssSrc %>**',
			'<%= paths.cssSrc %>vendor/'
		]
	},
	fonts: {
		src: [
			'font/*',
			'!<%= paths.fontSrc %>**',
			'<%= paths.fontSrc %>vendor/'
		]
	},
	js: {
		src: [
			'js/*',
			'js/**',
			'!<%= paths.jsSrc %>**',
			'<%= paths.jsSrc %>*.min.js',
			'<%= paths.jsSrc %>vendor/'
		]
	},
	images: {
		src: [
			'images/*',
			'images/**',
			'!<%= paths.imagesSrc %>**'
		]
	},
	languages: {
		src: [
			'<%= paths.languages %>*.pot'
		]
	},
	release: {
		src: [
			'<%= paths.release %>'
		]
	}
};
