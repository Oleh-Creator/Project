function scrollToElement1() {
    var element = document.getElementById("MetodikBox");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function scrollToElement2() {
    var element = document.getElementById("PedagpgsBox");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function scrollToElement3() {
    var element = document.getElementById("VideoBox");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function scrollToElement4() {
    var element = document.getElementById("footer");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function scrollToElement5() {
    var element = document.getElementById("AboutBox");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  $(document).ready(function(){
    $('.MetodikBoxItemBut').click(function(){
        $(this).hide();
        $(this).siblings('.MetodikBoxItemBut2').css('display', 'flex');
        $('#RegistBox').css('display', 'flex');
    });

    $('.MetodikBoxItemBut2').click(function(){
        $(this).hide();
        $(this).siblings('.MetodikBoxItemBut').css('display', 'flex');
    });
    $('.TestBoxRightItem').click(function(){
      $(this).hide();
      $(this).hide('.TestBoxRightItem').css('color', '#100680');
      $('.TestBoxRightItem').css('display', 'flex');
  });
});
$('.TestBoxButton').click(function(){
  $('.TestBoxRightItemsBox').css('display', 'none');
  $('.TestBoxLeftText').css('display', 'none');
  $('.TestBoxRightItemsBox2').css('display', 'flex');
  $('.TestBoxLeftText2').css('display', 'flex');
});
$('.TestBoxButton2').click(function(){
  $('.TestBoxRightItemsBox2').css('display', 'none');
  $('.TestBoxLeftText2').css('display', 'none');
  $('.TestBoxRightItemsBox3').css('display', 'flex');
  $('.TestBoxLeftText3').css('display', 'flex');
});
$('.TestBoxButton3').click(function(){
  $('.TestBox').css('display', 'none');
  $('.TestBoxRightItemsBox3').css('display', 'none');
  $('.TestBoxLeftText3').css('display', 'none');
  $('.FurstBut3').css('display', 'none');
  $('.FurstBut4').css('display', 'flex');
});
$('.FurstBut3').click(function(){
  $('.TestBox').css('display', 'flex');
});
$('.RightBoxItem').click(function(){
  $('.RightBox').css('display', 'none');
  $('.RightBox2').css('display', 'flex');
  $('.FirstBox').css('justify-content', 'space-between');
});
$('.RightBoxItem2').click(function(){
  $('.RightBox3').css('display', 'flex');
  $('.RightBox2').css('display', 'none');
  $('.FirstBox').css('justify-content', 'space-between');
});
$('.RightBoxItem3').click(function(){
  $('.RightBox4').css('display', 'flex');
  $('.RightBox3').css('display', 'none');
  $('.FirstBox').css('justify-content', 'space-between');
});
$('.RightBoxItem4').click(function(){
  $('.RightBox4').css('display', 'none');
  $('.RightBox3').css('display', 'none');
  $('.RightBox2').css('display', 'none');
  $('.RightBox').css('display', 'none');
  $('.FirstBox').css('justify-content', 'space-between');
});
$('.FurstBut2').click(function(){
  $('.RightBox').css('display', 'flex');
  $('.FirstBox').css('justify-content', 'space-between');
});

$('.TablCont').click(function(){
  $('.TablCont').css('display', 'none');
});
$('.PedagogsButton').click(function(){
  $('.TablCont').css('display', 'flex');
});

RegistBut.onclick = function(){
    RegistBox.style.display = 'none';
     }

     var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      