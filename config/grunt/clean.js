// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	bower: {
		src: [
			'<%= paths.bower %>'
		]
	},
	css: {
		src: [
			'<%= paths.cssDist %>',
			'<%= paths.cssVend %>'
		]
	},
	fonts: {
		src: [
			'<%= paths.fontDist %>',
			'<%= paths.fontVend %>'
		]
	},
	js: {
		src: [
			'<%= paths.jsDist %>',
			'<%= paths.jsVend %>'
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
