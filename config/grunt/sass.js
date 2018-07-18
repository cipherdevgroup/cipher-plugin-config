// https://github.com/sindresorhus/grunt-sass
const sass = require( 'sass' );

module.exports = {
	options: {
		implementation: sass,
		sourceMap: false,
		lineNumbers: false,
		outputStyle: 'expanded'
	},
	plugin: {
		expand: true,
		cwd: '<%= paths.cssSrc %>',
		src: [
			'*.scss'
		],
		dest: '<%= paths.cssDist %>',
		ext: '.css'
	}
};
