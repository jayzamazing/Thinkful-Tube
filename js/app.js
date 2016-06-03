$(function() {
  $('#search-term').submit(function(e) {
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    e.preventDefault();
  });
});
function getRequest(searchTerm) {
  var params = {
    key: '', //TODO add youtube api key
    q: searchTerm,
    part: 'snippet'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';
  $.getJSON(url, params, function(data) {
    showResults(data.items);
  });
}
function showResults(results) {
  var html = "";
  $.each(results, function(index, value){
    html += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" data-toggle="lightbox"><img src="' + value.snippet.thumbnails.medium.url + '"></a>';
    console.log(value.snippet.thumbnails.medium.url);
  });
  $('#search-results').html(html);
}
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
