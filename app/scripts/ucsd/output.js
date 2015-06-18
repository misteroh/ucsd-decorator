// inefficent, have to get and parse json file every time user clicks
// build locally in array and parse array itself?
$(document).ready(function() {
    var jsonID,
        eventID, eventName, eventDate,
        outputID = $("#id"),
        outputName = $("#name"),
        outputDate = $("#date"),
        url     = window.location.href,
        grabID  = $(".cal");

    //grabID.on( "click", function() {
    var parseRegex = new RegExp(/(?:(\?id=))\w+/g);
    var parseID = url.match(parseRegex);

    // takes parsed URL, turns into string and splits
    // takes the 2nd value in array for just the id
    jsonID = parseID.toString().split('=')[1];

    $.getJSON( "calendar.json", function( json ) {
        json.forEach(function (event) {
            eventID   = event["id"];
            eventName = event["name"];
            eventDate = event["date"];

            //console.log("eventID: " + eventID);
            //console.log("jsonID: " + jsonID);
            if ( eventID == jsonID ) {
                console.log("eventID: " + eventID);
                console.log("eventName: " + eventName);
                console.log("eventDate: " + eventDate);

                outputID.text("eventID: " + eventID);
                outputName.text("eventName: " + eventName);
                outputDate.text("eventDate: " + eventDate);
            }
        });
    });
    //});
});