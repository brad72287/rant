(function(){
	'use strict';

	function TweetsController(TweetFactory){
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
			return TweetFactory.getTweets()
				.then(setTweets)
		}

		function createTweet(){
			console.log('creating a tweet');
			return TweetFactory.createTweet(vm.newTweet)
				.then(getTweets)
		}

		function updateTweet(){

		}

		function deleteTweet(){
			
		}

		function setTweets(data){
			return vm.tweets = data;
		}
	}

	angular
		.module('app')
		.controller('TweetsController', TweetsController)
}());