'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData){
         $scope.sortorder='name';
       /*we can make it name, level as we are using this at session level we can use
        anything at that scope we can make upVoteCount*/
         eventData.getEvent(function(event){
             $scope.event =  event ;
        }) ;

        $scope.upVoteSession = function(session){
               session.upVoteCount++ ;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount-- ;
        }

    }
);

