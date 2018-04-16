var EmailValue=document.getElementById('InputEmail')
var PasswordDiv=document.getElementById('password')
var PasswordInput=document.getElementById('InputPassword')
var EmailRegex= new RegExp("[a-z]+\.{1}[a-z]+@(viacesi.fr|cesi.fr)")
var PasswordRegex= new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{2,})")



EmailValue.addEventListener('keyup',verif)
PasswordDiv.addEventListener('keyup',verif)

function verif(){

   
      
   
    if(!document.getElementById('notification')){

        Newdiv=document.createElement("div");
        Newdiv.setAttribute("id",'notification');           
        PasswordDiv.appendChild(Newdiv);


   }

   else{
   
    var notification=document.getElementById('notification')

   
       if( EmailRegex.test(EmailValue.value)==true && PasswordRegex.test(PasswordInput.value)==true  ){

        console.log('testif')
           notification.className="alert alert-success";
           notification.innerHTML="connexion disponible bonne visite";
           document.getElementById('connection').removeAttribute("disabled")
       }
       else{
        
           notification.className="alert alert-danger";
           notification.innerHTML="Votre email ou votre mot de passe ne sont pas valides ";
           document.getElementById('connection').setAttribute("disabled","");
           console.log('else1')
       }

   }

}

