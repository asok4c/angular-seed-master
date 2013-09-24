'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData){
         $scope.sortorder='name';
       /*we can make it name, level as we are using this at session level we can use
        anything at that scope we can make upVoteCount*/


             //  Interesting fact is that the event is binded to a promise returned from eventData
             // which binds in view is ok, but if we try to access $scope.event.name , we cannot since
             // it is a promise a possible recommendation is to send the model from view if it is
             // available in view.
             $scope.event =  eventData.getEvent() ;
             console.log($scope.event);   // see in console this is a promise

            $scope.event.then(function(event){
                           console.log(event);    // in console this would be a plain object.
            }, function(status)  {
                         console.log(status);
            } );

        $scope.upVoteSession = function(session){
               session.upVoteCount++ ;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount-- ;
        }

    }
);

