/* global require, __dirname */
module.exports = function() {
	'use strict';

	var path = require( 'path' ),
		project = {};

	project.sass = require( 'sass' );

	project.paths = {
		config:     'config/',
		assets:     'assets/',
		languages:  'languages/',
		release:    'release/',
		jsSrc:      'assets/plugin/js/',
		jsVend:     'js/vendor/',
		jsDist:     'js/',
		cssSrc:     'assets/plugin/css/',
		cssDist:    'css/',
		cssVend:    'css/vendor/',
		fontsSrc:   'assets/plugin/fonts/',
		fontsDist:  'fonts/',
		fontsVend:  'fonts/vendor/',
		imagesSrc:  'assets/plugin/images/',
		imagesDist: 'images/',
		imagesVend: 'images/vendor/',
		bower:      'assets/bower/',
		grunt:      'config/grunt/',
		node:       'node_modules/',
		tasks:      'tasks/'
	};

	project.paths.global = {
		config: path.join( __dirname, 'config/' ),
		grunt:  path.join( __dirname, 'config/grunt/' ),
		tasks:  path.join( __dirname, 'tasks/' )
	};

	project.taskMap = {
		addtextdomain: 'grunt-wp-i18n',
		readpkg:       'cipher-plugin-config',
		makepot:       'grunt-wp-i18n'
	};

	project.files = {
		scss:   project.paths.cssSrc  + '**/*.scss',
		images: project.paths.imagesSrc  + '**/*',
		config: project.paths.config  + '**/*.js'
	};

	project.files.js = [
		project.paths.jsSrc + '**/*.js',
		'!' + project.paths.jsSrc + '**/*.min.js',
		'!' + project.paths.jsVend
	];

	project.files.php = [
		'*.php',
		'**/*.php',
		'!.git/**',
		'!.sass-cache/**',
		'!assets/**',
		'!css/**',
		'!release/**',
		'!fonts/**',
		'!images/**',
		'!js/**',
		'!languages/**',
		'!bower_components/**',
		'!node_modules/**',
		'!tmp/**'
	];

	return project;
};
