(function () {
	'use strict';

angular.module('addPlusMe', []).controller('addPlusMeController', addPlusMeController);

addPlusMeController.$inject = ['$scope'];

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


	$scope.statusChangeCallback = function(response) {
	 	console.log('statusChangeCallback');
	    console.log(response);
	    if (response.status === 'connected') {
	      testAPI();

	    } else if (response.status === 'not_authorized') {
	      FB.login(function(response) {
	        statusChangeCallback2(response);
	      }, {scope: 'public_profile,email'});

	    } else {
	      alert("not connected, not logged into facebook, we don't know");
	    }
	}


	$scope.statusChangeCallback2 = function(response) {
	    console.log('statusChangeCallback2');
	    console.log(response);
	    if (response.status === 'connected') {
	      testAPI();

	    } else if (response.status === 'not_authorized') {
	      console.log('still not authorized!');

	    } else {
	      alert("not connected, not logged into facebook, we don't know");
	    }
	}

	$scope.checkLoginState = function() {
	    FB.getLoginStatus(function(response) {
	      statusChangeCallback(response);
	    });
	}

	$scope.testAPI = function(){
		console.log('Welcome!  Fetching your information.... ');
	    FB.api('/me', function(response) {
    		alert('Tungjat ' + response.name)
	      	console.log('Successful login for: ' + response.name);
	      	document.getElementById('status').innerHTML =
	        'Thanks for logging in, ' + response.name + '!';
	    });
	}

	$scope.onButtonClick = function() {
		// Add this to a button's onclick handler
		FB.AppEvents.logEvent("sentFriendRequest");
		console.log("Event logged");
	}
	}

})();