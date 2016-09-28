(function(){
	'use strict';

	function ShowController(rantShow){
		this.data = rantShow.data;
	}

	angular
		.module('app')
		.controller('ShowController', ShowController)
}());