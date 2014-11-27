var cartApp = angular.module('cartApp',[]);

// headController
// Controls views for the page header, including page title and meta information.
cartApp.controller('headController', ['$scope', function($scope){
    // Create array of page view titles.
    $scope.titles = [
        "Home", "About", "Contact", "Products",
        "Products >> Widget #1", "Products >> Widget #2",
        "Products >> Widget #3", "Products >> Widget #4",
    ];
    
    
}]); // End head controller

// cartController
// Controls views for the user's cart.
cartApp.controller('cartController', ['$scope', '$http', function($scope, $http) {
    // Create category variables.
    $scope.categories = [
        // Out of order to demonstrate ng-sort
        "Books", "Electronics", "Furniture", "Widgets",
        "Baby", "Cookware", "Jewelry", "Movies",
        
    ]; //End categories
    
    // Set up the 'GET' request:
    //      We want the method to be 'GET',
    //      and we want the product list JSON file.
    
    // In the future, I plan to include functionality to automatically detect the URL of this file,
    // but until then, it's necessary to set this manually :(
    var request = {
        method: 'GET',
        url: 'includes/products.json',
    }
    
    // Get products from JSON
    // Using $http
    $http(request).success(function(data, status, headers, config){
        // Success scope
        $scope.products = data;
        
        
    }).error(function(){
        // Error scope
        console.log("Failed");
        
        
    }); // End $http.get
    
    // Create an empty array for the cart
    $scope.cart = [];
    
    // Open the modal with relevant product data
    $scope.modalName;
    $scope.modalId;
    $scope.count;
    
    $scope.open = function( which ) {
        
        $scope.modalBody = $scope.products[which].name;
        $scope.modalId = which;
        
        
    } // End function open
    
    $scope.add = function( which, count ) {
        // Add an item to the cart.
        // First, figure out if the item is already present in the cart.
        // If it is, increment the count property of the object.
        // If it is not, add to the cart and initialize the count property.
        
        // productId is used to add the item to the cart.
        // It simply gets passed the modalId property from the switch function.
        var productId = which;
        var newProductId;
        
        // index is more complex, and is used to find the product in the cart.
        var index = $scope.cart.indexOf( $scope.products[which] );
        
        // number is a variable obtained from the form element associated with the modal.
        // We're going to use this to determine how many of something someone wants.
        var number;
        if( typeof parseInt(count, 10) === 'number' ) {
            // The count is a number, so we can use it.
            number = parseInt(count, 10);
        } else {
            // Somehow, we didn't get an integer value from the form.
            // So, we're just going to set this to 1.
            number = 1;
        }
        
        if( index != -1 ) {
            // Product exists in the cart, so simply find it and increment the count.
            $scope.cart[index]["count"] += number;
            
        } else {
            // Product does not exist in the cart, so add.
            $scope.cart.push( $scope.products[which] );
            newProductId = $scope.cart.indexOf( $scope.products[which] );
            $scope.cart[newProductId]["count"] = number;
        } // End if-else
        
    } // End $scope.add
    
    $scope.remove = function( which ) {
        // Remove an item from the cart.
        // Because the application controls what is added to the cart array and what isn't,
        // and because the user controls what listing is removed, we can simply remove
        // whatever the function is passed.
        var index = $scope.cart.indexOf( which );
        $scope.cart.splice( index, 1 );
        
    } // End $scope.remove
    
    $scope.checkOut = function( cart ) {
        // Check out with the cart.
        // We're passing the cart to the function, because we want to send
        // it with an $http 'POST' request.
        
        // First, check to make sure the cart isn't empty.
        if( cart.length > 0 ) {
            // Cart isn't empty, so send the request.
            $http(request).success(function(data, status, headers, config){
                // Success scope
                var request = {
                    method: 'POST',
                    url: 'checkout.html',
                    data: cart,
                }
                console.log("Success");


            }).error(function(){
                // Error scope
                console.log("Failed");


            }); // End $http.get
            
            
        } else {
            // Cart is empty, don't send the request.
            console.log("Failed");
            
        }
        
        
        
    } // End $scope.checkOut
    
}]); // End cartController