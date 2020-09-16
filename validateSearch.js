function validateNum(){
    var x =document.forms["numSearch"]["num"].value;
    if(x<1||x>20){
        alert("Please enter a valid input");
       return false; 
    }

}

function validateName(){
    var letters=/^[A-Za-z]+$/;
    var x=document.forms["nameSearch"]["name"].value;
    if(x.length>20){
        alert("Please enter valid input");
        return false;
    }
    if(x.value.match(letters)){
        alert("Please enter valid input");
        return true;
    }
    if(x.value.match(letters)){
        alert("Please enter valid input");
        return false;
    }
}