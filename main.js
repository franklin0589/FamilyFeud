let xButton=document.getElementById("xbut");
let scoreBox=document.getElementById("score");
xButton.addEventListener('click', wrongAnswer );
let xNum=1;

function wrongAnswer (){
   let xContainer=document.createElement("div");
   xContainer.id="xBox";
   
   for(i=0;i<xNum;i++){
       let img=document.createElement("img");
       img.src="Family_Feud_Strike_Indicator.png";
       img.class="x";
       img.style.width= "150px";
       img.style.height="250px";
       img.style.marginLeft="50px";
       img.alt="X";
       xContainer.appendChild(img);

   }
   xNum++;
   if(xNum>3){
       xNum=1;
   }
   document.getElementById("mainPage").appendChild(xContainer);
   setTimeout(function(){
    document.getElementById("mainPage").removeChild(xContainer);
   },1000);
    

}
let panel= document.getElementById('panelBoard')
for(i=0;i<10;i++){
    let answerDiv=document.createElement('div');
    answerDiv.className="answer";
    answerDiv.innerHTML=" ";
    panel.appendChild(answerDiv);
}
let answer=document.getElementsByClassName('answer');
let finalArray=[];
function answerList(i){
let answerArray1=["Doctor 58","Medicine 11","Surgeon 11","Biomed. Eng. 3", "Business 3"];//Easy
let answerArray2=["Spiderman 26","Avengers 11","The Dark Knight 11","Wonderman 11", "Logan 3", "Iron Man 3"];//Medium
let answerArray3=["John Adams 52","George H.W. Bush 12","James Buchanan 12","Herbert Hoover 12", "Jimmy Carter 10", "Franklin Pierce 8", "James K Polk 4"];//Hard
let answerArray4=["SIA 17","A&P 14","Chem 11","DOHC 11", "Biology 9", "Medterm 5"]; //Easy
let answerArray5=["Appendix 29","Gallbladder 23","Spleen 20","Bladder 12", "Kidney/Liver 6"];//Medium
let answerArray6=["Uganda 74","Uruguay 68","Uzekistan 28","Ukraine 8", "United States 6"];//Hard
let answerArray7=["Chem. room 29","MMC 17","Senior lounge 14","Cafeteria 11"];//Easy
let answerArray8=["Lil Uzi Vert 14","Lil Pump 14","Lil Yachty 11","Lil Wayne 6", "Lil Peep 6"];//Medium
let answerArray9=["Pneumonoultramicroscopicsilicovolcanoconiosis 44","Ankylosing Spondylitis 20","Gastroenterodueodenectomy 12","Sphygmomanometer 12", "Otorhinolaryngologist 12", "Anaphylaxis 6","Myelomeningocele 3"];//Hard
let answerArray10=["Burpees 37","Push Ups 14","Pulls ups 9","Dead Bugs 6", "Muscle Ups 6"];//Medium

switch(i){
    case 1:
        finalArray=answerArray1;
    break;
    case 2:
        finalArray=answerArray2;
    break;
    case 3:
        finalArray=answerArray3;
    break;
    case 4:
        finalArray=answerArray4;
    break;
    case 5:
        finalArray=answerArray5;
    break;
    case 6:
        finalArray=answerArray6;
    break;
    case 7:
        finalArray=answerArray7;
    break;
    case 8:
        finalArray=answerArray8;
    break;
    case 9:
        finalArray=answerArray9;
    break;
    case 10:
        finalArray=answerArray10;
    break;
    default:
        finalArray=answerArray1;
        
}

for (i=0; i<finalArray.length;i++){
    
    answer[i].innerHTML=i+1;
    answer[i].setAttribute('onclick', "this.innerHTML = '"+finalArray[i]+"';");
    
    
}   
}
answerList(1);

let nextRoundButton=document.getElementById("nextRound");
let round=1;
nextRoundButton.addEventListener('click', function(){
    let panel= document.getElementById('panelBoard')
    document.getElementById("mainPage").removeChild(panel);
    let newPanel= document.createElement('div');
    newPanel.id="panelBoard";
    let buttonContainer= document.getElementById("buttonContainer")
    document.getElementById("mainPage").insertBefore(newPanel,buttonContainer);
    for(i=0;i<10;i++){
      let answerDiv=document.createElement('div');
        answerDiv.className="answer";
        answerDiv.innerHTML=" ";
        newPanel.appendChild(answerDiv);
    }
    round++;
    answerList(round);
    
});