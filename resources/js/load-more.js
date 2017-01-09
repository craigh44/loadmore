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

    var nextPageUrl = Loader.getNextUrl();

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.addEventListener("load", Loader.requestListener);
    xmlHttp.open( "GET", nextPageUrl);
    xmlHttp.send();

    if (!nextPageUrl) {
      return;
    }
  }

  function LoadMore () {
    this.pageNumber = 1;
    this.totalPagesReached = false;

    this.requestListener = function (responseData) {
      var el = document.createElement('html');
      el.innerHTML = responseData.target.responseText;

      var element = el.getElementsByClassName('load-more-content')[0];
      var currentPageContent = document.getElementsByClassName('load-more-content')[0];

      currentPageContent.appendChild(element);

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
