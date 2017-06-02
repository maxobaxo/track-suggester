$(document).ready(function() {
  $(".survey").submit(function() {


    var focus = $("input:radio[name=job-focus]:checked").val();
    var coSize = parseInt($("#co-size").val());
    var artsy = $("#artsy").val();
    var codeAge = $("#code-age").val();
    var peewee = $("input:radio[name=peewee]:checked").val();

    if (artsy >= 3 && focus === "design") {
      $("#css").show();
    }
  });
});
