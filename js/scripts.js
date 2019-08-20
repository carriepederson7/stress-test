$(document).ready(function(){
  $("#stress-survey").submit(function(event){
  event.preventDefault();
  var stressResponses = [];
  var copingResponses = [];
  $("input:checkbox[name=stress-symptoms]:checked").each(function(){
    var stressSymptoms = $(this).val();
    stressResponses.push(stressSymptoms);
  });
  $("input:checkbox[name=stress-coping]:checked").each(function(){
    var stressCoping = $(this).val();
    copingResponses.push(stressCoping);
  });
  console.log(copingResponses);
  console.log(stressResponses);

  });
});
