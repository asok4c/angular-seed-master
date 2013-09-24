/**
 * Created with JetBrains WebStorm.
 * User: Ashok
 * Date: 9/22/13
 * Time: 5:08 PM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.factory('eventData',function($http, $log){
      return {

          getEvent: function(successcb){

                   $http({method:'GET', url:'data/event/1.json'}).
                  success(function(data, status, headers, config)
                  {
                     //  successcb(data) ;
                  }).error(function(data, status, headers, config){
                      $log.warn(data, status, headers, config);
                  })
          }

      }

})   ;
