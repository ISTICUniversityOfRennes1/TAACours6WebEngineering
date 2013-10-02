angular.module("bookApp", ['ngResource']).factory("book", function($http) {
		return {
			getAll: function(callback) { 
				//$http.get('http://kevin.ramage.free.fr/Sites/TAA/books.json').success(function(data) {  callback(data); }).
				$http.get('books.json').success(function(data) {  callback(data); }).
																error(function() { callback([]); });
			}
		}
});