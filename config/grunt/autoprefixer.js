// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
	options: {
		browsers: [
			'Android >= 2.1',
			'Chrome >= 21',
			'Explorer >= 8',
			'Firefox >= 17',
			'Opera >= 12.1',
			'Safari >= 6.0'
		],
		map: false,
		diff: false
	},
	plugin: {
		files: [
			{
				src: 'css/<%= pkg.nameDashed %>.css',
				dest: '<%= paths.tmp %><%= pkg.nameDashed %>.css'
			},
			{
				src: 'css/admin-<%= pkg.nameDashed %>.css',
				dest: '<%= paths.tmp %>admin-<%= pkg.nameDashed %>.css'
			}
		]
	}
};
