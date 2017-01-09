(function(){
  var loadMoreButton = document.getElementById('load-button');
  var Loader = new LoadMore;
  var loadingImage = document.getElementById('loading-image');
  var noMorePostsElement = document.getElementById('no-more-pages');

  setTimeout(function (){
    if (loadingImage) {
      loadingImage.src = loadingImagePath;
    }
  });

  loadMoreButton.onclick = function () {
    if (Loader.totalPagesReached) {
      Loader.displayNoMorePagesMessage();
      return;
    }
    Loader.showLoadingImage();
    var request = new XMLHttpRequest(),
        nextPageUrl = Loader.getNextUrl();

        if (!nextPageUrl) {
          return;
        }

    request.addEventListener("load", Loader.requestListener);
    request.open("GET", nextPageUrl);
    request.send();
  }

  function LoadMore () {
    this.pageNumber = 1;
    this.totalPagesReached = false;

    this.requestListener = function (responseData) {
      var parser = new window.DOMParser(),
          parsedXml = parser.parseFromString(responseData.target.responseText, "text/xml"),
          nextPageContent = parsedXml.getElementById('load-more-content'),
          currentPageContent = document.getElementById('load-more-content');

      currentPageContent.appendChild(nextPageContent);

      Loader.hideLoadingImage();
    }

    this.getNextUrl = function () {
      this.pageNumber++;
      var nextPageUrl = nextUrl.substring(0, nextUrl.length - 1) + this.pageNumber;

      if (this.pageNumber === totalNumberOfPages) {
        this.totalPagesReached = true;
      }

      if (this.pageNumber > totalNumberOfPages) {
        return;
      }

      return nextPageUrl;
    }

    this.displayNoMorePagesMessage = function () {
      if (!noMorePostsElement) {
        return;
      }

      loadMoreButton.style.display = "none";
      noMorePostsElement.style.display = "block";
    }

    this.showLoadingImage = function () {
      if (!loadingImage) {
        return;
      }
      loadingImage.style.display = "block";
    }

    this.hideLoadingImage = function () {
      if (!loadingImage) {
        return;
      }
      loadingImage.style.display = "none";
    }
  }
})();
