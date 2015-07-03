// https://github.com/mattstyles/grunt-banner
module.exports = {
	plugin: {
		options: {
			position: 'top',
			banner: '/*!\n' +
				'Plugin Name: <%= pkg.plugin.nameSpaced %>\n' +
				'Version:     <%= pkg.version %>\n' +
				'Author:      <%= pkg.plugin.author %>\n' +
				'License:     <%= pkg.plugin.license %>\n' +
				'*/\n',
			linebreak: true
		},
		files: [
			{
				cwd: '<%= paths.tmp %>',
				src: '<%= pkg.nameDashed %>.css',
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	},
	adminStyle: {
		options: {
			position: 'top',
			banner: '/*!\n' +
				'<%= pkg.plugin.nameSpaced %> Admin Styles\n' +
				'Version: <%= pkg.version %>\n' +
				'*/\n',
			linebreak: true
		},
		files: [
			{
				cwd: '<%= paths.tmp %>',
				src: 'admin-<%= pkg.nameDashed %>.css',
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	}
};
