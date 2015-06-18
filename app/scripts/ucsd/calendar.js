$(document).ready( function() {
    // initialize calendar
    $("#calendar").fullCalendar({
        // options & callbacks
        eventClick: function( calEvent, jsEvent, view ) {
            console.log("event clicked");

            console.log("event id: " + calEvent.id);
            console.log("event name: " + calEvent.name);
            console.log("event date: " + calEvent.date);

            var id_url = "cal-output.html?id=" + calEvent.id;
            window.location.href = id_url;
            //console.log(id_url);
        },

        eventSources: [
            // event source
            {
                url: "calendar.json"
            }
        ]
    });
});