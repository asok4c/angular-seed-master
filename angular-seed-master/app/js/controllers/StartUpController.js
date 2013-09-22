/**
 * Created with JetBrains WebStorm.
 * User: Ashok
 * Date: 9/13/13
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.controller('StartUpController',
function StartUpController($scope) {

    $scope.startingEstimate = 0;
    $scope.needed = 0;

    $scope.computeNeeded = function() {
        $scope.needed = $scope.startingEstimate * 10;
    };

    $scope.requestFunding = function() {
        window.alert("Sorry, please get more customers first.");
    };



    $scope.reset = function(){
        $scope.startingEstimate = 0 ;
    };

    $scope.$watch('startingEstimate', $scope.computeNeeded);

}     );