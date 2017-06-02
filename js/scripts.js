$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();

    var focus = $("input:radio[name=job-focus]:checked").val();
    var coSize = parseInt($("#co-size").val());
    var artsy = $("#artsy").val();
    var codeAge = $("#code-age").val();
    var peewee = $("input:radio[name=peewee]:checked").val();

    var firstName = $("input#first-name").val();
    $(".first-name").text(firstName);

    $(".survey").fadeOut();

    if (focus === undefined || coSize === undefined || artsy === undefined || codeAge === undefined || peewee === undefined) {
      alert("Please make sure to answer ALL the questions.");

    } else if (focus === "builder") {
      $(".result").fadeOut();
      $("#c-sharp").fadeIn();
    } else if (artsy >= 3) {
      if (focus === "design") {
        $(".result").fadeOut();
        $("#css").fadeIn();
      } else if (focus === "games") {
        $(".result").fadeOut();
        $("#c-sharp").fadeIn();
      } else if (coSize >= 3) {
        $(".result").fadeOut();
        $("#php").fadeIn();
      } else {
        $(".result").fadeOut();
        $("#ruby").fadeIn();
      }
    } else if (artsy < 3 && focus === "design") {
      if (codeAge >= 4) {
        if (coSize <= 2) {
          $(".result").fadeOut();
          $("#ruby").fadeIn();
        } else if (coSize > 2) {
          $(".result").fadeOut();
          $("#java").fadeIn();
        }
      } else if (codeAge < 4) {
        $(".result").fadeOut();
        $("#c-sharp").fadeIn();
      } else {
        $(".result").fadeOut();
        $("#enigma").fadeIn();
      }
    } else if (artsy < 3 || focus !== "design") {
      if (coSize > 2) {
        $(".result").fadeOut();
        $("#c-sharp").fadeIn();
      } else if (coSize < 2) {
        $(".result").fadeOut();
        $("#ruby").fadeIn();
      } else {
        $(".result").fadeOut();
        $("#php").fadeIn();
      }
    } else if (focus === "mobile") {
      if (peewee === false) {
        $(".result").fadeOut();
        $("#c-sharp").fadeIn();
      } else if (peewee === true) {
        $(".result").fadeOut();
        $("#java").fadeIn();
      } else {
        $(".result").fadeOut();
        $("php").fadeIn();
      }
    } else {
      $(".result").fadeOut();
      $("#enigma").fadeIn();
    }
  });
});
