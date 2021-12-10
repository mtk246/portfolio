$(document).ready(function () {
  $(".modal").on("shown.bs.modal", function () {
    //correct here use 'shown.bs.modal' event which comes in bootstrap3
    $(this)
      .find("iframe")
      .attr(
        "src",
        "https://docs.google.com/document/d/1RnmMq6gn5ILy0L1LAUqaVUo58rPDuc59TuWb-xX3_EQ/preview"
      );
  });
  //   $(".iframe-loading").css("background-image", "none");
});
//- To see the process of how I made this dark mode toggle, watch this tutorial video:
//- https://youtu.be/42gltu11wb8

// Dark Mode Setup

var darkMode;

if (localStorage.getItem("dark-mode")) {
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem("dark-mode");
} else {
  // if dark mode is not in storage, set variable to 'light'
  darkMode = "light";
}

// set new localStorage value
localStorage.setItem("dark-mode", darkMode);

if (localStorage.getItem("dark-mode") == "dark") {
  // if the above is 'dark' then apply .dark to the body
  $("body").addClass("dark");
  $(".head-title").addClass("dark");
  $(".head-desc").addClass("dark");
  $(".section-1-content").addClass("dark");
  $(".section-3-content").addClass("dark");
  $(".list-group-item").addClass("dark");
  $(".modal-content").addClass("dark");

  // hide the 'dark' button
  $(".dark-button").hide();
  // show the 'light' button
  $(".light-button").show();
}

// Toggle dark UI

$(".dark-button").on("click", function () {
  $(".dark-button").hide();
  $(".light-button").show();
  $("body").addClass("dark");
  $(".head-title").addClass("dark");
  $(".head-desc").addClass("dark");
  $(".section-1-content").addClass("dark");
  $(".section-3-content").addClass("dark");
  $(".list-group-item").addClass("dark");
  $(".modal-content").addClass("dark");

  // set stored value to 'dark'
  localStorage.setItem("dark-mode", "dark");
});

$(".light-button").on("click", function () {
  $(".light-button").hide();
  $(".dark-button").show();
  $("body").removeClass("dark");
  $(".head-title").removeClass("dark");
  $(".head-desc").removeClass("dark");
  $(".section-1-content").removeClass("dark");
  $(".section-3-content").removeClass("dark");
  $(".list-group-item").removeClass("dark");
  $(".modal-content").removeClass("dark");

  // set stored value to 'light'
  localStorage.setItem("dark-mode", "light");
});
