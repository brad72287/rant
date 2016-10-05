(function(){
	'use strict';

	function RantsController(RantFactory, $filter, $state, rantShow){
		var vm = this;

		vm.data = rantShow.data;	

		vm.getRants = getRants;
		vm.createRant = createRant;
		vm.updateRant = updateRant;

		//instantiation
		activate();

		function activate(){
			getRants();
		}

		function getRants(){
			return RantFactory.getRants()
				.then(setRants)
		}

		function createRant(){
			console.log('creating a rant');
			$state.go('home.index');
			return RantFactory.createRant(vm.newRant)
				.then(getRants)
		}

		function updateRant(){
			$state.go('home.index');
			return RantFactory.updateRant(vm.data);
		}

		function setRants(data){
			return vm.rants = data;
		}
	}

	angular
		.module('app')
		.controller('RantsController', RantsController)
}());