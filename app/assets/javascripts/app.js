(function(){
	'use strict';

	angular
		.module('app', ['ui.router', 'templates'])

		.directive('hello', function(){
			return {
				template: "this is a test"
			}
		})


}());