var borderColorsForPlans = ["#C72129", "#648824", "#1f57a7", "#666666"];
var button;

$(function () {
  initialSteps();
  clickEvents();
  mobileShowSlides();
});
$(window).scroll(function () {
  scrollToTopOfPage();
});
$(window).resize(function () {
  if ($(this).width() < 600) {
    $(".titleContent").hide().parent("td").removeClass("activeTableCell");
    $(".fas").addClass("fa-plus").removeClass("fa-minus");
  }
});
function clickEvents() {
  $(".chooseSystemLeft select").change(function () {
    initialiazationDropdown(".chooseSystemLeft");
  });
  $(".chooseSystemRight select").change(function () {
    initialiazationDropdown(".chooseSystemRight");
  });
  $(".plansTab")
    .children()
    .click(function () {
      $(".priceSection").hide().eq($(this).index()).show();
      $(".subscribeBtn")
        .eq($(this).index())
        .show()
        .siblings(".subscribeBtn")
        .hide();
      $(this).addClass("activePlan").siblings().removeClass("activePlan");
    });
  $(".systemDropdown").click(function () {
    let icon = $(this).children(".material-icons");
    icon.toggleClass("dropup").hasClass("dropup")
      ? icon.text("arrow_drop_down")
      : icon.text("arrow_drop_up");
    $(".dropdownContent").slideToggle();
  });
  $(".fas")
    .parent("td")
    .click(function () {
      if ($(window).width() > 600) {
        $(this)
          .children(".titleContent")
          .toggle()
          .parent("td")
          .toggleClass("activeTableCell");
        $(this).children(".fas").toggleClass("fa-plus").toggleClass("fa-minus");
      }
    });
  // carousel();
  $(".scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
}

function initialSteps() {
  $(".subscribeBtn").eq(0).show().siblings(".subscribeBtn").hide();
  var planTabs = $("#chartHeading ~ td");
  for (var i = 0; i < planTabs.length; i++) {
    planTabs.eq(i).css("border-top", "5px solid " + borderColorsForPlans[i]);
  }
  $(".plansTab").children().eq(0).addClass("activePlan");
  $(".priceSection").eq(0).show();
  $(".chooseSystemRight .contentForSystem").eq(0).show();
  $(".chooseSystemLeft .contentForSystem").eq(0).show();
  $(".systemDropdown").children(".material-icons").addClass("dropup");
  $(".fas").parent("td").addClass("pointer");

  scrollToTopOfPage();
}
function initialiazationDropdown(x) {
  $(x + " .contentForSystem")
    .eq($(x + " select option:selected").index())
    .show()
    .siblings()
    .not(":first-child")
    .hide();
}
// function carousel() {
//   $(".awardSlide").first().before($(".awardSlide").last());
//   $(".slide").first().before($(".slide").last());
//   $(".awardButton,.button").on("click", function () {
//     $(this).hasClass("awardButton")
//       ? ((activeSlide = $(".activeAward")),
//         (slidesAward = $(".awardSlide")),
//         (activeClass = "activeAward"),
//         (className = ".awardSlide"))
//       : ((activeSlide = $(".active")),
//         (slidesAward = $(".slide")),
//         (activeClass = "active"),
//         (className = ".slide"));
//     button = $(this);
//     console.log(slidesAward);
//     if (button.attr("id") == "next") {
//       slidesAward.last().after(slidesAward.first());
//       activeSlide.removeClass(activeClass).next().addClass(activeClass);
//     }
//     if (button.attr("id") == "previous") {
//       slidesAward.first().before(slidesAward.last());
//       activeSlide
//         .removeClass(activeClass)
//         .prev(className)
//         .addClass(activeClass);
//     }
//   });
// }

function scrollToTopOfPage() {
  $("html,body").scrollTop() >= 20
    ? $(".scrollTopBtn").css("display", "block")
    : $(".scrollTopBtn").css("display", "none");
}

    

    window.onload = function () {
      $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    };
    // know more*//
    $(function () {
      $(".descriptionForPlans").hide();
      $(".benifitsSection").hide();
      $(".bodyForSelect").hide();
      $(".firstSelectOption .bodyForSelect").eq(0).show();
      $(".secondSelectOption .bodyForSelect").eq(0).show();
    

      // $(".firstSelectOption select").change(function () {
      //   var selected = $(this).children("option:selected").index();
      //   $(".firstSelectOption").children(".bodyForSelect").eq(selected).show().siblings(".bodyForSelect").hide();
      // });

      // $(".secondSelectOption select").change(function () {
      //   var selected = $(this).children("option:selected").index();
      //   $(".secondSelectOption").children(".bodyForSelect").eq(selected).show().siblings(".bodyForSelect").hide();
      // });

      // $(".titleOfSystem").click(function () {
      //   $(".systemReqSection").toggle();
      //   $("#iconForSystem").toggleClass("rotate");
      // })

      $(".benifitsTitle").click(function () {
        $(this).find("img").toggleClass("rotateIcon");
        $(this).siblings(".benifitsSection").toggle();
      })

      $(".descriptionForPlans").parent("div").click(function () {
        $(this).find("img").toggleClass("rotateIcon");
        $(this).children(".descriptionForPlans").toggle();
      })

      // $("#firstRadio,#secondRadio").click(function () {

      //   $(this).attr("id") == "firstRadio" ? 
      //   $(this).parent().siblings("#firstYrPrice,#firstYrLink").show().siblings("#secondYrPrice,#secondYrLink").hide() : 
      //   $(this).parent().siblings("#secondYrPrice,#secondYrLink").show().siblings("#firstYrPrice,#firstYrLink").hide();
      //   $(this).find(".radioBtn").attr("id", "selected");
      //   $(this).siblings("div").find(".radioBtn").attr("id", "notSelected");
      // })
    })