// The GET request below does the same thing as the http request below. 
// NO QUOTES
// https://newsapi.org/v2/sources?category=business&country=us&language=en&apikey=abc123

/*global $*/
$(document).ready(function() {
  $.ajax({
    // method: "GET",
    url: "https://newsapi.org/v2/top-headlines",
    data: {
      category: "business",
      country: "us",
      language: "en",
      apikey: APIKEY
    },
    success: function(response) {
      console.log(response);
      if (response.status === "ok") {
        for (var i = 0; i < response.sources.length; i++) {
          var source = document.createElement("OPTION");
          // createElement"OPTION"
          source.innerHTML = response.sources[i].name;
          // news organization
          document.getElementById("selection").appendChild(source);
          // child will be spawned in getElementById("selection")
          source.setAttribute('value', response.sources[i].id);
        }
      } else { alert(data.message) }
    }

  })

  function displayNews(source) {
    $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?sources=" + source,
      data: { apiKey: APIKEY },
      success: function(response, test) {
        for (var i = 0; i < response.articles.length; i++) {
          var work = document.createElement("P");
          var orked = document.createElement("P");
          pleaseWork.innerHTML = response.articles[i].title +
            "<br>" + response.articles[i].description;
          document.getElementById('comeOn').appendChild(pleaseWork);
          pleaseWork.setAttribute('id', i);
        }
      }
    });

  }

  $('#source').submit(function(e) {
    event.preventDefault();
    displayNews(document.getElementById("selection").value);
  });

})