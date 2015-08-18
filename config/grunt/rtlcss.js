// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	theme: {
		options: {
			swapLeftRightInUrl: false,
			swapLtrRtlInUrl: false,
			autoRename: false,
			preserveDirectives: true
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
