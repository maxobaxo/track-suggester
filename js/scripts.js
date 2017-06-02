$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();

    var focus = $("input:radio[name=job-focus]:checked").val();
    var coSize = parseInt($("#co-size").val());
    var artsy = $("#artsy").val();
    var codeAge = $("#code-age").val();
    var peewee = $("input:radio[name=peewee]:checked").val();

    if (focus === undefined || coSize === undefined || artsy === undefined || codeAge === undefined || peewee === undefined) {
      alert("Please make sure to answer ALL the questions.");

    } else if (focus === "builder") {
      $(".result").hide();
      $("#c-sharp").show();
    } else if (artsy >= 3) {
      if (focus === "design") {
        $(".result").hide();
        $("#css").show();
      } else if (focus === "games") {
        $(".result").hide();
        $("#c-sharp").show();
      } else if (coSize >= 3) {
        $(".result").hide();
        $("#php").show();
      } else {
        $(".result").hide();
        $("#ruby").show();
      }
    } else if (artsy < 3 && focus === "design") {
      if (codeAge >= 4) {
        if (coSize <= 2) {
          $(".result").hide();
          $("#ruby").show();
        } else if (coSize > 2) {
          $(".result").hide();
          $("#java").show();
        }
      } else if (codeAge < 4) {
        $(".result").hide();
        $("#c-sharp").show();
      } else {
        $(".result").hide();
        $("#enigma").show();
      }
    } else if (artsy < 3 || focus !== "design") {
      if (coSize > 2) {
        $(".result").hide();
        $("#c-sharp").show();
      } else if (coSize < 2) {
        $(".result").hide();
        $("#ruby").show();
      } else {
        $(".result").hide();
        $("#php").show();
      }
    } else if (focus === "mobile") {
      if (peewee === false) {
        $(".result").hide();
        $("#c-sharp").show();
      } else if (peewee === true) {
        $(".result").hide();
        $("#java").show();
      } else {
        $(".result").hide();
        $("php").show();
      }
    } else {
      $(".result").hide();
      $("#enigma").show();
    }
  });
});
