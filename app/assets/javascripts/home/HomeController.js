(function(){
	'use strict';

	function HomeController(){
		var vm = this;
		vm.name = 'brad';

		//instantiation
		activate();

		//methods
		function activate(){
		}
	}

	angular
		.module('app')
		.controller('HomeController', HomeController)
}());