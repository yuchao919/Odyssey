(function () {
  function getIeVersion() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp['$1']);
      if (fIEVersion == 7) {
        return 7;
      } else if (fIEVersion == 8) {
        return 8;
      } else if (fIEVersion == 9) {
        return 9;
      } else if (fIEVersion == 10) {
        return 10;
      } else {
        return 6;
      }
    } else if (isEdge) {
      return 'edge';
    } else if (isIE11) {
      return 11;
    } else {
      return -1;
    }
  }
  function isFirefox() {
    return window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase().indexOf('gecko/') >= 0;
  }
})();
