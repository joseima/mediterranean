const aliment = document.querySelectorAll("img.aliment");
const remove = document.querySelectorAll("img.remove");
const menuBut =  document.getElementById("menu");
const courtain = document.querySelector("div.courtain");
const closeMenu = document.querySelector(".closemenu");
const barSweet = document.querySelector(".barsweet");
const barWeekly = document.querySelector(".barweekly");
const barDaily = document.querySelector(".bardaily");
const barBasicDaily = document.querySelector(".barbasicdaily");

let sweetPortion = 0;
let weeklyPortion = 0;
let basicPortion = 0;
let basicDailyPortion = 0;
let acumWeekly = 14;
let restWeekly = 0;
let acumDaily = 8;
let restDaily = 0;
let acumBasicDaily = 5;
let restBasicDaily = 0;

const addPortion = (element) => {
	let alimentPortion = element.getAttribute("data-portion");
	let spanPortion = document.querySelector(`span.${alimentPortion}`);
	switch (alimentPortion) {
		  case "sweetPortion":
		    	sweetPortion++;
		    	spanPortion.innerHTML=`${sweetPortion}`;
		    	sweetIncrease ();
		    break;
		  case "weeklyPortion":
		    	weeklyPortion++;
		    	spanPortion.innerHTML=`${weeklyPortion}`;
		    	weeklyIncrease ();		    	
		    break;
		  case "basicPortion":
		    	basicPortion++;
		    	spanPortion.innerHTML=`${basicPortion}`;
		    	dailyIncrease();		    	
		    break;		    		    
		  case "basicDailyPortion":
		    	basicDailyPortion++;
		    	spanPortion.innerHTML=`${basicDailyPortion}`;	
		    	basicDailyIncrease();	    	
		    break;
		}	
} 

const removePortion = (element) => {
	let alimentPortion = element.getAttribute("data-portion");
	let spanPortion = document.querySelector(`span.${alimentPortion}`);
	switch (alimentPortion) {
		  case "sweetPortion":
		    	sweetPortion--;
		    	spanPortion.innerHTML=`${sweetPortion}`;
		    	if (sweetPortion === 0) {
		    		removeGraf(element);
		    		sweetDecrease ();
		    	}
		    break;
		  case "weeklyPortion":
		    	if (weeklyPortion > 0) {
		    		weeklyPortion--;
		    	}
		  		spanPortion.innerHTML=`${weeklyPortion}`;			    	
	    		removeGraf(element);
	    		weeklyDecrease ();
		    break;
		  case "basicPortion":
		    	if (basicPortion > 0) {
		    		basicPortion--;
		    	}
		    	spanPortion.innerHTML=`${basicPortion}`;
		    	removeGraf(element);
		    	dailyDecrease();
		    		    	
		    break;		    		    
		  case "basicDailyPortion":
		    	if (basicDailyPortion > 0) {
		    		basicDailyPortion--; 
		    	}
		    	spanPortion.innerHTML=`${basicDailyPortion}`;
		    	removeGraf(element);
		    	basicDailyDecrease();
		    break;
		}
} 


const addGraf = (element) => {
		const alimentType = element.getAttribute("data-meal");
		const iconGraf = document.querySelector("."+ alimentType);
		iconGraf.style.display = "block";
	}

const removeGraf = (element) => {
	const alimentType = element.getAttribute("data-meal");
	const iconGraf = document.querySelector("."+ alimentType);
	iconGraf.style.display = "none";
}

const sweetIncrease = () => {
	barSweet.style.width = '100%';
}
const sweetDecrease = () => {
	barSweet.style.width = '0%';
}
const weeklyIncrease = () => {
	let coefWeekly = acumWeekly * weeklyPortion;
	barWeekly.style.width = coefWeekly + "%";
	restWeekly = coefWeekly;
}
const weeklyDecrease = () => {
	let coefWeekly =  restWeekly - acumWeekly;
	barWeekly.style.width = coefWeekly + "%";
	restWeekly = coefWeekly;
}
const dailyIncrease = () => {
	let coefDaily = acumDaily * basicPortion;
	barDaily.style.width = coefDaily + "%";
	restDaily = coefDaily;
}
const dailyDecrease = () => {
	let coefDaily =  restDaily - acumDaily;
	barDaily.style.width = coefDaily + "%";
	restDaily = coefDaily;
}
const basicDailyIncrease = () => {
	let coefBasicDaily = acumBasicDaily * basicDailyPortion;
	barBasicDaily.style.width = coefBasicDaily + "%";
	restBasicDaily = coefBasicDaily;
}
const basicDailyDecrease = () => {
	let coefBasicDaily =  restBasicDaily - acumBasicDaily;
	barBasicDaily.style.width = coefBasicDaily + "%";
	restBasicDaily = coefBasicDaily;
}

aliment.forEach( (element) => {
    element.addEventListener("click", () => {
       		addGraf(element);
       		addPortion(element);
    });
});


remove.forEach( (element) => {
    element.addEventListener("click", () => {
       		removePortion(element);
    });
});

menuBut.addEventListener("click", () => {
    courtain.classList.add("courtainon");
 });

closeMenu.addEventListener("click", () => {
    courtain.classList.remove("courtainon");
 });

