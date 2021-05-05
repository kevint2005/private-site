function validate(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value
if( username=="ila"&& password=="mamtapecr" ){
    window.location.href = 'index 2.html'
} else{ 
    if(username=="kevin"&& password=="Kkevinvip8"){
        window.location.href = 'admin.html' 
    }else{
        
            alert("login failed");
    }
}  
}


