(function(){
	'use strict';

	function RantsController(RantFactory){
		var vm = this;
		vm.name = 'brad';
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