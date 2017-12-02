/*global $ APIKEY*/

$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://newsapi.org/v2/sources",
    data: {
      category: "business",
      country: "us",
      language: "en",
      apiKey: APIKEY
    },
    success: function(data){
      if (data.status === "ok"){
        console.log(data);
        for (var i = 0; i < data.sources.length; i++){
          var source = document.createElement("OPTION");
          // createElement"OPTION" inside selection
          source.setAttribute("value", data.sources[i].id);
          source.innerHTML = data.sources[i].name;
          // get news organization and print html
          document.getElementById("selection").appendChild(source);
        }
      }
    }
  });
  $("#source").submit(function(event){
    event.preventDefault();
    //alert(document.getElementById("selection").value);
    var sourceId = document.getElementById("selection").value;
    // get value of new org from dropdown
    var articles = document.getElementById("headlines");
    // get articles
    while (articles.firstChild){articles.removeChild(articles.firstChild)};
    // while articles.firstChild is true do not remove articles
    $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      data: {
        sources: sourceId, 
        apiKey: APIKEY
    },
      success: function(data){
        if (data.status === "ok"){
          //console.log(data)
        };
        for (var i = 0; i < data.articles.length; i++){
          var articles = document.createElement("LI");
          //alert(data.articles.length);
          articles.setAttribute("value", data.articles[i].title);
          //console.log(data.articles[i].title);
          articles.innerHTML = data.articles[i].title;
          document.getElementById("headlines").appendChild(articles);
        }
      }
    });
  });
});