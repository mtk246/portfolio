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
  $("#port-img").attr(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewa5-b6vBcQy7aVuTvImiEoCqH0uhN58Ma_TCBUJWWk52AxWeEdrrklmff5r9WGpe_gY&usqp=CAU"
  );

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
  $("#port-img").attr(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewa5-b6vBcQy7aVuTvImiEoCqH0uhN58Ma_TCBUJWWk52AxWeEdrrklmff5r9WGpe_gY&usqp=CAU"
  );

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
  $("#port-img").attr(
    "src",
    "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80"
  );

  // set stored value to 'light'
  localStorage.setItem("dark-mode", "light");
});
