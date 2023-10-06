function send_Data(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("textarea");
   
    (function(){
        emailjs.init("tGTYSMlo2xlyTrX-7");
    })();
    
    function send_mail () {
    var params = {
        from: `${name.value}`,
        to:`${email.value}`,
        message:`
        ${message.value}
        `,
    }
    var service_id = "service_c5uj7sr";
    var templateID = "template_6n9u8mf";
    emailjs
    .send(service_id, templateID, params)
    .then((res)=>{
        console.log("email sent");
        $("#message_send_info").fadeIn()
        $("#message_send_info").fadeOut()
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    send_mail ()
}

export{send_Data}

