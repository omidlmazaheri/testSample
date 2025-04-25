
function aut() {
  let uname=  document.getElementById("uname").value;

   let psw= document.getElementById("psw").value;

   if(uname==="admin" && psw==="123"){
    alert("welcome!");
   }else{
    alert("something goes wrong!");
   }

}