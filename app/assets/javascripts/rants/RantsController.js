(function(){
	'use strict';

	function RantsController(RantFactory, $filter, $state, rantShow, $http){
		var vm = this;

		vm.data = rantShow.data;
		vm.counter = 0;	

		vm.getRants = getRants;
		vm.createRant = createRant;
		vm.updateRant = updateRant;
		vm.plusOne = plusOne;
		vm.minusOne = minusOne;
		vm.analyzeRant = analyzeRant;

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

		function analyzeRant(){
			console.log("analysis");
			var req = {
				method: 'POST',
				url: '/analyze',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					rant: vm.newRant 
				}
			};
			return $http(req)
				.then(function(data){
					vm.sentiment = data.data.sentiment;
					vm.sentimentScore = data.data.sentiment_score;
				})
			//return RantFactory.createRant(vm.newRant)
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