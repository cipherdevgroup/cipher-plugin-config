// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	bower: {
		src: [
			'<%= paths.bower %>'
		]
	},
	bowercomponents: {
		src: [
			'bower_components'
		]
	},
	css: {
		src: [
			'css/*',
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
	tmp: {
		src: [
			'<%= paths.tmp %>'
		]
	},
	js: {
		src: [
			'js/*',
			'!<%= paths.jsSrc %>**',
			'<%= paths.jsSrc %>vendor/'
		]
	},
	images: {
		src: [
			'images/*',
			'!<%= paths.imagesSrc %>**'
		]
	},
	languages: {
		src: [
			'languages'
		]
	},
	release: {
		src: [
			'<%= paths.release %>'
		]
	}

};
