// init slick slider
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// init slick nav
// $('.bottom-header-nav').slicknav({
//   appendTo: '.header .top-header .container',
//   label: ''
// });

// Login modal
let openModalsBtns = $('[data-modal]');

openModalsBtns.on('click', function () {
  let target = $(this).attr('data-target');

  $('.modal').bPopup();
})

