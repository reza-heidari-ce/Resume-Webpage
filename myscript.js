function SubmitSuccesfull(){
    if(confirm("Are you sure?")){
        alert("Your message has been recorded");
        location.href="contact.html";
    }
    else{
        return false;
    }
}