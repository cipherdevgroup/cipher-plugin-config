// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	options: {
		swapLeftRightInUrl: false,
		swapLtrRtlInUrl: false,
		autoRename: false,
		preserveDirectives: true
	},
	plugin: {
		expand: true,
		cwd: '<%= paths.tmp %>',
		src: [
			'*.css',
			'!*.rtl.css',
			'!*.min.css'
		],
		dest: '<%= paths.tmp %>',
		ext: '-rtl.css',
		extDot: 'last'
	}
};
