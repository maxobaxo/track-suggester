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

    $("#first-name-well").hide();

    if (focus === undefined || coSize === undefined || artsy === undefined || codeAge === undefined || peewee === undefined) {
      alert("Please make sure to answer ALL the questions.");

    } else if (focus === "builder") {
      $(".result").hide();
      $("#c-sharp").fadeIn();
    } else if (artsy >= 3) {
      if (focus === "design") {
        $(".result").hide();
        $("#css").fadeIn();
      } else if (focus === "games") {
        $(".result").hide();
        $("#c-sharp").fadeIn();
      } else if (coSize >= 3) {
        $(".result").hide();
        $("#php").fadeIn();
      } else {
        $(".result").hide();
        $("#ruby").fadeIn();
      }
    } else if (artsy < 3 && focus === "design") {
      if (codeAge >= 4) {
        if (coSize <= 2) {
          $(".result").hide();
          $("#ruby").fadeIn();
        } else if (coSize > 2) {
          $(".result").hide();
          $("#java").fadeIn();
        }
      } else if (codeAge < 4) {
        $(".result").hide();
        $("#c-sharp").fadeIn();
      } else {
        $(".result").hide();
        $("#enigma").fadeIn();
      }
    } else if (artsy < 3 || focus !== "design") {
      if (coSize > 2) {
        $(".result").hide();
        $("#c-sharp").fadeIn();
      } else if (coSize < 2) {
        $(".result").hide();
        $("#ruby").fadeIn();
      } else {
        $(".result").hide();
        $("#php").fadeIn();
      }
    } else if (focus === "mobile") {
      if (peewee === false) {
        $(".result").hide();
        $("#c-sharp").fadeIn();
      } else if (peewee === true) {
        $(".result").hide();
        $("#java").fadeIn();
      } else {
        $(".result").hide();
        $("php").fadeIn();
      }
    } else {
      $(".result").hide();
      $("#enigma").fadeIn();
    }
  });
});
