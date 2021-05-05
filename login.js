function validate(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value
if( 
username=="ila"&& password=="mamtapecr" ||
username=="daniele"&& password=="Mamt69" ||
username=="mattia"&& password=="matti05" ||
username=="michele"&& password=="mikk05" ||
username=="christian"&& password=="chri05"){
    window.location.href = 'index 2.html'
} else{ 
    if(username=="kevin"&& password=="Kkevinvip8"){
        window.location.href = 'admin.html' 
    }else{
        
            alert("login failed");
    }
}  
}


