// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	css: {
		src: [
			'<%= paths.cssDist %>'
		]
	},
	fonts: {
		src: [
			'<%= paths.fontsDist %>'
		]
	},
	js: {
		src: [
			'<%= paths.jsDist %>'
		]
	},
	images: {
		src: [
			'<%= paths.imagesDist %>'
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
