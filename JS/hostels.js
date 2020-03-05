function check(form)
{ if(form.userid.value == "")
{
    $("#post").html("please Enter user name");
    $(".post").css('background-color', 'red');
}

else if(form.pwd.value=="")
{
    $("#post").html("please Enter Password");
    $(".post").css('background-color', 'red') 
}
else if(form.email.value=="")
{
    $("#post").html("please Enter Email");
    $(".post").css('background-color', 'red') 
}

else if(form.pwd.value===form.pwd2.value){
    $("#post").html("User sign up successful");
    $(".post").css('background-color', 'green')
    window.location = "hostels.html"; // Redirecting to users hostels  page.
    return false;
	}
else
{
    $("#post").html("Passwords Don't Match");
    $(".post").css('background-color', 'red')
        
	return false;
}
}

$(document).ready(function(){
    $("#topoli").click(function(){
        $(".topoli").toggle();
        $(".hostels").toggle();
    });
    $("#metropolitant").click(function(){
        $(".metropolitant").toggle();
        $(".hostels").toggle();
    });
    $("#ngaramen").click(function(){
        $(".ngaramen").toggle();
        $(".hostels").toggle();
    });
    $("#highway").click(function(){
        $(".highway").toggle();
        $(".hostels").toggle();
    });
    $("#qwetu").click(function(){
        $(".qwetu").toggle();
        $(".hostels").toggle();
    });
    $("#madaraka").click(function(){
        $(".madaraka").toggle();
        $(".hostels").toggle();
    });
    $("#register").click(function(){
        $("#sign-up").toggle();
        $(".login").toggle();
    });
    $("#sign").click(function(){
        $("#sign-up").toggle();
        $(".login").toggle();
    });
    
    

});

