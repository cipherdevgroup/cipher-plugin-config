/* global require, __dirname */
module.exports = function() {
	'use strict';

	var path = require( 'path' ),
		project = null;

	project = {
		paths: {
			config:    'config/',
			assets:    'assets/',
			languages: 'languages/',
			tmp:       'tmp/',
			jsSrc:     'js/src/',
			cssSrc:    'css/src/',
			fontSrc:   'font/src/',
			bower:     'bower/',
			grunt:     'config/grunt/',
			tasks:     'config/grunt/tasks/',
			global: {
				config: path.join( __dirname, 'config/' ),
				grunt:  path.join( __dirname, 'config/grunt/' ),
				tasks:  path.join( __dirname, 'config/grunt/tasks/' )
			}
		},
		taskMap: {
			addtextdomain: 'grunt-wp-i18n',
			bower_install: 'grunt-bower-install-task',
			makepot:       'grunt-wp-i18n',
			usebanner:     'grunt-banner',
			wpcss:         'grunt-wp-css'
		}
	};

	project.files = {
		js:     project.paths.jsSrc   + '**/*.js',
		scss:   project.paths.cssSrc  + '**/*.scss',
		icons:  project.paths.fontSrc + 'icons/**/*.svg',
		config: project.paths.config  + '**/*.js',
		php: [
			'*.php',
			'**/*.php',
			'!.git/**',
			'!.sass-cache/**',
			'!assets/**',
			'!css/**',
			'!dist/**',
			'!fonts/**',
			'!images/**',
			'!js/**',
			'!languages/**',
			'!bower_components/**',
			'!node_modules/**',
			'!tmp/**'
		]
	};

	return project;
};
