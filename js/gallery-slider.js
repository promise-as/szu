charset = 'UTF-8';
(function ($) {
  $.fn.gallery_slider = function (options) {
    var _ops = $.extend({
      imgNum: 3,
      prev: '.prev',
      next: '.next',
      gallery_left: '.gallery_left',
      gallery_right: '.gallery_right',
      gallery_item: '.gallery_item'
    }, options);

    var _this = $(this),
      _imgNum = _ops.imgNum,
      _prev = _ops.prev,
      _next = _ops.next,
      _gallery_left = _ops.gallery_left,
      _gallery_right = _ops.gallery_right,
      _gallery_item = _ops.gallery_item;

    _this.find(_prev).on('click', function () {
      // 下标
      var idx = parseInt(_this.find(_gallery_left).index());
      _this.find(_gallery_item).eq(idx).removeClass('gallery_left').addClass('front_side'); 
      _this.find(_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('gallery_out').addClass('gallery_left'); 
      _this.find(_gallery_item).eq(idx == _imgNum - 3 ? idx + 2 : idx - _imgNum + 2).removeClass('gallery_right').addClass('gallery_out'); 
      _this.find(_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('front_side').addClass('gallery_right');
    })
    _this.find(_next).on('click', function () {
      var idx = parseInt(_this.find(_gallery_right).index());
      _this.find(_gallery_item).eq(idx).removeClass('gallery_right').addClass('front_side'); 
      _this.find(_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('front_side').addClass('gallery_left'); 
      _this.find(_gallery_item).eq(idx == 1 ? idx + _imgNum - 2 : idx - 2).removeClass('gallery_left').addClass('gallery_out'); 
      _this.find(_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('gallery_out').addClass('gallery_right');
    })
  };
})(jQuery);