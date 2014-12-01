<?php
    
    $postdata = file_get_contents( 'php://input' );
    $request = json_decode( $postdata, true );
    
    $_POST = $request;
    
    var_dump( $_POST );
    
?>