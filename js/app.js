
$('.cart').slick({
    centerMode: true,
  centerPadding: '60px',
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
  ]
  });
          

  
$('.stat').slick({
    centerMode: true,
  centerPadding: '0px',
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
  ]
  });

    
$('.all').slick({
  centerMode: true,
centerPadding: '0px',
lazyLoad: 'ondemand',
slidesToShow: 2,
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2
    }
  },
  {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
]
});
$(function(){
  $(".remove-bar").on("click",function(){
    $(this).addClass("d-none")
    $(".rmv-ico").removeClass("d-none")
    $(".menu").removeClass("menuActive")
  })
  $(".rmv-ico").on("click",function(){
    $(this).addClass("d-none")
    $(".menu").addClass("menuActive")

    $(".remove-bar").removeClass("d-none")
  })
})