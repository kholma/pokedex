function validateNum(){
    var x =document.forms["numSearch"]["num"].value;
    if(x<1||x>20){
       return false; 
    }

}