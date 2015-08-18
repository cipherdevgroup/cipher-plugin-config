// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require('autoprefixer-core');

module.exports = {
	options: {
		processors: [
			autoprefixer({
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Explorer >= 8',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				]
			})
		],
		map: false
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
