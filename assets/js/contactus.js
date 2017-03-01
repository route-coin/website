function sendEmail()
{
    
    if(document.getElementById('myname').value != "" && document.getElementById('email').value != "" && document.getElementById('comments').value != "")
    {
        emailjs.send("gmail","routecoin_contactus",{
        to_name: "RouteCoin Guys",
        from_name: document.getElementById('myname').value, 
        from_website: document.getElementById('website').value, 
        from_email: document.getElementById('email').value, 
        message_html: document.getElementById('comments').value
        })
        .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById('myname').value = "";
            document.getElementById('website').value = "";
            document.getElementById('email').value = "";
            document.getElementById('comments').value = "";
            document.getElementById("alertSuccessMessage").style.display = 'block';
            document.getElementById("alertRequiredMessage").style.display = 'none';
        }, 
        function(error) {
            console.log("FAILED", error);
            document.getElementById("alertFailedMessage").style.display = 'block';
            document.getElementById("alertRequiredMessage").style.display = 'none';
        }
        );
    }
    else
    {
        document.getElementById("alertRequiredMessage").style.display = 'block';
    }
}