
/*global $*/
$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://newsapi.org/v2/top-headlines",
    data: {category: "business",
           country: "us",
           language: "en",
           apikey: APIKEY
          },
    success: function(response){
      console.log(response);
      if (response.status === "ok"){
        for (var i = 0; i < response.sources.length; i++){
          var source = document.createElement("OPTION");
          // createElement"OPTION"
          source.innerHTML = response.sources[i].name;
          // news organization
          document.getElementById("selection").appendChild(source);
          // child will be spawned in getElementById("selection")
          source.setAttribute("value", response.sources[i].id);
        }
      } 
      else {alert(data.message)}
    }

  })

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
  $("#source").submit(function(event){
    event.preventDefault();
    displayNews(document.getElementById("selection").value);
  });
})