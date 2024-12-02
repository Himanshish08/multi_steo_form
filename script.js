var infos=document.querySelectorAll(".inp");

var nextstep1=document.querySelector(".next1");
var step1=document.querySelector(".step1");
var step2=document.querySelector(".step2");
var numcircle1=document.querySelector("#numcircle1");
var numcircle2=document.querySelector("#numcircle2");

var nextstep2=document.querySelector(".next2");
var step3=document.querySelector(".step3");
var numcircle3=document.querySelector("#numcircle3");
var nextstep3=document.querySelector(".next3");
var step4=document.querySelector(".step4");
var step5=document.querySelector(".step5");
var numcircle4=document.querySelector("#numcircle4");
var back2=document.querySelector(".back2");
var back3=document.querySelector(".back3");
var confirm1=document.querySelector(".confirm");

var card1=document.querySelector("#card1");
var card2=document.querySelector("#card2");
var card3=document.querySelector("#card3");

let selected = document.querySelector(".box_check .top .selected");
let select_type = document.querySelector(".box_check .top .select_type");
var ruppee=document.querySelector(".box_check .top .ruppee");


var bottom1=document.querySelector(".box_check .bottom #bottom1");
var bottom2=document.querySelector(".box_check .bottom #bottom2");
var bottom3=document.querySelector(".box_check .bottom #bottom3");

var tab=document.querySelector(".tab");
var month=document.querySelector(".month");
var year=document.querySelector(".year");
var p1=document.querySelector("#card1 p");
var p2=document.querySelector("#card2 p");
var p3=document.querySelector("#card3 p");
var h5s=document.querySelectorAll(".card1 h5");


var h51=document.querySelector('.h51');
var h52=document.querySelector('.h52');
var h53=document.querySelector('.h53');
var back1=document.querySelector(".back1");

var choice1=document.querySelector("#choice1");
var checkbox1=document.querySelector("#choice1 input");

var choice2=document.querySelector("#choice2");
var checkbox2=document.querySelector("#choice2 input");

var choice3=document.querySelector("#choice3");
var checkbox3=document.querySelector("#choice3 input");
var choice="Monthly";
var card_choice="";

let total_cost_month=0;
let total_cost_year=0;
var total_per=document.querySelector(".total .total_per");
var total_cost=document.querySelector(".total .total_cost");

var box_check=document.querySelector(".step4 .box_check");
var cost1=document.querySelector(".box_check #bottom1 #cost1");
var cost2=document.querySelector(".box_check #bottom2 #cost2");
var cost3=document.querySelector(".box_check #bottom3 #cost3");

var change=document.querySelector(".change");
nextstep1.addEventListener("click",function(){
    let allField=true;//all fields are filled
    infos.forEach((info)=>{
            var par=info.closest(".info1");
            var errp=par.querySelector(".error");
        if(info.value.length===0){
            info.style.border="1px solid hsl(354, 84%, 57%)";
            errp.style.display="initial";
            allField=false;//not all fields are not filled
        }
        else{
            info.style.border="1px solid hsl(229, 24%, 87%)";
            errp.style.display="none";
        }
    });
    if(allField==true){
        step1.style.display="none";
        step2.style.display="initial";
        numcircle1.style.backgroundColor="transparent";
        numcircle1.style.color="hsl(0, 0%, 100%)";
        
        numcircle2.style.backgroundColor="hsl(206, 94%, 87%)";
        numcircle2.style.color="hsl(213, 96%, 18%)";

    };
    
});

card1.addEventListener("click",function(){
    card1.style.backgroundColor="hsl(217, 100%, 97%)";
    card2.style.backgroundColor="transparent";
    card3.style.backgroundColor="transparent";
    card1.style.border="1px solid hsl(243, 100%, 62%)";
    card2.style.border="1px solid hsl(229, 24%, 87%)";
    card3.style.border="1px solid hsl(229, 24%, 87%)";
    card_choice="Arcade";
    selected.innerHTML=card_choice;
});

card2.addEventListener("click",function(){
    card2.style.backgroundColor="hsl(217, 100%, 97%)";
    card1.style.backgroundColor="transparent";
    card3.style.backgroundColor="transparent";
    card2.style.border="1px solid hsl(243, 100%, 62%)";
    card1.style.border="1px solid hsl(229, 24%, 87%)";
    card3.style.border="1px solid hsl(229, 24%, 87%)";
    card_choice="Advanced";
    selected.innerHTML=card_choice;
});

card3.addEventListener("click",function(){
    card3.style.backgroundColor="hsl(217, 100%, 97%)";
    card2.style.backgroundColor="transparent";
    card1.style.backgroundColor="transparent";
    card3.style.border="1px solid hsl(243, 100%, 62%)";
    card2.style.border="1px solid hsl(229, 24%, 87%)";
    card1.style.border="1px solid hsl(229, 24%, 87%)";
    card_choice="Pro";
    selected.innerHTML=card_choice;
});

tab.addEventListener("click",function(){
   if(getComputedStyle(tab).justifyContent === "flex-start"){
     tab.style.justifyContent="flex-end";
     month.style.color="hsl(231, 11%, 63%)";
     year.style.color="hsl(213, 96%, 18%)";
     p1.textContent="$90/yr";
     p2.textContent="$120/yr";
     p3.textContent="$150/yr";
     h5s.forEach(function(h5){
        h5.style.display="initial";
     });
    choice="Yearly";
    select_type.innerHTML="(Yearly)";
    total_per.innerHTML="Total (per year)";
    if(card_choice=="Arcade"){
        ruppee.innerHTML="$90/yr";
        total_cost_year+=90;
    }else if(card_choice=="Advanced"){
        ruppee.innerHTML="$120/yr";
        total_cost_year+=120;
    }else{
        ruppee.innerHTML="$150/yr";
        total_cost_year+=150;
    }
        cost1.innerHTML="+$10/yr";
        cost2.innerHTML="+$20/yr";
        cost3.innerHTML="+$20/yr";
    }   
    else if(getComputedStyle(tab).justifyContent === "flex-end"){
    tab.style.justifyContent="flex-start";
    year.style.color="hsl(231, 11%, 63%)";
    month.style.color="hsl(213, 96%, 18%)";
    p1.textContent="$9/mo";
    p2.textContent="$12/mo";
    p3.textContent="$15/mo";
    h5s.forEach(function(h5){
        h5.style.display="none";
    })
    choice="Monthly";
    select_type.innerHTML="(Monthly)";
    total_per.innerHTML="Total (per month)";
        if(card_choice=="Arcade"){
            total_cost_month+=9;
            ruppee.innerHTML="$9/mo";    
        }else if(card_choice=="Advanced"){
            total_cost_month+=12;
            ruppee.innerHTML="$12/mo";
            
        }else {
            total_cost_month+=15;
            ruppee.innerHTML="$15/mo";
            
        }
        cost1.innerHTML="+$1/mo";
        cost2.innerHTML="+$2/mo";
        cost3.innerHTML="+$2/mo";
   }
});

back1.addEventListener("click",function(){
        step2.style.display="none";
        step1.style.display="initial";
        numcircle2.style.backgroundColor="transparent";
        numcircle2.style.color="hsl(0, 0%, 100%)";
        
        numcircle1.style.backgroundColor="hsl(206, 94%, 87%)";
        numcircle1.style.color="hsl(213, 96%, 18%)";
        
});
nextstep2.addEventListener("click",function(){
        step2.style.display="none";
        step3.style.display="initial";
        if(choice==="Monthly"){   
            h51.textContent="+$1/mo";
            h52.textContent="+$2/mo";
            h53.textContent="+$2/mo";
        }else{
            h51.textContent="+$10/yr";
            h52.textContent="+$20/yr";
            h53.textContent="+$20/yr";
        }
        numcircle2.style.backgroundColor="transparent";
        numcircle2.style.color="hsl(0, 0%, 100%)";
        
        numcircle3.style.backgroundColor="hsl(206, 94%, 87%)";
        numcircle3.style.color="hsl(213, 96%, 18%)";
});



choice1.addEventListener("click", function() {
    checkbox1.checked = !checkbox1.checked;
    if (checkbox1.checked) {
        choice1.style.backgroundColor="hsl(217, 100%, 97%)";
        choice1.style.border="1px solid hsl(243, 100%, 62%)";
        bottom1.style.display="initial";
        if(choice==="Monthly"){
            total_cost_month+=1;
            total_cost.innerHTML=`+$${total_cost_month}/mo`;
        }else if(choice==="Yearly"){
            total_cost_year+=10;
            total_cost.innerHTML=`+$${total_cost_year}/yr`;
        }
    } else {
        choice1.style.backgroundColor="transparent";
        choice1.style.border="1px solid hsl(229, 24%, 87%)";
        bottom1.style.display="none";
        if(choice==="Monthly"){
            total_cost_month-=1;
            total_cost.innerHTML=`+$${total_cost_month}/mo`;
        }else if(choice==="Yearly"){
            total_cost_year-=10;
            total_cost.innerHTML=`+$${total_cost_year}/yr`;
            
        }
    }
});



choice2.addEventListener("click", function() {
    checkbox2.checked = !checkbox2.checked;
    if (checkbox2.checked) {
        choice2.style.backgroundColor="hsl(217, 100%, 97%)";
        choice2.style.border="1px solid hsl(243, 100%, 62%)";
        bottom2.style.display="initial";
        if(choice==="Monthly"){
            total_cost_month+=2;
            total_cost.innerHTML=`+$${total_cost_month}/mo`;
        }else if(choice==="Yearly"){
            total_cost_year+=20;
            total_cost.innerHTML=`+$${total_cost_year}/yr`;
        }
    } else {
        choice2.style.backgroundColor="transparent";
        choice2.style.border="1px solid hsl(229, 24%, 87%)";
        bottom2.style.display="none";
        if(choice==="Monthly"){
            total_cost_month-=2;
            total_cost.innerHTML=`+$${total_cost_month}/mo`;
        }else if(choice==="Yearly"){
            total_cost_year-=20;
            total_cost.innerHTML=`+$${total_cost_year}/yr`;
        }
    }
});
choice3.addEventListener("click", function() {
    checkbox3.checked = !checkbox3.checked;
    if (checkbox3.checked) {
        choice3.style.backgroundColor="hsl(217, 100%, 97%)";
        choice3.style.border="1px solid hsl(243, 100%, 62%)";
        bottom3.style.display="initial";
        if(choice==="Monthly"){
            total_cost_month+=2;
            total_cost.innerHTML=`+$${total_cost_month}/mo`;
        }else if(choice==="Yearly"){
            total_cost_year+=20;
            total_cost.innerHTML=`+$${total_cost_year}/yr`;
        }
    } else {
        choice3.style.backgroundColor="transparent";
        choice3.style.border="1px solid hsl(229, 24%, 87%)";
        bottom3.style.display="none";
        if(choice==="Monthly"){
            total_cost_month-=2;
            total_cost.innerHTML=`+$${total_cost_month}/mo`;
        }else if(choice==="Yearly"){
            total_cost_year-=20;
            total_cost.innerHTML=`+$${total_cost_year}/yr`;
        }
    }
});
change.addEventListener("click",function(){
    step4.style.display="none";
    step2.style.display="initial";
    numcircle4.style.backgroundColor="transparent";
    numcircle4.style.color="hsl(0, 0%, 100%)";
        
    numcircle2.style.backgroundColor="hsl(206, 94%, 87%)";
    numcircle2.style.color="hsl(213, 96%, 18%)";
})
back2.addEventListener("click",function(){
        step3.style.display="none";
        step2.style.display="block";
        numcircle3.style.backgroundColor="transparent";
        numcircle3.style.color="hsl(0, 0%, 100%)";
        
        numcircle2.style.backgroundColor="hsl(206, 94%, 87%)";
        numcircle2.style.color="hsl(213, 96%, 18%)";
});
nextstep3.addEventListener("click",function(){
        step3.style.display="none";
        step4.style.display="initial";
        numcircle3.style.backgroundColor="transparent";
        numcircle3.style.color="hsl(0, 0%, 100%)";
        
        numcircle4.style.backgroundColor="hsl(206, 94%, 87%)";
        numcircle4.style.color="hsl(213, 96%, 18%)";
    
});
back3.addEventListener("click",function(){
    step4.style.display="none";
    step3.style.display="block";
    numcircle4.style.backgroundColor="transparent";
    numcircle4.style.color="hsl(0, 0%, 100%)";
    
    numcircle3.style.backgroundColor="hsl(206, 94%, 87%)";
    numcircle3.style.color="hsl(213, 96%, 18%)";
});
confirm1.addEventListener("click",function(){
    step4.style.display="none";
    step5.style.display="initial";
});










