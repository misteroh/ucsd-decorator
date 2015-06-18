// inefficent, have to get and parse json file every time user clicks
// build locally in array and parse array itself?

function formatTime( rawDate ) {
    var dateTimeOutput = [];

    dateTimeOutput.push( moment( rawDate ).format( "dddd, MMMM Do YYYY" ));
    dateTimeOutput.push( moment( rawDate ).format( "h:mm a" ));

    return dateTimeOutput;
}

$(document).ready( function() {
    var jsonID,
        eventID, eventName, eventDate, eventTime,
        outputName = $("#name span"),
        outputDate = $("#date span"),
        outputTime = $("#time span"),
        url     = window.location.href;

    //grabID.on( "click", function() {
    var parseRegex = new RegExp(/(?:(\?id=))\w+/g);
    var parseID = url.match(parseRegex);

    // takes parsed URL, turns into string and splits
    // takes the 2nd value in array for just the id
    jsonID = parseID.toString().split('=')[1];

    $.getJSON( "calendar.json", function( json ) {
        json.forEach(function (event) {
            eventID   = event.id;
            eventName = event.name;
            eventDate = formatTime(event.date)[0];
            eventTime = formatTime(event.date)[1];

            //console.log("eventID: " + eventID);
            //console.log("jsonID: " + jsonID);
            if ( eventID == jsonID ) {
                console.log("in conditional eventID");
                outputName.append(eventName);
                outputDate.append(eventDate);
                outputTime.append(eventTime);
            }
        });
    });
    //});
});