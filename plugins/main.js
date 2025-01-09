// 開啟畫面動態效果
new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true, // default
}).init();

//選單黏著
(function () {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  let windowScroll = window.scrollY;

  window.addEventListener('load', sticky);
  window.addEventListener('scroll', sticky);
  function sticky() {
    // let headerHeight = header.offsetHeight;
    windowScroll = window.scrollY;
    if (windowScroll > 0) {
      header.classList.add('sticky');
      // main.style.marginTop = `${headerHeight}px`;
    } else {
      header.classList.remove('sticky');
      main.removeAttribute('style');
    }
  }
})();

//手機版選單
(function () {
  const searchBtn = document.querySelector('.topSearch .searchBtn');
  const searchInput = document.querySelector('.topSearch .searchInput');
  const searchClose = document.querySelector('.topSearch .close');
  const mobileBtn = document.querySelector('.mobileBtn');
  const menuClose = document.querySelector('.topSearch .close');
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  let headerHeight = header.offsetHeight;

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    mobileBtn.classList.remove('active');
    body.classList.toggle('searchOpen');
    body.classList.remove('menuOpen');
    headerHeight = header.offsetHeight;
    searchInput.style.top = `${headerHeight}px`;
  });

  searchClose.addEventListener('click', () => {
    searchInput.classList.remove('active');
    mobileBtn.classList.remove('active');
    body.classList.remove('searchOpen');
  });

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    body.classList.toggle('menuOpen');
    searchInput.classList.remove('active');
    body.classList.remove('searchOpen');
  });

  const observer = new ResizeObserver(function (entries) {
    if (entries[0].contentRect.width === 1000) {
      mobileBtn.classList.remove('active');
      searchInput.classList.remove('active');
      body.classList.remove('menuOpen');
      body.classList.remove('searchOpen');
    } else {
      mobileBtn.classList.remove('active');
      searchInput.classList.remove('active');
      body.classList.remove('menuOpen');
      body.classList.remove('searchOpen');
    }
  });
  observer.observe(body);

  const searchTop = () => {
    headerHeight = header.offsetHeight;
    searchInput.style.top = `${headerHeight}px`;
    if (window.scrollY === 0) {
      setTimeout(() => {
        headerHeight = header.offsetHeight;
        searchInput.style.top = `${headerHeight}px`;
      }, 300);
    }
  };
  window.addEventListener('scroll', searchTop);
  window.addEventListener('resize', searchTop);
  window.addEventListener('load', searchTop);
})();

//偵測位置
// (function () {
//   let options = {};

//   let callback = (entries, observer) => {
//     entries.forEach((item, index) => {
//       if (item.isIntersecting) {
//         item.target.classList.add('scrollOver');
//         // } else {
//       }
//     });
//   };
//   let observer = new IntersectionObserver(callback, options);
//   const pic = document.querySelectorAll('.pic');
//   pic.forEach((item) => observer.observe(item));
// })();

$(function () {
  $('.language a').on('click', function () {
    $(this).siblings('ul').slideToggle('fast');
  });

  //分享功能
  $('.functionPanel .share .toggleBtn').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings('ul').slideToggle('fast');
  });

  //手風琴功能
  $('.accordionBox .top').on('click', function () {
    $(this).siblings().slideToggle('fast');
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().siblings().find('.content').slideUp('fast');
  });

  //選單
  $('.mainMenu li').has('ul').addClass('nextLv').append('<span class="toggleBtn"></span>');

  $('.nextLv').hover(
    function () {
      if ($(window).outerWidth() > 1000) {
        let _this = $(this);
        _this.children('ul').stop().off().slideDown('fast');

        let thisPosition = _this.children('ul')[0].getBoundingClientRect();

        if (thisPosition.x + thisPosition.width > window.innerWidth) {
          _this.addClass('left');
        } else {
          _this.removeClass('left');
        }

        $(this).addClass('active');
      }
    },
    function () {
      if ($(window).outerWidth() > 1000) {
        $(this).children('ul').stop().off().slideUp('fast');
        $(this).removeClass('active');
      }
    }
  );
  $('.nextLv > a').on('click', function (e) {
    if ($(window).outerWidth() <= 1000 && $(this).attr('href') === '#') {
      e.preventDefault();
      $(this).siblings('.toggleBtn').trigger('click');
    }
  });
  $('.nextLv .toggleBtn').on('click', function () {
    $(this).parents('li').siblings('li').not($(this).parents('li')).children('ul').slideUp('fast');
    $(this).siblings('ul').stop().slideToggle('fast');
    $(this).parent('li').toggleClass('active');
  });

  $('.btn-fatfooter').click(function (e) {
    $(this)
      .parent('.container')
      .find('nav>ul>li>ul')
      .stop(true, true)
      .slideToggle(function () {
        if ($(this).is(':visible')) {
          $('.btn-fatfooter').html('收合/CLOSE');
          $('.btn-fatfooter').attr('name', '收合選單/CLOSE');
        } else {
          $('.btn-fatfooter').html('展開/OPEN');
          $('.btn-fatfooter').attr('name', '展開選單/OPEN');
        }
      });
    $(this).stop(true, true).toggleClass('close');
  });
});

$(window).on('load resize', function () {
  $('.mainMenu li').removeClass('active');
  $('.mainMenu ul').attr('style', null);
});

(function () {
  let goTopBtn = document.querySelector('.goTop');

  window.addEventListener('scroll', function () {
    let windowScrollTop = document.documentElement.scrollTop;
    if (windowScrollTop >= 200) {
      goTopBtn.style.cssText = 'opacity:1';
    } else {
      goTopBtn.style.cssText = 'opacity:0';
    }
  });
  goTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
})();
