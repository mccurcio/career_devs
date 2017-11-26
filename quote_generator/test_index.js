// RUSSIAN QUOTE #########################
  var url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&key1&format=jsonp&lang=ru&jsonp=?";

// Twitter handoff
  var getQuote = function(data) {
    $(".quote-text").text(data.quoteText);
    var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText +
      ' By ' + data.quoteAuthor;
    if (data.quoteAuthor === ''){data.quoteAuthor = 'анонимный'};
    $(".author-text").text(data.quoteAuthor);
    $(".twitter-share-button").attr("href", quot);
  };
  $(document).ready(function() {$.getJSON(url, getQuote, 'jsonp')});
  $("#quote").click(function() {$.getJSON(url, getQuote, 'jsonp')});

