/**
 * Created with JetBrains WebStorm.
 * User: Ashok
 * Date: 9/22/13
 * Time: 5:43 PM
 * To change this template use File | Settings | File Templates.
 */


eventsApp.controller('EditProfileController',
    function EditProfileController($scope,gravatarUrlBuilder){

        $scope.user = {}  ;

        $scope.getGravatarUrl = function(email){

            return gravatarUrlBuilder.buildGravatarUrl(email);
        }


    });

