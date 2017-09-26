//Initiate Google Map variable so it lives outside of initMap function
var map;

//Intiates the Google Map, run as a callback from the API key script
function initMap() {
    var usa = { lat: 42.87, lng: -97.38 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: usa
    });
}

//Runs when form submit is clicked
function addMarker() {
    //Initiate variables with form data
    var longitude = parseInt(document.getElementById("longitude").value);
    var latitude = parseInt(document.getElementById("latitude").value);
    var type = document.getElementById("type").value;
    var icon_url = "";

    //Set location using Google's preferred object format
    var location = { lat: latitude, lng: longitude };

    //Set icon image based on data type
    if (type == "volcano")
        icon_url = "/assets/red.png";
    if (type == "earthquake")
        icon_url = "/assets/green.png";

    //Create marker
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon_url
    });

    //Clear form values
    document.getElementById("longitude").value = "";
    document.getElementById("latitude").value = "";

}