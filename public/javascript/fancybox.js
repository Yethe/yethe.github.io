var fancyboxDefaultOptions = {
  beforeShow: function () {
    // Disable right click
    $.fancybox.wrap.bind("contextmenu", function (e) {
      return false;
    });
  }
};

$(".art-frame, .comic-frame, .browser-frame").each(function(i, frame){
  $frame = $(frame);

  if($frame.parents("a").length < 1) {
    // frame has already part of a link

    var image = $frame.find("img");
    var fancyboxOptions = $.extend({}, fancyboxDefaultOptions, {
      type: 'image',
      href: image.attr('src'),
      padding: 10,
      margin: [20, 40, 20, 20],
      beforeLoad: function() {
        this.title = image.attr('alt');
      },
      helpers: {
        title: {
          type: 'outside'
        }
      }
    });

    $frame.fancybox(fancyboxOptions);
  }
});
