var div=document.createElement("div");
var node=document.createTextNode("Search Results:");

div.appendChild(node);
document.getElementById("namebutton").appendChild(div);

var unorderedList=document.createElement("UL");
div.appendChild(unorderedList);
unorderedList.setAttribute("id","searchUL");

var li1=document.createElement("LI");
unorderedList.appendChild(li1);
var p1=document.createElement("p");
var p1name=document.createTextNode("Bulbasaur");
p1.appendChild(p1name);
li1.appendChild(p1);
var p1info=document.createTextNode("Number: 1, Rarity: four, Evolution: one, Charge Move: Sludge Bomb");
li1.appendChild(p1info);
var img1=document.createElement("IMG");
img1.src="pokemon/1.png";
img1.width="50";
p1.appendChild(img1);

var li2=document.createElement("LI");
unorderedList.appendChild(li2);
var p2=document.createElement("p");
var p2name=document.createTextNode("Ivysaur");
p2.appendChild(p2name);
li2.appendChild(p2);
var p2info=document.createTextNode("Number: 2, Rarity: five, Evolution: two, Charge Move: Sludge Bomb");
li2.appendChild(p2info);
var img2=document.createElement("IMG");
img2.src="pokemon/2.png";
img2.width="50";
p2.appendChild(img2);

var li3=document.createElement("LI");
unorderedList.appendChild(li3);
var p3=document.createElement("p");
var p3name=document.createTextNode("Venusaur");
p3.appendChild(p3name);
li3.appendChild(p3);
var p3info=document.createTextNode("Number: 3, Rarity: six, Evolution: three, Charge Move: Sludge bomb");
li3.appendChild(p3info);
var img3=document.createElement("IMG");
img3.src="pokemon/3.png";
img3.width="50";
p3.appendChild(img3);

var li4=document.createElement("LI");
unorderedList.appendChild(li4);
var p4=document.createElement("p");
var p4name=document.createTextNode("Charmander");
p4.appendChild(p4name);
li4.appendChild(p4);
var p4info=document.createTextNode("Number: 4, Rarity: four, Evolution: one, Charge Move: Flame Burst");
li4.appendChild(p4);
var img4=document.createElement("IMG");
img4.src="pokemon/4.png";
img4.width="50";
p4.appendChild(img4);

var li5=document.createElement("LI");
unorderedList.appendChild(li5);
var p5=document.createElement("p");
var p5name=document.createTextNode("Charmeleon");
p5.appendChild(p5name);
li5.appendChild(p5);
var p5info=document.createTextNode("Number: 5, Rarity: five, Evolution: two, Charge Move: Flame Burst");
li5.appendChild(p5info);
var img5=document.createElement("IMG");
img5.src="pokemon/5.png";
img5.width="50";
p5.appendChild(img5);

var li6=document.createElement("LI");
unorderedList.appendChild(li6);
var p6=document.createElement("p");
var p6name=document.createTextNode("Charizard");
p6.appendChild(p6name);
li6.appendChild(p6);
var p6info=document.createTextNode("Number: 6, Rarity: six, Evolution: three, Charge Move: Fire Blast");
li6.appendChild(p6info);
var img6=document.createElement("IMG");
img6.src="pokemon/6.png";
img6.width="50";
p6.appendChild(img6);

var li7=document.createElement("LI");
unorderedList.appendChild(li7);
var p7=document.createElement("p");
var p7name=document.createTextNode("Squirtle");
p7.appendChild(p7name);
li7.appendChild(p7);
var p7info=document.createTextNode("Number: 7, Rarity: four, Evolution: one, Charge Move: Aqua Jet");
li7.appendChild(p7info);
var img7=document.createElement("IMG");
img7.src="pokemon/7.png";
img7.width="50";
p7.appendChild(img7);

var li8=document.createElement("LI");
unorderedList.appendChild(li8);
var p8=document.createElement("p");
var p8name=document.createTextNode("Wartortle");
p8.appendChild(p8name);
li8.appendChild(p8);
var p8info=document.createTextNode("Number: 8, Rarity: five, Evolution: two, Charge Move: Aqua Jet");
li8.appendChild(p8info);
var img8=document.createElement("IMG");
img8.src="pokemon/8.png";
img8.width="50";
p8.appendChild(img8);

var li9=document.createElement("LI");
unorderedList.appendChild(li9);
var p9=document.createElement("p");
var p9name=document.createTextNode("Blastoise");
p9.appendChild(p9name);
li9.appendChild(p9);
var p9info=document.createTextNode("Number: 9, Rarity: six, Evolution: three, Charge Move: Icea Beam");
li9.appendChild(p9info);
var img9=document.createElement("IMG");
img9.src="pokemon/9.png";
img9.width="50";
p9.appendChild(img9);

var li10=document.createElement("LI");
unorderedList.appendChild(li10);
var p10=document.createElement("p");
var p10name=document.createTextNode("Caterpie");
p10.appendChild(p10name);
li10.appendChild(p10);
var p10info=document.createTextNode("Number: 10, Rarity: one, Evolution: one, Charge Move: Struggle");
li10.appendChild(p10info);
var img10=document.createElement("IMG");
img10.src="pokemon/10.png";
img10.width="50";
p10.appendChild(img10);

var li11=document.createElement("LI");
unorderedList.appendChild(li11);
var p11=document.createElement("p");
var p11name=document.createTextNode("Metapod");
p11.appendChild(p11name);
li11.appendChild(p11);
var p11info=document.createTextNode("Number: 11, Rarity: three, Evolution: two, Charge Move: Struggle");
li11.appendChild(p11info);
var img11=document.createElement("IMG");
img11.src="pokemon/11.png";
img11.width="50";
p11.appendChild(img11);

var li12=document.createElement("LI");
unorderedList.appendChild(li12);
var p12=document.createElement("p");
var p12name=document.createTextNode("Butterfree");
p12.appendChild(p12name);
li12.appendChild(p12);
var p12info=document.createTextNode("Number: 12, Rarity: four, Evolution: three, Charge Move: Psychic");
li12.appendChild(p12info);
var img12=document.createElement("IMG");
img12.src="pokemon/12.png";
img12.width="50";
p12.appendChild(img12);

var li13=document.createElement("LI");
unorderedList.appendChild(li13);
var p13=document.createElement("p");
var p13name=document.createTextNode("Weedle");
p13.appendChild(p13name);
li13.appendChild(p13);
var p13info=document.createTextNode("Number: 13, Rarity: one, Evolution: one, Charge Move: Struggle");
li13.appendChild(p13info);
var img13=document.createElement("IMG");
img13.src="pokemon/13.png";
img13.width="50";
p13.appendChild(img13);

var li14=document.createElement("LI");
unorderedList.appendChild(li14);
var p14=document.createElement("p");
var p14name=document.createTextNode("Kakuna");
p14.appendChild(p14name);
li14.appendChild(p14);
var p14info=document.createTextNode("Number: 14, Rarity: three, Evolution: two, Charge Move: Struggle");
li14.appendChild(p14info);
var img14=document.createElement("IMG");
img14.src="pokemon/14.png";
img14.width="50";
p14.appendChild(img14);

var li15=document.createElement("LI");
unorderedList.appendChild(li15);
var p15=document.createElement("p");
var p15name=document.createTextNode("Beedrill");
p15.appendChild(p15name);
li15.appendChild(p15);
var p15info=document.createTextNode("Number: 15, Rarity: four, Evolution: three, Charge Move: Aerial Ace");
li15.appendChild(p15info);
var img15=document.createElement("IMG");
img15.src="pokemon/15.png";
img15.width="50";
p15.appendChild(img15);

var li16=document.createElement("LI");
unorderedList.appendChild(li16);
var p16=document.createElement("p");
var p16name=document.createTextNode("Pidgey");
p16.appendChild(p16name);
li16.appendChild(p16);
var p16info=document.createTextNode("Number: 16, Rarity: one, Evolution: one, Charge Move: Twister");
li16.appendChild(p16info);
var img16=document.createElement("IMG");
img16.src="pokemon/16.png";
img16.width="50";
p16.appendChild(img16);

var li17=document.createElement("LI");
unorderedList.appendChild(li17);
var p17=document.createElement("p");
var p17name=document.createTextNode("Pidgeotto");
p17.appendChild(p17name);
li17.appendChild(p17);
var p17info=document.createTextNode("Number: 17, Rarity: three, Evolution: two, Charge Move: Twister");
li17.appendChild(p17info);
var img17=document.createElement("IMG");
img17.src="pokemon/17.png";
img17.width="50";
p17.appendChild(img17);

var li18=document.createElement("LI");
unorderedList.appendChild(li18);
var p18=document.createElement("p");
var p18name=document.createTextNode("Pidgeot");
p18.appendChild(p18name);
li18.appendChild(p18);
var p18info=document.createTextNode("Number: 18, Rarity: four, Evolution: three, Charge Move: Hurricane");
li18.appendChild(p18info);
var img18=document.createElement("IMG");
img18.src="pokemon/18.png";
img18.width="50";
p18.appendChild(img18);

var li19=document.createElement("LI");
unorderedList.appendChild(li19);
var p19=document.createElement("p");
var p19name=document.createTextNode("Rattata");
p19.appendChild(p19name);
li19.appendChild(p19);
var p19info=document.createTextNode("Number: 19, Rarity: one, Evolution: one, Charge Move: Dig");
li19.appendChild(p19info);
var img19=document.createElement("IMG");
img19.src="pokemon/19.png";
img19.width="50";
p19.appendChild(img19);


var li20=document.createElement("LI");
unorderedList.appendChild(li20);
var p20=document.createElement("p");
var p20name=document.createTextNode("Raticate");
p20.appendChild(p20name);
li20.appendChild(p20);
var p20info=document.createTextNode("Number: 20, Rarity: four, Evolution: two, Charge move: Dig");
li20.appendChild(p20info);
var img20=document.createElement("IMG");
img20.src="pokemon/20.png";
img20.width="50";
p20.appendChild(img20);


function filterNameList(){
let nameSearch, lowerSearch, ul, li, nameArray, nameValue;
nameSearch=document.forms["nameSearch"]["name"];
lowerSearch=nameSearch.value.toLowerCase();
ul=document.getElementById("searchUL");
li=ul.getElementsByTagName("p");

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

