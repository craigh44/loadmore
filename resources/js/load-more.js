
  function LoadMore (totalNumberOfPages, nextUrl, loadingImagePath, wrapperClass, buttonID, endMessageID, loadingImgID) {
    var me = this;

    me.pageNumber = 1;
    me.totalPagesReached = false;
    me.totalNumberOfPages = totalNumberOfPages;
    me.nextUrl = nextUrl;
    me.loadingImagePath = loadingImagePath;
    me.wrapperClass = wrapperClass;
    me.buttonElement = document.getElementById(buttonID);
    me.endMessageElement = document.getElementById(endMessageID);
    me.loadingImage = document.getElementById(loadingImgID);

    if (me.loadingImage) {
      me.loadingImage.src = loadingImagePath;
    }

    me.buttonElement.onclick = function () {
      if (me.totalPagesReached) {
        me.displayNoMorePagesMessage();
        return;
      }
      me.showLoadingImage();

      var nextPageUrl = me.getNextUrl();

      var xmlHttp = new XMLHttpRequest();
      xmlHttp.addEventListener("load", me.requestListener);
      xmlHttp.open( "GET", nextPageUrl);
      xmlHttp.send();

      if (!nextPageUrl) {
        return;
      }
    }

    this.requestListener = function (responseData) {
      var el = document.createElement('html');
      el.innerHTML = responseData.target.responseText;

      var element = el.getElementsByClassName(me.wrapperClass)[0];
      var currentPageContent = document.getElementsByClassName(me.wrapperClass)[0];

      currentPageContent.appendChild(element);

      me.hideLoadingImage();
    }

    this.getNextUrl = function () {
      this.pageNumber++;
      var nextPageUrl = this.nextUrl.substring(0, this.nextUrl.length - 1) + this.pageNumber;

      if (this.pageNumber === this.totalNumberOfPages) {
        this.totalPagesReached = true;
      }

      if (this.pageNumber > this.totalNumberOfPages) {
        return;
      }

      return nextPageUrl;
    }

    this.displayNoMorePagesMessage = function () {
      if (!this.endMessageElement) {
        return;
      }

      this.buttonElement.style.display = "none";
      this.endMessageElement.style.display = "block";
    }

    this.showLoadingImage = function () {
      if (!this.loadingImage) {
        return;
      }

      this.loadingImage.style.display = "block";
    }

    this.hideLoadingImage = function () {
      if (!this.loadingImage) {
        return;
      }
      this.loadingImage.style.display = "none";
    }
  }
