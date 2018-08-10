$(document).ready(function() {


    $("form#quiz").submit(function() {
     event.preventDefault();
      var add = function(q1, q2, q3, q4, q5, q6) {
        return q1 + q2 + q3 + q4 + q5 + q6;
};

      var q1 = parseInt($("input:radio[name='xy1']:checked").val());
      var q2 = parseInt($("input:radio[name='xy2']:checked").val());
      var q3 = parseInt($("input:radio[name='xy3']:checked").val());
      var q4 = parseInt($("input:radio[name='xy4']:checked").val());
      var q5 = parseInt($("input:radio[name='xy5']:checked").val());
      var q6 = parseInt($("input:radio[name='xy6']:checked").val());
      var result = parseInt(add(q1, q2, q3, q4, q5, q6).toString());
      if (result === 3) {
      //alert("YOU");
      $("#output").text(result);
    } else if (result === 6){
      //alert("YOU b");
      $("#output").text("This is even nicer! U r a champion!");
      }
      else if (result === 9){
      //alert("YOUn");
      $("#output").text("There you go!");
      }
      else {
        //alert("This is different!")
      }






});});
