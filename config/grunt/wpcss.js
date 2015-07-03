// https://github.com/cedaro/grunt-wp-css
module.exports = {
	options: {
		config: 'alphabetical'
	},
	css: {
		expand: true,
		src: [
			'<%= paths.tmp %><%= pkg.nameDashed %>.css',
			'<%= paths.tmp %><%= pkg.nameDashed %>-admin.css'
		]
	}
};
