/**
 * Created with JetBrains WebStorm.
 * User: Ashok
 * Date: 9/22/13
 * Time: 2:39 AM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.controller('EditEventController',
    function EditEventController($scope){

        $scope.saveEvent = function(event){
              window.alert('event '+event.name+' saved') ;
        };

        $scope.cancelEdit = function(){
            window.location = "EventDetails.html";
        }

});
