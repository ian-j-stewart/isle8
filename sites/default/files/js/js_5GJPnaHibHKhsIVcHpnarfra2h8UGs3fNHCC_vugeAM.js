(function($) {

  if(!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if(option === 'destroy'){
          $this.removeData('headroom');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));

// Set options for headroom for the navbar.
(function ($) {
  "use strict";
  Drupal.behaviors.atMagHeadRoom = {
    attach: function () {

      $(".navbar-pinned").headroom({
        "offset": 205,
        "tolerance": 5,
        "classes": {
          "initial": "animated",
          "pinned": "slideDown",
          "unpinned": "slideUp"
        }
      });

    }
  };
}(jQuery));
;
!function(t,a,e){"use strict";Drupal.behaviors.atBP={attach:function(t,n){if(a.matchMedia("only screen").matches){var i=n[n.ajaxPageState.theme].at_breakpoints;for(var o in i)i.hasOwnProperty(o)&&function(t,a){enquire.register(a,{match:function(){e.body.classList.add("bp--"+t)},unmatch:function(){e.body.classList.remove("bp--"+t)}})}(o.split("_").join("-"),i[o].mediaquery)}}}}(jQuery,window,document);
