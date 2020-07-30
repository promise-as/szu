charset = 'UTF-8';
$(function(){
  function tabToggle(head, cont, classname) {
    $(head).each(function (i) {
      var that = this;

      $(that).mouseenter(function () {
        $(that).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      })
    });
  }
  // 五大优势
  tabToggle(".s-head .h-item", ".strength .c-item", "on");
  // 五大优势
  tabToggle(".campus .h-item", ".campus .c-item", "on");

});