(function () {
	'use strict';

angular.module('addPlusMe', []).controller('addPlusMeController', addPlusMeController);

LunchCheckController.$inject = ['$scope'];

function addPlusMeController($scope) {
	$scope.dishes = "";
	$scope.result = "";
	$scope.message= "";
	$scope.inpResult = "";

	$scope.check = function() {
		var dishesArr = $scope.dishes.split(',');
		var arrLength = dishesArr.length;
		var dishesNo = 0;

		// Loop through the dishes array
		for (var i = 0; i < arrLength; i++) {

			// count only if its not empty
			if(dishesArr[i].trim() != "") {
				dishesNo += 1;
			}
		}

		if(dishesNo == 0) {
			// Alert to add some dishes
			$scope.message = "Please enter data first";
			$scope.result = "text-danger";
			$scope.inpResult = "has-error";
			console.log("No countable dishes!");
			return;
		}

		if(dishesNo > 3) {
			$scope.message = "Too much!";
			$scope.result = "text-success";
			$scope.inpResult = "has-success";
		}
		else {
			$scope.message = "Enjoy!";
			$scope.result = "text-success";
			$scope.inpResult = "has-success";
		}
		console.log('Dishes Array Length: ' + arrLength);
		console.log('Total Countable Dishes: ' + dishesNo);

	};
}

})();