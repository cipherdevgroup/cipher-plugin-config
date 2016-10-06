// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	options: {
		swapLeftRightInUrl: false,
		swapLtrRtlInUrl: false,
		autoRename: false,
		preserveDirectives: true,
		map: true
	},
	plugin: {
		expand: true,
		cwd: '<%= paths.tmp %>',
		src: [
			'*.css',
			'**/*.css',
			'!*-rtl.css',
			'!**/*-rtl.css',
			'!*.min.css',
			'!**/*.min.css'
		],
		dest: '<%= paths.tmp %>',
		ext: '-rtl.css',
		extDot: 'last'
	}
};
