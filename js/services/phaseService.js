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
