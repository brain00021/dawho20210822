$(function () {
  const scrollAddAnimate = (item, bodyPos, targetItem) => {
    const containPos = $(item).offset();

    if (containPos.top < bodyPos) {
      $(targetItem)
        // .removeClass("animate__animated animate__fadeInUp")
        .addClass("animate__animated animate__fadeInDown");
    }
  };
  $(window)
    .scroll(function () {
      const windowHeight = $(window).innerHeight() - 180;
      const bodyPos = $(window).scrollTop() + windowHeight;
      // console.log(bodyPos, $("#btn-detail").offset());

      scrollAddAnimate(".banner-bg-wrapper", bodyPos, ".slogan-wrapper");
      scrollAddAnimate(".selectionCoupon-bg-wrapper", bodyPos, ".coupon");
      scrollAddAnimate("#selectionPlatform", bodyPos, ".role");
      scrollAddAnimate(
        "#selectionDetail-description",
        bodyPos,
        "#selectionDetail-description-innerWrapper"
      );
      scrollAddAnimate("#extra-banner", bodyPos, "#extra-banner");
      scrollAddAnimate("#btn-detail", bodyPos, "#btn-detail");
    })
    .scroll();
  //click setting
  // $(".slogan-wrapper,.coupon").css({ opacity: 0 });

  $("#btn-detail").click(() => {
    $("body").css("overflow", "hidden");
    $(".dialog-bg").show();
  });
  $("#dialog-btn,.dialog-bg").click(() => {
    $("body").css("overflow", "auto");
    $(".dialog-bg").hide();
  });
  const tabSetting = (item) => {
    $(item).click((e) => {
      e.preventDefault();

      $(item).addClass("active");
      $(item).siblings().removeClass("active");
      $(".role").removeClass("coupon2 coupon1").addClass(item.replace("#", ""));
      $("#selectionDetail-description-innerWrapper")
        .removeClass()
        .addClass(item.replace("#", ""));
    });
  };
  tabSetting("#coupon2");
  tabSetting("#coupon1");
  $("#coupon1").click();
});
