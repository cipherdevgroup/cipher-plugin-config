/* global require, __dirname */
module.exports = function() {
	'use strict';

	var path = require( 'path' ),
		project = {};

	project.paths = {
		config:    'config/',
		assets:    'assets/',
		languages: 'languages/',
		release:   'release/',
		tmp:       'tmp/',
		jsSrc:     'js/src/',
		cssSrc:    'css/src/',
		fontSrc:   'font/src/',
		imagesSrc: 'images/src/',
		bower:     'bower/',
		grunt:     'config/grunt/',
		tasks:     'tasks/'
	};

	project.paths.global = {
		config: path.join( __dirname, 'config/' ),
		grunt:  path.join( __dirname, 'config/grunt/' ),
		tasks:  path.join( __dirname, 'tasks/' )
	};

	project.taskMap = {
		addtextdomain: 'grunt-wp-i18n',
		readpkg:       'sitecare-plugin-config',
		makepot:       'grunt-wp-i18n',
		usebanner:     'grunt-banner',
		wpcss:         'grunt-wp-css'
	};

	project.files = {
		scss:   project.paths.cssSrc  + '**/*.scss',
		config: project.paths.config  + '**/*.js'
	};

	project.files.js = [
		project.paths.jsSrc + '**/*.js',
		'!' + project.paths.jsSrc + '**/*.min.js',
		'!' + project.paths.jsSrc + 'vendor/'
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
