
/*global $*/
$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://newsapi.org/v2/sources",
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
    }
  })

  $("#source").submit(function(event){
    event.preventDefault();
    // prevents submit btn and uses ajax
    var sourceId = document.getElementById("selection").value;
    //alert(document.getElementById("selection").value)
    var articles = document.getElementById("headlines");
    // get value of news organization from dropdown
    while (articles.firstChild){articles.removeChild(articles.firstChild)}; 
    // while articles.firstChild is present/true do nothing.
    // get articles via ajax
    $.ajax({ // Second ajax call for headlines
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      data: {sources: sourceId, 
             apiKey: APIKEY
            },
      success: function(response){
        // console.log(response) // check data.status
        for (var i = 0; i < response.articles.length; i++){
        // for number of articles via length
          var articles = document.createElement("LI");
          // creating line item
          articles.setAttribute("value", response.articles[i].title);
          // set atributes so that they can be printed on screen via innerHTML
          articles.innerHTML = response.articles[i].title;
          document.getElementById("headlines").appendChild(articles);
          //add children onto parent node-"OPTION".
        }
      }
    });
  });
});
