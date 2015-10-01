app.service('phaseService', function($http, $q, moonService){

	this.getPhase = function(date) {

		var url = 'http://api.burningsoul.in/moon/' + date;
		
		var promise = $http.get(url)
		  .then(function(response) {
		    	console.log(response);
		    	var moonData = response.data;
		    	for (var i = 0; i < moonService.moonPictures.length; i++) {
		    		if (Math.round(moonData.age) === moonService.moonPictures[i].day) {
		    			moonData.picture = moonService.moonPictures[i].url; 
		    		}
				}
				shortTime(moonData);
				return moonData;
		  }, function(error) {
		    	console.log(error);
		  });
		  return promise;
	};

	var shortTime = function(obj) {
		obj.NNM.DT = obj.NNM.DT.slice(9); 
		obj.FM.DT = obj.FM.DT.slice(9);
	};

});

// var handleResponse = function(webResponse) {
	// 	return webResponse.data;
	// };

	// this.getPhase = function(date) {

	// 	var url = 'http://api.burningsoul.in/moon/' + date;
	// 	var deferred = $q.defer();
		
	// 	$http.get(url)
	// 	  .then(function(response) {
	// 	    	console.log(response);
	// 	    	var moonData = response.data;
	// 	    	for (var i = 0; i < moonPictures.length; i++) {
	// 	    		if (Math.round(moonData.age) === moonPictures[i].day) {
	// 	    			moonData.picture = moonPictures[i].url; 
	// 	    		}
	// 			}
	// 			deferred.resolve(moonData);
	// 			console.log(moonData);
	// 	  }, function(error) {
	// 	    	console.log(error);
	// 	  });
	// 	  return deferred.promise;
	// };

// #################################################
	// this.getPhase = function(date) {

	// 	var url = 'http://api.burningsoul.in/moon/' + date;
		
	// 	return $http.get(url)
	// 	  .then(function(response) {
	// 	    	console.log(response);
	// 	    	var moonData = response.data;
	// 	    	for (var i = 0; i < moonPictures.length; i++) {
	// 	    		if (Math.round(moonData.age) === moonPictures[i].day) {
	// 	    			moonData.picture = moonPictures[i].url; 
	// 	    		}
	// 			}
	// 			return moonData;
	// 	  }, function(error) {
	// 	    	console.log(error);
	// 	  });
	// };
// ###################################################