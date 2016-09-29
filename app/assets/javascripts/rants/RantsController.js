(function(){
	'use strict';

	function RantsController(RantFactory, $filter){
		var vm = this;
		vm.name = 'notbrad';
		vm.getRants = getRants;
		vm.createRant = createRant;
		vm.updateRant = updateRant;
		vm.deleteRant = deleteRant;

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
			return RantFactory.createRant(vm.newRant)
				.then(getRants)
		}

		function updateRant(){
			console.log('patching a rant');
			return RantFactory.updateRant(vm.newRant)
				.then(getRants)
		}

		function deleteRant(){
			
		}

		function setRants(data){
			return vm.rants = data;
		}
	}

	angular
		.module('app')
		.controller('RantsController', RantsController)
}());