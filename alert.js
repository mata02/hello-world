$(window).ready( function() {
                
    var alerts = [
        { 'type' : 'success', 'message' : 'Success alert' },
        { 'type' : 'info', 'message' : 'Info alert' },
        { 'type' : 'warning', 'message' : 'Warning alert' },
        { 'type' : 'danger', 'message' : 'Danger alert' }
    ];

    var update_msec = 3000;
                
    var createAlert = function( alert_type, message ) {
                
        var alert = document.createElement( 'div' );
        alert.setAttribute( 'id', 'alert_sample' );
        alert.setAttribute( 'class', 'alert alert-' + alert_type + ' alert-dismissable' );
                
        var button = document.createElement( 'button' );
        button.setAttribute( 'type', 'button' );
        button.setAttribute( 'class', 'close' );
        button.setAttribute( 'data-dismiss', 'alert' );
        button.setAttribute( 'aria-hidden', 'true' );
        button.appendChild( document.createTextNode( 'x' ) );
                
        alert.appendChild( button );
        alert.appendChild( document.createTextNode( message ) );
                
        return alert;
    };
            
    var hideAlert = function() {
        console.log( 'Hide alert' );
        $('#alert_sample').alert( 'close' );
        setTimeout( showAlert, update_msec );
    };
                
    var showAlert = function() {
        console.log( 'Show alert' );
        var alert = alerts[ Math.floor( Math.random() * alerts.length ) ];
        $('#alert_col').append( createAlert( alert.type, alert.message ) );
        setTimeout( hideAlert, update_msec );
    };
                
    showAlert();
} );
