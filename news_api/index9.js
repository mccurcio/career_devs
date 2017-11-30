/* global $ APIKEY*/ /* global notation can be use outside of jQuery, if var are in another js file.*/
$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources?",
        data: { category: "technology", country: "us", language: "en", apiKey: APIKEY },
        success: function(data) {
            if (data.status == "ok") {
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) { //did not do sources[] because we are running through entire array
                    var source = document.createElement("OPTION");
                    source.setAttribute("value", data.sources[i].id)
                    source.innerHTML = data.sources[i].name;
                    document.getElementById("selection").appendChild(source);
                    console.log("display");

                }
            }
        }
    });
    $("#source").submit(function(event) {
        event.preventDefault();
        var value = document.getElementById("selection").value;
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources: value, apiKey: APIKEY },
            success: function(data) {
                for (var i = 0; i < data.articles.length; i++) {
                    console.log("start")
                    var display = document.createElement("LI");
                    display.innerHTML = data.articles[i].title;
                    document.getElementById("display").appendChild(display);
                }
                console.log(data);
            }
        });
    });
});
