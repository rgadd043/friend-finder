

var friends = [
{
  "name":"Bill Gates",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/000/253/05b/308dd6e.jpg",
  "scores":[5, 5, 5, 5, 5, 5, 5, 5, 4, 5]
},
{
  "name":"Richard Branson",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAl_AAAAJGFmM2UzYTM4LWNjNDAtNDM3Ni1hNGY1LTVjM2MwYTg0ZmFhNQ.jpg",
  "scores":[3, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},
{
  "name":"Michael Dell",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlFAAAAJDg5ODVmOGY4LTNmZWEtNDIxYy1hNTMyLTYyNDI4ZmIyNTQ3MQ.jpg",
  "scores":[2, 2, 2, 2, 2, 2, 2, 5, 2, 1]
},
{
  "name":"Randi Zuckerberg",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/010/138/0a9b21e.jpg",
  "scores":[3, 3, 4, 4, 3, 3, 2, 3, 4, 3]
},
{
  "name":"Mark Cuban",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/000/1f6/0f6/2fcf973.jpg",
  "scores":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}];


$("#submit").on("click", function(){

    var userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(),]
    }

    console.log(userData);

    // Grab the URL of the website
    var currentURL = window.location.origin;

    // AJAX post the data to the friends API.
    $.post(currentURL + "/api/friends", userData, function(data){

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#matchName").text(data.name);
      $('#matchImg').attr("src", data.photo);

      // Show the modal with the best match
      $("#resultsModal").modal('toggle');

    });
}
else
{
  alert("Please fill out all fields before submitting!");
}

  return false;
});
