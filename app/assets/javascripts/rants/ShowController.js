(function(){
	'use strict';

	function ShowController(RantFactory, rantShow){
		var vm = this;
		console.log('show controller');
		console.log(rantShow.data);
		this.data = rantShow.data;
		vm.updateRant = updateRant;
		//vm.updateRant = updateRant;

		function updateRant(){
			console.log('creating a rant');
			return RantFactory.updateRant(vm.data);
		}
	}

	angular
		.module('app')
		.controller('ShowController', ShowController)
}());