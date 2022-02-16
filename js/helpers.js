(function($) {
  $.fn.hasScrollBar = function() {
      return this[0] ? this[0].scrollHeight > this.innerHeight() : false;
  }
})(jQuery);