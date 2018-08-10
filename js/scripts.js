$(document).ready(function() {


    $("button#btn").click(function() {

      var add = function(answer, answer2, answer3) {
        return answer + answer2 + answer3;
};

      var answer = parseInt($("input:radio[name='question1']:checked").val());
      var answer2 = parseInt($("input:radio[name='question2']:checked").val());
      var answer3 = parseInt($("input:radio[name='question3']:checked").val());
      var result = parseInt(add(answer, answer2, answer3).toString());
      if (result === 3) {
      alert("C#");
      } else {
      alert("Smth else");

      }

      $("#output").text(result);







});});
