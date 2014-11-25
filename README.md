ANGULAR CART
By Jonathon Pemberton

CONTENTS

1. Project Details
  1-1. Description
  1-2. Planned Features
2. Functions
  2-1. Declarations
3. Examples
4. License

1. PROJECT DETAILS

  1-1. DESCRIPTION
  
  Angular Cart is intended to be a full-featured shopping cart for e-commerce sites written entirely in AngularJS
  with no need for a back-end. Currently, I am using PHP to do just a few small behind-the-scenes things, such as
  displaying the page title. These behind-the-scenes activities are trivial, and will soon be replaced by pure
  Angular.
  
  1-2. PLANNED FEATURES
  
  The front-end is almost entirely functional, with the only caveat being that there is no user login service.
  The current plan is to implement one using an Angular service with a save and restore state.
  
  The check-out page is still waiting for implementation, but it should be easy to do so with JSON.
  The user's cart can simply be parsed to JSON once they click the check-out button, then reloaded
  once the page is finished loading.
  
  The cart is functionally very simple. Future plans involve the addition of a check in the "add to cart"
  handler that checks to see if the product is already present. If it is, it will increment a counter inside
  the product's object in the cart array. This will simplify the view.
  
2. FUNCTIONS

  2-1. DECLARATIONS
  
  Controller: 'cartController'
  
    $scope.open( which )
    
      Parameters:
    
      which - Item details to display on the modal.
    
      Description:
      
      Handles the view of the modal that displays when the user clicks the "Buy" button.
      
      Currently, this function uses a switch to display a different modal view for each product.
      Clicking on the "Add to Cart" button closes the modal and adds the product to the cart.
      Any other button closes the modal.
      
    $scope.add( productId )
      
      Parameters:
      
      productId - The index of the product from the product array to add to the cart.
      
      Description:
      
      Adds an item to the user's cart via an array push.
      
    $scope.remove( which )
      
      Parameters:
      
      which - Item to remove.
      
      Description:
      
      Removes an item from the cart via an array splice.
      
  3. EXAMPLES
  
  The project is currently in its earliest stages. No extensibility is currently available.
  
  In the future, this section will contain examples of code you can use on your website to implement the cart
  on your website.
  
  However, if you want to use the view and controllers as is, you can simply copy and paste the code.
  
  4. LICENSE
  
  /*
   * AngularCart
   * Written by Jonathon Pemberton
   *
   * All code is GNU Public License v3, located at http://www.gnu.org/copyleft/gpl.html
   *
   * You are free to distribute the software so long as this copywrite notice remains.
   *
  */