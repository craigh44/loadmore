(function(){
  var loadMoreButton = document.getElementById('load-button');

  function requestListener (responseData) {
    var parser = new window.DOMParser(),
        parsedXml = parser.parseFromString(responseData.target.responseText, "text/xml"),
        nextPageContent = parsedXml.getElementById('left-main-content'),
        currentPageContent = document.getElementById('left-main-content');

    currentPageContent.appendChild(nextPageContent);
  }

  loadMoreButton.onclick = function () {
    var request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    request.open("GET", nextUrl);
    request.send();
  }
})();
