app.controller("signCtrl", function($scope, signService) {

	$scope.mySign = signService.mySign;

	looper = function(string) {
		for (var i = 0; i < $scope.mySign.length; i++) {
			if (string === $scope.mySign[i].range) {
				show($scope.mySign[i])
				console.log($scope.mySign[i])
				$scope.yourSign = $scope.mySign[i]
			}	
		}
	}
	
	$scope.getSign = function() {
	var shortBirthday = $scope.yourBirthday.toString(); 
	var month = shortBirthday.slice(4, 7);
	var day = shortBirthday.slice(8, 10);
		  if (month === "Jan" && day >= "20") {
			alert("You are an Aquarius!")
			var range = "January 20 - February 18"
			looper("January 20 - February 18");

		} if (month === "Feb" && day <= "18") {
			alert("You are an Aquarius!");
			var range = "January 20 - February 18"
			looper("January 20 - February 18");

		} if (month === "Feb" && day >= "19") {
			alert("You are a Pisces!");
			var range = "February 19 - March 20"
			looper("February 19 - March 20");

		} if (month === "Mar" && day <= "20") {
			alert("You are a Pisces!");
			var range = "February 19 - March 20"
			looper("February 19 - March 20");

		} if (month === "Mar" && day >= "21") {
			alert("You are an Aries!");
			var range = "March 21 - April 19"
			looper("March 21 - April 19");

		} if (month === "Apr" && day <= "19") {
			alert("You are an Aries!" );
			var range = "March 21 - April 19"
			looper("March 21 - April 19");

		} if (month === "Apr" && day >= "20") {
			alert("You are a Taurus!" );
			var range = "April 20 - May 20"
			looper("April 20 - May 20");

		} if (month === "May" && day <= "20") {
			alert("You are a Taurus!" );
			var range = "April 20 - May 20"
			looper("April 20 - May 20");

		} if (month === "May" && day >= "21") {
			alert("You are a Gemini!");
			var range = "May 21 - June 20"
			looper("May 21 - June 20");

		} if (month === "Jun" && day <= "20") {
			alert("You are a Gemini!");
			var range = "May 21 - June 20"
			looper("May 21 - June 20");

		} if (month === "Jun" && day >= "21") {
			alert("You are a Cancer!");
			var range = "June 21 - July 22"
			looper("June 21 - July 22");

		} if (month === "Jul" && day <= "22") {
			alert("You are a Cancer!");
			var range = "June 21 - July 22"
			looper("June 21 - July 22");

		} if (month === "Jul" && day >= "23") {
			alert("You are a Leo!");
			var range = "July 23 - August 22"
			looper("July 23 - August 22");

		} if (month === "Aug" && day <= "22") {
			alert("You are a Leo!");
			var range = "July 23 - August 22"
			looper("July 23 - August 22");

		} if (month === "Aug" && day >= "23") {
			alert("You are a Virgo!");
			var range = "August 23 - September 22"
			looper("August 23 - September 22");

		} if (month === "Sep" && day <= "22") {
			alert("You are a Virgo!");
			var range = "August 23 - September 22"
			looper("August 23 - September 22");

		} if (month === "Sep" && day >= "23") {
			alert("You are a Libra!");
			var range = "September 23 - October 22"
			looper("September 23 - October 22");

		} if (month === "Oct" && day <= "22") {
			alert("You are an Libra!");
			var range = "September 23 - October 22"
			looper("September 23 - October 22");

		} if (month === "Oct" && day >= "23") {
			alert("You are a Scorpio!");
			var range = "October 23 - November 21"
			looper("October 23 - November 21");

		} if (month === "Nov" && day <= "21") {
			alert("You are a Scorpio!");
			var range = "October 23 - November 21"
			looper("October 23 - November 21");

		} if (month === "Nov" && day >= "22") {
			alert("You are a Sagittarius!")
			var range = "November 22 - December 21"
			looper("November 22 - December 21");

		} if (month === "Dec" && day <= "21") {
			alert("You are a Sagittarius!")
			var range = "November 22 - December 21"
			looper("November 22 - December 21");

		} if (month === "Dec" && day >= "22") {
			alert("You are a Capricorn!" )
			var range = "December 22 - January 19"
			looper("December 22 - January 19");

		} if (month === "Jan" && day <= "19") {
			alert("You are a Capricorn!" )
			var range = "December 22 - January 19"
			looper("December 22 - January 19");
		}	
	}

	var show = function(value) {
		if (value) {
			$scope.value = true; 
		} else {
			$scope.value = false; 
		}
	};

});
