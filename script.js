document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    on: {
      init: function () {
        updateNavigationButtons(this);
      },
      slideChange: function () {
        updateNavigationButtons(this);
      },
    },
  });

  // navigation swiper
  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector(".custom-swiper-button-prev");
    const nextButton = document.querySelector(".custom-swiper-button-next");

    if (swiper.isBeginning) {
      prevButton.classList.add("disabled");
    } else {
      prevButton.classList.remove("disabled");
    }

    if (swiper.isEnd) {
      nextButton.classList.add("disabled");
    } else {
      nextButton.classList.remove("disabled");
    }
  }
});

// menu

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menuIcon");
  var closeMenuButton = document.querySelector(".close-menu");
  var dropdownMenu = document.getElementById("dropdownMenu");

  // Function to disable body scrolling
  function disableBodyScroll() {
    document.body.style.overflow = "hidden";
  }

  // Function to enable body scrolling
  function enableBodyScroll() {
    document.body.style.overflow = "";
  }

  // Toggle dropdown menu visibility when menu icon is clicked
  menuIcon.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("animate-fadeInScale");
      disableBodyScroll();
    } else {
      dropdownMenu.classList.remove("animate-fadeInScale");
      enableBodyScroll();
    }
  });

  // Close dropdown menu when close-menu button is clicked
  closeMenuButton.addEventListener("click", function () {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("animate-fadeInScale");
    enableBodyScroll();
  });
});
