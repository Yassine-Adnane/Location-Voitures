$(function()
{
    'use strict';
    //Adjust img-welcome Height
    var winH    = $(window).height();
    $('.Welcome').height(winH);


    //Scroll To Propos
    $('.arrow i').click(function()
    {
        $('html, body').animate(
            {
                scrollTop: $('.Propos').offset().top
            },1000)
    });

    /**********************Slider************************ */
    $(function()
    {
        'use strict';
        //Adjust Slider Height
        var winH    = $(window).height();
        $('.slider, .carousel-item').height(winH);
    });


    $('#Slider-FeedBacks').carousel(
    {
        interval: 3000
    });
    /******************* PopUp ***************************/
    
    $('.show-popup').click(function()
    {
        $('.'+$(this).data('popup')).fadeIn();
    });


    $('.popup').click(function()
    {
        $(this).fadeOut();
    });


    $('.popup .inner').click(function(e)
    {
        e.stopPropagation();
    });

    $('.popup .close').click(function(e)
    {
        e.stopPropagation();
        $('.popup').fadeOut();
    });

    /******************* End PopUp ***************************/

    $('.closeinfo').click(function()
    {
        
        $('.popup').fadeOut();
    });

   
});

/****************** Show More OurServices */

function myFunction() 
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Plus de details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Moins de détails";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() 
{
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Plus de details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Moins de détails";
      moreText.style.display = "inline";
    }
  }

  function myFunction3() 
  {
      var dots = document.getElementById("dots3");
      var moreText = document.getElementById("more3");
      var btnText = document.getElementById("myBtn3");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Plus de details";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Moins de détails";
        moreText.style.display = "inline";
      }
}

function myFunction4() 
{
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Plus de details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Moins de détails";
      moreText.style.display = "inline";
    }
}