// https://github.com/yoavf/grunt-cssjanus
module.exports = {
	plugin: {
		options: {
			swapLtrRtlInUrl: false
		},
		files: [
			{
				src: '<%= paths.tmp %><%= pkg.nameDashed %>.css',
				dest: '<%= paths.tmp %><%= pkg.nameDashed %>-rtl.css'
			},
			{
				src: '<%= paths.tmp %>admin-<%= pkg.nameDashed %>.css',
				dest: '<%= paths.tmp %>admin-<%= pkg.nameDashed %>-rtl.css'
			}
		]
	}
};
