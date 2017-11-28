// CHECK STATUS OF API
// function getStatus() {
//   var url = 'https://newsapi.org/v2/top-headlines?' +
//     'sources=bbc-news&' +
//     'apiKey=768e56c66f5b42e88a688a62fa62998c';
//   var req = new Request(url);
//   fetch(req)
//     .then(function(response) {
//       console.log(response.json());
//     })
// }
// Example returned
// {"status": "ok",
// -"articles":
// ###############
// $.ajax({
//   statusCode: {
//     404: function() {alert( "page not found" )}
//   }
// });

/* global $ */
// The GET request below does the same thing as the http request below.
// https://newsapi.org/v2/sources?category=business&country=us&language=en&apikey=abc123

$(document).ready(function() {
  $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/sources",
      data: {
        category: "business",
        country: "us",
        language: "en",
        apikey: "46d7b349a95e4d449f27ee7ec153af82"
      }
    })
   .done(function(msg) { alert("Data Saved: " + msg) });
})