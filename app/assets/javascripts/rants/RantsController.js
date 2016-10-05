(function(){
	'use strict';

	function RantsController(RantFactory, $filter, $state){
		var vm = this;
		vm.getRants = getRants;
		vm.createRant = createRant;
		vm.updateRant = updateRant;

		//instantiation
		activate();

		//methods
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
			console.log('modding a rant');
			return RantFactory.updateRant(vm.newRant)
				.then(getRants)
		}

		function setRants(data){
			return vm.rants = data;
		}
	}

	angular
		.module('app')
		.controller('RantsController', RantsController)
}());