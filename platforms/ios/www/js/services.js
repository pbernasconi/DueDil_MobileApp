angular.module('starter.services', [])

.factory('DueDilService', function ($http) {

  var apiKey = 'kmudq9cyzkmbakpg9992gjbj';

  return {
    search : function(companyName) {
      return $http({
        url: 'http://mobile-duedil.rhcloud.com/test.php?action=searchCompany&companyName=' + companyName,
        //url: 'http://api.duedil.com/open/search?q='+ companyName +'&api_key=' + apiKey,
        method: 'GET'
      })
    },

    detail : function(companyNumber) {
      return $http({
        url: 'http://mobile-duedil.rhcloud.com/test.php?action=getCompany&companyID=' + companyNumber,
        //url: 'http://api.duedil.com/open/uk/company/'+ companyNumber + '?api_key=' + apiKey,
        method: 'GET'
      })
    }
  }
});


