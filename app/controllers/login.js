/**
 * Created by Prasanth on 3/28/2016.
 */

app.controller('loginController', ['$scope', '$location','$http','sharedServices','$cookies',function ($scope, $location,$http,sharedServices,$cookies){
    $scope.title = "Login";
    $scope.login = true;
    $scope.form = true;

    $scope.register = function (user) {
        var data = {
            "user": {
                "name": user.name,
                "phone": "+91" + user.phone,
                "email": user.email,
                "password": user.password,
                "address":user.address

            }
        }

    $http({
        method: 'POST',
        url: 'https://elancuryy.herokuapp.com/api/user/signup',
        headers: {'Content-Type': 'application/json'},
        data: data
    }).then(function successCallback(response) {
        if (response.data) {
            sharedServices.set(response.data);
            $cookies.put('access', response.data.user.accessToken);
            $cookies.put('id', response.data.user._id);
            $cookies.put('address', response.data.user.address);
            $cookies.put('phone', response.data.user.phone);
            $cookies.put('name', response.data.user.name);
            $cookies.put('email', response.data.user.email);
            $location.path('/home');
        }
        console.log(response);
    }, function errorCallback(response) {
        if (response) {
            $scope.message = response.data;
        }
    });
    };
    $scope.login = function (user) {
        var data = {
                "phone": "+91" + user.phone,
                "password": user.password


        }

        $http({
            method: 'POST',
            url: 'https://elancuryy.herokuapp.com/api/user/login',
            headers: {'Content-Type': 'application/json'},
            data: data
        }).then(function successCallback(response) {
            if (response.data) {
                sharedServices.set(response.data);
                $cookies.put('access', response.data.user.accessToken);
                $cookies.put('id', response.data.user._id);
                $cookies.put('address', response.data.user.address);
                $cookies.put('phone', response.data.user.phone);
                $cookies.put('name', response.data.user.name);
                $cookies.put('email', response.data.user.email);
                $location.path('/home');
            }
            console.log(response);
        }, function errorCallback(response) {
            if (response) {
                $scope.message = response.data;
            }
        });
    };
    $scope.forgotpass = function (user) {
        var data = {
            "email": user.email
        }

        $http({
            method: 'GET',
            url: 'https://elancuryy.herokuapp.com/api/user/forgotpassword/:email',
            headers: {'Content-Type': 'application/json'},
            data: data
        }).then(function successCallback(response) {
            if (response.data) {
                sharedServices.set(response.data);
                $location.path('/login');
            }
            console.log(response);
        }, function errorCallback(response) {
            if (response) {
                $scope.message = response.data;
            }
        });
    };



    $scope.switch = function () {
        if($scope.login == true){
            $scope.login = false
        } else {
            $scope.login = true;
        }
    }
    
    $scope.forgot = function (value) {
        if(value == true){
            $scope.login = true;
            $scope.form = false;
        } else {
            $scope.login = true;
            $scope.form = true;
        }
    }

   /* $scope.login = function(user){
        $location.path('/home');
    }

    $scope.register = function (user) {
        $location.path('/home');
    }

    $scope.forgotpass = function(user){
        $location.path('/home');
    }*/

}])