function bookController($scope) {
	
	$scope.books = [{checked: true, ISBN: "978-2-10-059487-0", name: "Ergonomie des interfaces", editor: "Dunod"},
					{checked: false, ISBN: "2-7460-2148-X", name: "Windows server 2003", editor: "ENI"},
					{checked: false, ISBN: "2-7440-2119-9", name: "Eclipse", editor: "Campus Press"},
					{checked: false, ISBN: "978-2-7460-4695-5", name: "Flash CS4", editor: "ENI"},
					{checked: false, ISBN: "2-7429-1962-7", name: "Le langage C++", editor: "Micro App"}
				   ];
				   
	$scope.adding = false;
	$scope.modifying = false;
	
	$scope.buttonDisabled = function() {
		var count = 0;
		$scope.books.forEach(function(elt) {
			if ( elt.checked )count++;
		});
		return (count == 1) ? "disabled" : "";
	}
	
	$scope.addBook = function(){
		if ( $scope.isbnToAdd != "" && $scope.nameToAdd != "" && $scope.editorToAdd != "") {
			$scope.books.push({ISBN: $scope.isbnToAdd, name: $scope.nameToAdd, editor: $scope.editorToAdd});
		}
	}
	
	$scope.modifyBook = function() {
		var book = $scope.getBookById($scope.isbnToModifying);
		book.name = $scope.nameToModifying;
		book.editor = $scope.editorToModifying;
	}
	
	$scope.removeBook = function() {
		if ( $scope.justOne() ) {
			var book = $scope.getSelectedBook();
			$scope.books.splice($scope.books.indexOf(book), 1);
		}
	}
	
	$scope.activateModifying = function() {
		if ( $scope.justOne() ) {
			var selected = $scope.getSelectedBook($scope.books);
			if ( selected != null ) {
				$scope.adding = false;
				$scope.modifying = true;
				$scope.isbnToModifying = selected.ISBN;
				$scope.nameToModifying = selected.name;
				$scope.editorToModifying = selected.editor;
			}
		}	
	}
	$scope.getSelectedBook = function() {
		var selected = null;
		angular.forEach($scope.books, function(elt){
			if ( elt.checked )
				selected = elt;
		});
		return selected;
	}
	$scope.getBookById = function(ISBN) {
		var book = null;
		angular.forEach($scope.books, function(elt){
			if ( elt.ISBN == ISBN )
				book = elt;
		});
		return book;
	}
	$scope.justOne = function() {
		var count = 0;
		angular.forEach($scope.books, function(elt){
			if ( elt.checked)
				count++;
		});
		return count == 1;
	}
	
}