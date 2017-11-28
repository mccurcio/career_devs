
// The GET request below does the same thing as the http request below. 
// NO QUOTES
// https://newsapi.org/v2/sources?category=business&country=us&language=en&apikey=abc123

/*global $*/
$(document).ready(function() {
  $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/sources",
      data: {category: "business",
             country: "us",
             language: "en",
             apikey: "46d7b349a95e4d449f27ee7ec153af82"},
      success: function(response){
        if (data.status === "ok"){
            for (var i = 0; i < response.sources.length; i++){
                var source = document.createElement("OPTION"); 
                // createElement"OPTION"
                source.innerHTML = response.sources[i].name;
                // news organization
                document.getElementById("selection").appendChild(source); 
                // child will be spawned in getElementById("selection")
                source.setAttribute('value', response.sources[i].id);
            } 
        }else{alert(data.message)}
      }  
     
    })
   // .done(function(msg) {
   //     console.log(msg);
   //     console.log(data.status)
})

