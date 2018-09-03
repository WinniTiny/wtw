/*
 * Google API Key
 * 
 * 
 */

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: - 37.876857, lng: 145.044230 },
        zoom: 12
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('txtStart').addEventListener('change', onChangeHandler);
    document.getElementById('txtEnd').addEventListener('change', onChangeHandler);
    
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    if (document.getElementById('txtStart').value &&  document.getElementById('txtEnd').value) {
        directionsService.route({
            origin: document.getElementById('txtStart').value,
            destination: document.getElementById('txtEnd').value,

            //travelMode: 'DRIVING',
            travelMode: 'WALKING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
}