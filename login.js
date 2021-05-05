function validate(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value
if(username=="kevin"&& password=="Kkevinvip8" 
    || username=="ila"&& password=="mamtapecr" 
   || username=="daniele" && password=="daniele05" ){
    window.location.href = 'index 2.html'
} else{
    alert("login failed"); 
    

}
}
