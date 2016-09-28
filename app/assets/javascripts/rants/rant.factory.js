(function(){

	'use strict';

	function RantFactory($http){
		return {
			getRants: getRants,
			getRant: getRant,
			createRant: createRant,
			updateRant: updateRant,
			deleteRant: deleteRant,
		}

		function getRants(){
			return $http.get('/rants')
				.then(handleResponse)
				.catch(handleError)

		}

		function getRant(){
			
		}

		function createRant(rant){
			var req = {
				method: 'POST',
				url: '/rants',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					rant: rant 
				}
			};
			return $http(req)
				.catch(handleError);
		}

		function updateRant(){
			
		}

		function deleteRant(){
			
		}

		function handleResponse(response){
			console.log();
			return response.data
		}

		function handleError(error){
			console.log(error);
		}

	}

	angular
		.module('app')
		.factory('RantFactory', RantFactory)

}());