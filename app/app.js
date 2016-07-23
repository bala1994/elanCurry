'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('elancurry', ['ngRoute','ngCart','ngCookies']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/home',
      {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })        
      .when('/login',
      {
          templateUrl: 'views/login.html',
          controller: 'loginController'
      })
      .when('/gallery',
      {
          templateUrl: 'views/gallery.html',
          controller: 'galleryController'
      })
      .when('/menu',
      {
          templateUrl: 'views/menu.html',
          controller: 'menuController'
      })
      .when('/order',
      {
          templateUrl: 'views/order.html',
          controller: 'orderController'
      })
      .when('/invoice',
      {
          templateUrl: 'views/invoice.html',
          controller: 'invoiceController'
      })
      .when('/profile',
      {
          templateUrl: 'views/profile.html',
          controller: 'profileController'
      }).
    when('/store', {
        templateUrl: 'views/store.htm',
        controller: storeController
    }).
    when('/products/:productSku', {
        templateUrl: 'views/product.htm',
        controller: storeController
    }).
    when('/cart', {
        templateUrl: 'views/shoppingCart.htm',
        controller: storeController
    })
        .otherwise({redirectTo: '/home'});
}]);

app.run(function($rootScope, $location) {
    $rootScope.location = $location;
})

app.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the
    // shopping cart with PayPal, you have to create a merchant account with
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "bernardo.castilho-facilitator@gmail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the
    // shopping cart with Google Wallet, you have to create a merchant account with
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "500640663394527",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});