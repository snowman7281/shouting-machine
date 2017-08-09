$(document).ready(function(){
  $("button").click(function(){
  var uppercase = $("#sentence").val().toUpperCase();
  console.log(uppercase);

  $("#sentInput").text(uppercase);
  });
});
