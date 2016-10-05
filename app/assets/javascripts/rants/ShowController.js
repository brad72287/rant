(function(){
	'use strict';

	function ShowController(RantFactory, rantShow, $state){
		var vm = this;
		if (rantShow){
			console.log('there is a rant!');
			vm.data = rantShow.data;	
		}
		vm.updateRant = updateRant;

		function updateRant(){
			$state.go('home.index');
			return RantFactory.updateRant(vm.data);
		}
	}

	angular
		.module('app')
		.controller('ShowController', ShowController)
}());