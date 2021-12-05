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
