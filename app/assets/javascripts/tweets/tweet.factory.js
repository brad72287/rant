(function(){

	'use strict';

	function TweetFactory($http){
		return {
			getTweets: getTweets,
			getTweet: getTweet,
			createTweet: createTweet,
			updateTweet: updateTweet,
			deleteTweet: deleteTweet,
		}

		function getTweets(){
			return $http.get('/tweets')
				.then(handleResponse)
				.catch(handleError)

		}

		function getTweet(){
			
		}

		function createTweet(){
			
		}

		function updateTweet(){
			
		}

		function deleteTweet(){
			
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
		.factory('TweetFactory', TweetFactory)

}());