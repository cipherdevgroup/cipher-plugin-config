// https://github.com/sindresorhus/grunt-sass
const sass = require( 'sass' );

module.exports = {
	options: {
		implementation: sass,
		sourceMap: false,
		lineNumbers: false,
		outputStyle: 'expanded'
	}
};
