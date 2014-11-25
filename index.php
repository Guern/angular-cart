<?php
    // PHP header
    // require_once('');

    $page_title = 'Home';

?>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        <title>AngularCart | <?php if( isset( $page_title ) ) { echo $page_title; } ?></title>
        <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/styles.css" rel="stylesheet" type="text/css" />
        <script src="node_modules/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="node_modules/angular/angular.min.js" type="text/javascript"></script>
        <script src="assets/js/app.js" type="text/javascript"></script>
    </head>
    <body ng-app="cartApp">
        <div class="container" ng-controller="cartController">
            
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Angular Cart Demo</a>
                  </div>
                  <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                      <li class="active"><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">View Cart ({{ cart.length }}) <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li ng-repeat="item in cart track by $index"><a ng-click="remove(item)" class="change-pointer">{{ item.name }}  <span class="glyphicon glyphicon-remove"></span></a></li>
                            <li ng-repeat-end><a ng-click="checkout()" class="change-pointer">Check out <span class="glyphicon glyphicon-ok"></span></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div><!-- End nav.nav-collapse -->
                </div><!-- End div.container-fluid -->
              </nav>
            
            
            <div class="row">
                
                <div class="col-xs-4">
                    
                    <!-- Begin sidebar -->
                    <div class="sidebar-container">
                        
                        <div class="sidebar-widget">
                            <h4>About</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>

                        <div class="sidebar-widget">
                            <h4>Categories</h4>
                            
                            <ul class="category-list">
                                <li ng-repeat="category in categories"><a href="#">{{ category }}</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div><!-- div.col-xs-4 -->
                
                <div class="col-xs-8">
                    
                    <h3>Product Listing</h3>
                    
                    <div class="product" ng-repeat="product in products">
                        <h4>{{ product.name }}</h4>
                        <p>{{ product.desc }}</p>
                        <p>You can have this glorius widget for the low, low price of <mark>only ${{ product.price }}!</mark></p>
                        <button class="btn btn-primary" ng-click="open(product.id)" data-toggle="modal" data-target="#theModal">Buy <span class="glyphicon glyphicon-shopping-cart"></span></button>
                    </div>
                    
                </div><!-- div.col-xs-8 -->
                
            </div><!-- div.row -->
            
            <div class="modal fade" id="theModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title" id="myModalLabel">Add to Cart</h4>
                        </div>
                        <div class="modal-body">
                            <p>{{ modalBody }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel <span class="glyphicon glyphicon-remove-sign"></span></button>
                            <button type="button" class="btn btn-success" data-dismiss="modal" ng-click="add(modalId)">Add to Cart <span class="glyphicon glyphicon-ok-sign"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- div.container -->
        
    </body>
</html>