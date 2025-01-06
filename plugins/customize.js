//首頁
$(function () {
  if ($('.indexMain').length > 0) {
    $('.suppliersBox .bottomBox .productsList').append('<div class="control"><div class="count"></div></div>');

    $('.indexBanner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
    });

    $('.faqBox .moreItem .listBox').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      // infinite: false,
      dots: false,
      appendArrows: $('.faqBox .moreItem .control'),
    });
  }
});

$('.faqBox .moreItem .listBox').on('init beforeChange', function (event, slick, nextSlide) {
  let allItem = (slick.slideCount + 1 < 10 ? '0' : '') + slick.slideCount;
  $('.faqBox .moreItem .control .count').html(`<span>01</span><b>/</b>${allItem}`);
});
$('.faqBox .moreItem .listBox').on('beforeChange', function (event, slick, nextSlide) {
  console.log(slick.currentSlide);

  let allItem = (slick.slideCount + 1 < 10 ? '0' : '') + slick.slideCount;
  let currentSlide = nextSlide + 2;
  let slideNow = currentSlide === 5 ? (currentSlide < 10 ? '0' : '') + (currentSlide - 4) : (currentSlide < 10 ? '0' : '') + currentSlide;
  $('.faqBox .moreItem .control .count').html(`<span>${slideNow}</span><b>/</b>${allItem}`);
  // if (slick.currentSlide === 0) {
  //   $('.faqBox .control .slick-next').addClass('disabled');
  // } else {
  //   $('.faqBox .control .slick-next').removeClass('disabled');
  // }
});
