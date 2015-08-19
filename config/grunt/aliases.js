module.exports = function() {
	'use strict';
	var tasks = {
		'build': [
			'clean',
			'shell:bower',
			'build:fonts',
			'build:css',
			'build:images',
			'build:js',
			'clean:bowercomponents',
			'build:i18n'
		],
		'build:dev': [
			'build:fonts',
			'build:css',
			'build:images',
			'build:js'
		],
		'build:dependencies': [
			'build:dependencies:css',
			'build:dependencies:fonts',
			'build:dependencies:js'
		],
		'build:i18n': [
			'clean:languages',
			'addtextdomain',
			'makepot',
			'newer:copy:languages'
		],
		'newplugin': [
			'copy:rename',
			'replace:packagename',
			'readpkg',
			'build'
		],
		'default': [
			'watch'
		]
	};

	return tasks;
};
