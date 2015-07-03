// https://github.com/mattstyles/grunt-banner
module.exports = {
	plugin: {
		options: {
			position: 'top',
			banner: '/*!\n' +
				'plugin Name:  <%= pkg.plugin.name %>\n' +
				'Version:     <%= pkg.version %>\n' +
				'Author:      <%= pkg.plugin.author %>\n' +
				'Author URI:  <%= pkg.plugin.authoruri %>\n' +
				'plugin URI:   <%= pkg.plugin.uri %>\n' +
				'Description: <%= pkg.plugin.description %>\n' +
				'Tags:        <%= pkg.plugin.tags %>\n' +
				'Text Domain: <%= pkg.plugin.textdomain %>\n' +
				'Domain Path: <%= pkg.plugin.domainpath %>\n' +
				'License:     <%= pkg.plugin.license %>\n' +
				'License URI: <%= pkg.plugin.licenseuri %>\n' +
				'*/\n',
			linebreak: true
		},
		files: [
			{
				cwd: '<%= paths.tmp %>',
				src: 'style.css',
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	},
	adminStyle: {
		options: {
			position: 'top',
			banner: '/*!\n' +
				'<%= pkg.plugin.name %> Editor Styles\n' +
				'Version: <%= pkg.version %>\n' +
				'*/\n',
			linebreak: true
		},
		files: [
			{
				cwd: '<%= paths.tmp %>',
				src: 'editor-style.css',
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	}
};
