'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
         $scope.sortorder='name';
       /*we can make it name, level as we are using this at session level we can use
        anything at that scope we can make upVoteCount*/
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1359781015626',
            time: '12:12 AM',
            location: {
                address :  'CMI Wal-mart',
                city:  'Bentonville',
                state: 'AR'
            },
            imageUrl: 'img/logo.jpg',
            sessions:[
                {
                    name: 'Directives MasterClass',
                    creatorName : 'Bob Smith',
                    duration: 1,
                    level:  'introduction',
                    abstract: 'Ins and Outs of directives',
                    upVoteCount:0
                } ,
                {
                    name: 'scopes for fun and profit',
                    creatorName : 'Sukesh Dommaraju',
                    duration: 2,
                    level:  'intermediate',
                    abstract: 'Scopes are fun and Clojure is shit',
                    upVoteCount:0
                } ,
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Will Smith',
                    duration: 3,
                    level:   'advanced',
                    abstract: 'TBD',
                    upVoteCount:0
                }
            ]
        }

        $scope.upVoteSession = function(session){
               session.upVoteCount++ ;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount-- ;
        }

    }
);

