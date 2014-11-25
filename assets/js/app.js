var cartApp = angular.module('cartApp',[]);

cartApp.controller('cartController', ['$scope', function($scope) {
    // Create category variables.
    $scope.categories = [
        // Out of order to demonstrate ng-sort
        "Books", "Electronics", "Furniture", "Widgets",
        "Baby", "Cookware", "Jewelry", "Movies",
        
    ]; //End categories
    
    // Create variables to make the descriptions more readable.
    
    // Widget #1 Description
    $scope.widget1 = "This widget is the most affordable, with features that Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.";
    
    // Widget #2 Description
    $scope.widget2 = "This widget is the most expensive, with an extended set of features. Like Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.";
    
    // Widget #3 Description
    $scope.widget3 = "The most balanced of all the widgets, the Widget #3 is Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.";
    
    
    // Insert product data into array
    $scope.products = [
        {   "name" : "Widget #1", "desc" : $scope.widget1, "price" : 29.95, "id" : "1",  },
        {   "name" : "Widget #2", "desc" : $scope.widget2, "price" : 99.95, "id" : "2",  },
        {   "name" : "Widget #3", "desc" : $scope.widget3, "price" : 49.95, "id" : "3",  },
    ];
    
    // Create an empty array for the cart
    $scope.cart = [];
    
    // Open the modal with relevant product data
    $scope.modalBody = "Test";
    $scope.modalId = null;
    
    $scope.open = function( which ) {
        
        switch(which) {
            
            case '1':
                $scope.modalBody = "Add " + $scope.products[0].name + " to cart?";
                $scope.modalId = 0;
                break; // Break case 1
            
            case '2':
                $scope.modalBody = "Add " + $scope.products[1].name + " to cart?";
                $scope.modalId = 1;
                break; // Break case 2
            
            case '3':
                $scope.modalBody = "Add " + $scope.products[2].name + " to cart?";
                $scope.modalId = 2;
                break; // Break case 3
            
            } // End switch
        
        } // End function open
    
    $scope.add = function( productId ) {
        
        $scope.cart.push( $scope.products[productId] );
        
    }
    
    $scope.remove = function( which ) {
        
        var index = $scope.cart.indexOf( which );
        $scope.cart.splice( index, 1 );
        
    }
    
}]); // End cartController