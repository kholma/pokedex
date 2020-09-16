function validateNum(){
    var x =document.forms["numSearch"]["num"].value;
    if(x<1||x>20){
       return false; 
    }

}

function validateName(){
    var letters=/^[A-Za-z]+$/;
    var x=document.forms["nameSearch"]["name"].value;
    if(x.length>20){
        return false;
    }
    if(x.value.match(letters)){
        return true;
    }
    if(x.value.match(letters)){
        return false;
    }
}