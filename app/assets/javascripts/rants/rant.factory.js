(function(){

	'use strict';

	function RantFactory($http){
		return {
			getRants: getRants,
			createRant: createRant,
			updateRant: updateRant
		}

		function getRants(){
			return $http.get('/rants')
				.then(handleResponse)
				.catch(handleError)

		}

		function createRant(rant){
			console.log(rant);
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

		function updateRant(rant){
			console.log(rant);
			var req = {
				method: 'PATCH',
				url: '/rants/'+rant.id,
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

		function handleResponse(response){
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