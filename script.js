var div=document.createElement("div");
var node=document.createTextNode("Search Results:");

div.appendChild(node);
document.getElementById("namebutton").appendChild(div);

var unorderedList=document.createElement("UL");
div.appendChild(unorderedList);
unorderedList.setAttribute("id","searchUL");

var li1=document.createElement("LI");
unorderedList.appendChild(li1);
var p1=document.createTextNode("Bulbasaur- Number: 1");
li1.appendChild(p1);
var p1num=document.createTextNode("Number: 1");


var li2=document.createElement("LI");
var p2=document.createTextNode("Ivysaur- Number: 2");
unorderedList.appendChild(li2);
li2.appendChild(p2);

var li3=document.createElement("LI");
var p3=document.createTextNode("Venusaur- Number:3");
unorderedList.appendChild(li3);
li3.appendChild(p3);

var li4=document.createElement("LI");
var p4=document.createTextNode("Charmander- Number:4");
unorderedList.appendChild(li4);
li4.appendChild(p4);

var li5=document.createElement("LI");
var p5=document.createTextNode("Charmeleon- Number:5");
unorderedList.appendChild(li5);
li5.appendChild(p5);

var li6=document.createElement("LI");
var p6=document.createTextNode("Charizard- Number:6");
unorderedList.appendChild(li6);
li6.appendChild(p6);

var li7=document.createElement("LI");
var p7=document.createTextNode("Squirtle- Number:7");
unorderedList.appendChild(li7);
li7.appendChild(p7);

var li8=document.createElement("LI");
var p8=document.createTextNode("Wartortle- Number:8");
unorderedList.appendChild(li8);
li8.appendChild(p8);

var li9=document.createElement("LI");
var p9=document.createTextNode("Blastoise- Number:9");
unorderedList.appendChild(li9);
li9.appendChild(p9);

var li10=document.createElement("LI");
var p10=document.createTextNode("Caterpie- Number:10");
unorderedList.appendChild(li10);
li10.appendChild(p10);

var li11=document.createElement("LI");
var p11=document.createTextNode("Metapod- Number:11");
unorderedList.appendChild(li11);
li11.appendChild(p11);

var li12=document.createElement("LI");
var p12=document.createTextNode("Butterfree- Number:12");
unorderedList.appendChild(li12);
li12.appendChild(p12);

var li13=document.createElement("LI");
var p13=document.createTextNode("Weedle- Number:13");
unorderedList.appendChild(li13);
li13.appendChild(p13);

var li14=document.createElement("LI");
var p14=document.createTextNode("Kakuna- Number:14");
unorderedList.appendChild(li14);
li14.appendChild(p14);

var li15=document.createElement("LI");
var p15=document.createTextNode("Beedrill- Number:15");
unorderedList.appendChild(li15);
li15.appendChild(p15);

var li16=document.createElement("LI");
var p16=document.createTextNode("Pidgey- Number:16");
unorderedList.appendChild(li16);
li16.appendChild(p16);

var li17=document.createElement("LI");
var p17=document.createTextNode("Pidgeotto- Number:17");
unorderedList.appendChild(li17);
li17.appendChild(p17);

var li18=document.createElement("LI");
var p18=document.createTextNode("Pidgeot- Number:18");
unorderedList.appendChild(li18);
li18.appendChild(p18);

var li19=document.createElement("LI");
var p19=document.createTextNode("Rattata- Number:19");
unorderedList.appendChild(li19);
li19.appendChild(p19);


var li20=document.createElement("LI");
var p20=document.createTextNode("Raticate- Number:20");
unorderedList.appendChild(li20);
li20.appendChild(p20);


function filterNameList(){
let nameSearch, lowerSearch, ul, li, nameArray, nameValue;
nameSearch=document.forms["nameSearch"]["name"];
lowerSearch=nameSearch.value.toLowerCase();
ul=document.getElementById("searchUL");
li=ul.getElementsByTagName("LI");

for(let i=0;i<li.length;i++){
   nameArray=li[i];
   nameValue=nameArray.textContent||nameArray.innerText;
   if(nameValue.toLowerCase().indexOf(lowerSearch) > -1){
      li[i].style.display="";
   }
   else{
      li[i].style.display="none";
   }
}
}

function validateName(){
    let display=[];
     var letters=/^[A-Za-z]+$/;
     var x=document.forms["nameSearch"]["name"].value;
     
     
     if(x.length>20){
         alert("Please enter valid input");
         return false;
     }
     if(x.search(letters)){
         alert("Please enter a valid input.");
 return true;
     }
     
     if(x.value==""){
         alert("Please enter a valid input");
         return false;
     }
 
 }


function filterNumList(){
    let numSearch, lowerSearch, ul, li, numArray, numValue;
    numSearch=document.forms["numSearch"]["num"];
    lowerSearch=numSearch.value.toLowerCase();
    ul=document.getElementById("searchUL");
    li=ul.getElementsByTagName("LI");
    
    for(let i=0;i<li.length;i++){
       numArray=li[i];
       numValue=numArray.textContent||numArray.innerText;
       if(numValue.toLowerCase().indexOf(lowerSearch) > -1){
          li[i].style.display="";
       }
       else{
          li[i].style.display="none";
       }
    }
    }

function validateNum(){
   let display=[];
    var x =document.forms["numSearch"]["num"].value;
   
    if(x<1){
        alert("Please enter a valid input");
       return false; 
    }
    if (x>20){
        alert("Please enter a valid input");
        return false;
    }
}

