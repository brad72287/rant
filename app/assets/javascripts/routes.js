(function(){

	'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
				.state('home',{
					url: '/',
					templateUrl: 'home/home.html',
					controller: 'HomeController as vm'
				})
				.state('home.tweets',{
					url: 'tweets',
					templateUrl: 'tweets/tweets.html',
					controller: 'TweetsController as vm'
				})
				.state('home.about',{
					url: 'about',
					templateUrl: 'about/about.html',
					controller: 'HomeController as vm'
				})
				.state('home.typer',{
					url: 'typer',
					templateUrl: 'typer/typer.html',
					controller: 'TweetsController as vm'
				})
			$urlRouterProvider.otherwise('/');
		})


}());