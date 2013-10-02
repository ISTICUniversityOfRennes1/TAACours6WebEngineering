function bookController($scope) {
	
	$scope.books = [{checked: true, ISBN: "978-2-10-059487-0", name: "Ergonomie des interfaces", editor: "Dunod"},
					{checked: false, ISBN: "2-7460-2148-X", name: "Windows server 2003", editor: "ENI"},
					{checked: false, ISBN: "2-7440-2119-9", name: "Eclipse", editor: "Campus Press"},
					{checked: false, ISBN: "978-2-7460-4695-5", name: "Flash CS4", editor: "ENI"},
					{checked: false, ISBN: "2-7429-1962-7", name: "Le langage C++", editor: "Micro App"}
				   ];
				   
	$scope.adding = false;
	
	$scope.addBook = function(){
		if ( $scope.isbnToAdd != "" && $scope.nameToAdd != "" && $scope.editorToAdd != "") {
			$scope.books.push({ISBN: $scope.isbnToAdd, name: $scope.nameToAdd, editor: $scope.editorToAdd});
		}
	}
	
}