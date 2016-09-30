(function(){
	'use strict';

	function ShowController(RantFactory, rantShow, $state){
		var vm = this;
		console.log('show controller');
		console.log(rantShow.data);
		this.data = rantShow.data;
		vm.updateRant = updateRant;
		//vm.updateRant = updateRant;

		function updateRant(){
			console.log('creating a rant');
			$state.go('home.index');
			return RantFactory.updateRant(vm.data);
		}
	}

	angular
		.module('app')
		.controller('ShowController', ShowController)
}());