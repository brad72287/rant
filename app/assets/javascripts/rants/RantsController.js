(function(){
	'use strict';

	function RantsController(RantFactory, $filter, $state, rantShow){
		var vm = this;

		vm.data = rantShow.data;
		vm.counter = 0;	

		vm.getRants = getRants;
		vm.createRant = createRant;
		vm.updateRant = updateRant;
		vm.plusOne = plusOne;
		vm.minusOne = minusOne;

		//instantiation
		activate();

		function plusOne(rant){
			rant.score++;
			RantFactory.updateRant(rant);
		}

		function minusOne(rant){
			if (rant.score>0){
				rant.score--;
				RantFactory.updateRant(rant);
			} else {
				alert("No downvoting below zero.");
			}
			
		}

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