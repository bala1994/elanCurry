/**
 * Created by Prasanth on 3/29/2016.
 */

app.controller('orderController', ['$scope','$location','ngCart','$http' ,function ($scope, $location,ngCart,$http) {
    $scope.title = "Elan Curry";
    $http.get('items.json').success(function(data) {
        $scope.items = data;
    });

}]);