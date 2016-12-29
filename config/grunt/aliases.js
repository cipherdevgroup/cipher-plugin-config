module.exports = function() {
	'use strict';
	var tasks = {
		'build': [
			'clean',
			'build:fonts',
			'build:css',
			'build:images',
			'build:js',
			'clean:bowercomponents',
			'build:i18n'
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
			'build'
		],
		'release': [
			'build',
			'copy:release'
		],
		'release:major': [
			'version::major',
			'release'
		],
		'release:minor': [
			'version::minor',
			'release'
		],
		'release:patch': [
			'version::patch',
			'release'
		],
		'default': [
			'watch'
		]
	};

	return tasks;
};
