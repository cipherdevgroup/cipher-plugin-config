// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	bower: {
		src: [
			'<%= paths.bower %>'
		]
	},
	css: {
		src: [
			'<%= paths.cssDist %>'
		]
	},
	fonts: {
		src: [
			'<%= paths.fontDist %>'
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
