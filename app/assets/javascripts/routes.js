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
				.state('home.index',{
					url: 'rants',
					templateUrl: 'rants/index.html',
					controller: 'RantsController as vm'
				})
				.state('home.show', {
					url: 'rant/:id',
					templateUrl: 'rants/show.html',
					controller: 'ShowController as vm',
					resolve: {
						rantShow: function ($http, $stateParams) {
							console.log("you are in the rant show route...");
							return $http.get('rants/' + $stateParams.id);
						}
					}
			});
			$urlRouterProvider.otherwise('/');
		})


}());