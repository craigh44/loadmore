(function(){
  var loadMoreButton = document.getElementById('load-button');
  var pageNumber = 1;
  var Helpers = new HelperFunctions;

  loadMoreButton.onclick = function () {
    var request = new XMLHttpRequest(),
        nextPageUrl = Helpers.getNextUrl();

    request.addEventListener("load", Helpers.requestListener);
    request.open("GET", nextPageUrl);
    request.send();
  }

  function HelperFunctions () {
    this.requestListener = function (responseData) {
      var parser = new window.DOMParser(),
          parsedXml = parser.parseFromString(responseData.target.responseText, "text/xml"),
          nextPageContent = parsedXml.getElementById('left-main-content'),
          currentPageContent = document.getElementById('left-main-content');

      currentPageContent.appendChild(nextPageContent);
    }

    this.getNextUrl = function () {
      pageNumber++;
      var nextPageUrl = nextUrl.substring(0, nextUrl.length - 1) + pageNumber;

      return nextPageUrl;
    }
  }
})();
