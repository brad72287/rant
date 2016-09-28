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
				.state('home.rant', {
					url: 'rant/:id',
					templateUrl: 'rants/rant.html',
					controller: 'RantsController as vm',
					resolve: {
						vm: function ($http, $stateParams) {
							console.log("you are in the rant show route...");
							console.log($stateParams.id);
							var bla = $http.get('rants/' + $stateParams.id)
							console.log(bla.data);
							return $http.get('rants/' + $stateParams.id);
						}
					}
			});
			$urlRouterProvider.otherwise('/');
		})


}());