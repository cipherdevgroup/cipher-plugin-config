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
			'css'
		]
	},
	fonts: {
		src: [
			'fonts',
			'<%= paths.tmp %>icons'
		]
	},
	tmp: {
		src: [
			'<%= paths.tmp %>'
		]
	},
	js: {
		src: [
			'js'
		]
	},
	images: {
		src: [
			'images'
		]
	},
	languages: {
		src: [
			'languages'
		]
	}

};
