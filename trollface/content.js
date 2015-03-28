$(document).ready(function() {
  // Trollface image must be at 'my_extension/images/trollface.jpg'.
  var trollface = chrome.extension.getURL("trollface.png");
  $('img').each(function(index, image){
    $(image).attr('src', trollface);
  });
});