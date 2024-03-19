
$(".product_slider").slick({
  dots: false,
  arrows: true,
  infinite: !0,
  speed: 1000,
  slidesToShow: 3,
  autoplay: !0,
  autoplaySpeed: 4000,
  adaptiveHeight: !0,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Counter
let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function (item) {
  let startnumber = 0

  function counterup() {
    startnumber++
    item.innerHTML = startnumber

    if (startnumber == item.dataset.number) {
      clearInterval(stop)
    }
  }

  let stop = setInterval(function () {
    counterup()
  }, 50)

})

// Center Slider


$('.feature_slider').slick({

  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 300,
  centerMode: true,
});

// function func(){

// }
// func()

// const func = function(){

// }
// func()

// const func = () => {

// }
// func()

// (function(name){

// })('name')

// try{

  
// }catch(error){

// }

// setTimeout(() => {
  
// }, 3000);