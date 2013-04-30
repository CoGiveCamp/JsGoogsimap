
/* main function to load google map */
function initialize() {

    // center map to lat/long on load
    var myLatlng = new google.maps.LatLng(40.019444, -105.292778);

    // set map options
    var mapOptions = {

           zoom: 14,
           center: myLatlng,
           mapTypeId: google.maps.MapTypeId.ROADMAP

    }

    // get connect div to google map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // create global info window
    var infoWindow = new google.maps.InfoWindow();

    // add locations array
    var locations =  [
    
        // add your locations here manually or from database (content of infowindow, lat, long)
        ['Microsoft', -105.275586, 40.017721],
        ['Google', -105.260998, 40.021659],
        ['Gabe Villa<br/><img src="http://photos4.meetupstatic.com/photos/member/8/a/6/9/member_8615433.jpeg" width="40"/>',-105.266686, 40.017721]

    ];

    // declare and cache marker and i
    var marker, i;

    // create markers
    for (i = 0; i < locations.length; i++) {

        // set title and content
        var title = locations[i][0],
          content = "Hello there " + title;

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

// run initialize on load
google.maps.event.addDomListener(window, 'load', initialize);

