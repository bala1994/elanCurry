    app.controller('headerController', ['$scope','$location', function ($scope, $location) {
    $scope.title = "Elan Curry"

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };


}])

/**
 * Created by Prasanth on 3/28/2016.
 */
