let xButton=document.getElementById("xbut");
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

function answerList(i){
let answerArray1=["Lion 24","Bear 22","Fish 21","Bird 18", "Frog 15"];
let answerArray2=["Dolly Parton 28","Willie Nelson 17","Garth Brooks 16","George Strait 13", "Johnny Cash 11","Carrie Underwood 9"];
let answerArray3=["England 46","Egypt 25","Ethopia 19","Ecuador 10"];
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
    default:
        
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