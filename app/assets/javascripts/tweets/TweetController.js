(function(){
	'use strict';

	function TweetsController(){
		var vm = this;
		vm.name = 'brad';
		vm.getTweets = getTweets;
		vm.createTweet = createTweet;
		vm.updateTweet = updateTweet;
		vm.deleteTweet = deleteTweet;

		//instantiation
		activate();

		//methods
		function activate(){
			getTweets();
		}

		function getTweets(){

		}

		function createTweet(){

		}

		function updateTweet(){

		}

		function deleteTweet(){
			
		}
	}

	angular
		.module('app')
		.controller('TweetsController', TweetsController)
}());