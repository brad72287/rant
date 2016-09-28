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
				.state('home.about',{
					url: 'about',
					templateUrl: 'about/about.html',
					controller: 'HomeController as vm'
				})
				.state('home.typer',{
					url: 'typer',
					templateUrl: 'typer/typer.html',
					controller: 'RantsController as vm'
				})
				.state('home.rants',{
					url: 'rants',
					templateUrl: 'rants/rants.html',
					controller: 'RantsController as vm'
				})
			$urlRouterProvider.otherwise('/');
		})


}());