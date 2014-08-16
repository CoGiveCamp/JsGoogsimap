
/* main function to load google map */
function initialize(centerLong, centerLat, locations) {

    // center map to lat/long on load
    var myLatlng = new google.maps.LatLng(centerLat, centerLong);

    // set map options
    var mapOptions = {

           zoom: 13,
           center: myLatlng,
           mapTypeId: google.maps.MapTypeId.ROADMAP

    }

    // get connect div to google map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // create global info window
    var infoWindow = new google.maps.InfoWindow();

    // declare and cache marker and i
    var marker, i;

    // create markers
    for (i = 0; i < locations.length; i++) {

        // set title and content
        var title = locations[i][0],
          content = title;

        // create markers
        marker = new google.maps.Marker({
            
            position: new google.maps.LatLng(locations[i][2], locations[i][1]),
            title: title,
            map: map,
            icon: 'myicon.png'
        
        });

        // create info window for each marker passing title/content
        setInfoWindow(map, marker, title, content);
  
    }

    //set info window
    function setInfoWindow(map, marker, title, content) {
        
        //add listener for marker click to show info window
        google.maps.event.addListener(marker, 'click', function () {

            infoWindow.setContent(content);
            infoWindow.open(map, marker);
  
        });

    }

}


