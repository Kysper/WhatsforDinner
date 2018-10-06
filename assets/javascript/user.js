username = '';
currentUser ='';
$("#submit-user").click(function () {



    if ($("#enter-username").val() !== "") {
        username = $("#enter-username").val().trim();
        currentUser = username;
        $("#username").text(username);
        console.log(username);
        $("#ask-username").removeClass("is-active");
        database.ref("users/"+ currentUser).set({chosenRecipe});
    } else {
        return false;
    }
    
    database.ref("users/"+currentUser).on("value", function(snapshot)
    {
        $("#username").text(snapshot.currentUser);
        console.log(snapshot.val());
    });
    
});

$("#cancel-user").click(function () {

    $("#ask-username").removeClass("is-active");
});