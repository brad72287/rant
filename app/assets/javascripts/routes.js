(function(){

	'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
				.state('home',{
					url: '/',
					templateUrl: 'home/home.html'
				})
				.state('home.about',{
					url: 'about',
					templateUrl: 'about/about.html'
				})
				.state('home.instructions',{
					url: 'instructions',
					templateUrl: 'instructions/instructions.html'
				})
				.state('home.typer',{
					url: 'typer',
					templateUrl: 'typer/typer.html',
					controller: 'RantsController as vm',
					resolve: {
						rantShow: function () {
							return {};
						}	
					}
				})
				.state('home.index',{
					url: 'rants',
					templateUrl: 'rants/index.html',
					controller: 'RantsController as vm',
					resolve: {
						rantShow: function () {
							return {};
						}
					}
				})
				.state('home.show', {
					url: 'rant/:id',
					templateUrl: 'rants/show.html',
					controller: 'RantsController as vm',
					resolve: {
						rantShow: function ($http, $stateParams) {
							return $http.get('rants/' + $stateParams.id);
						}
					}
			});
			$urlRouterProvider.otherwise('about');
		})

}());