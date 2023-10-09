function validate(){
   var username=document.getElementById("username").value;
   var password=document.getElementById("password").value;
   if(username=="User" && password=="hlo12345")
   {
       window.location.assign("kl.html")
       alert("successfull !")
   }
   else{
       alert("invalid")
    }
}
