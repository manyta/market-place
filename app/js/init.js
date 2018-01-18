// init slick slider
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    dots: true
  });

// init slick nav
$('.bottom-header-nav').slicknav({
  appendTo: '.header .top-header .container',
  label: ''
});