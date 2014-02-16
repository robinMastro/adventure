var player={
	score :0,
	dateJour : Date(),
	//dateDernierClick : Date(),
	argent :0,
	xp:0,
	firstCo:0,
	moisClick:0,
	jourClick:0,
	annulationClick:0,
	jourConsecutifs:0,
	niveau:0
};


function clickMoney(){
	//var anneeDernier=player.dateDernierClick.getYear();
	calculDateJour();
	if((player.jourClick!= player.dateJour.getDate())|| (player.moisClick!= player.dateJour.getMonth())|| player.annulationClick==1){
		var ancienJour = player.jourClick;
		var ancienMois = player.moisClick;
		player.jourClick=player.dateJour.getDate();
		player.moisClick=player.dateJour.getMonth();
		
		player.score= player.score + player.jourConsecutifs+1;
		player.xp = player.xp + player.jourConsecutifs+1;
		if(player.xp > player.niveau * 10){
			player.xp=0;
			player.niveau++;
		}
		if((player.moisClick==ancienMois && player.jourClick==ancienJour+1)||(player.moisClick==ancienMois+1 && player.jourClick==1)||player.annulationClick==1){
			player.jourConsecutifs++;
		}else{
			player.jourConsecutifs=0;
		}
		player.annulationClick=0;
	//	player.dateDernierClick = new Date();
	}else{
		player.score= player.score - player.jourConsecutifs;
		player.xp = player.xp- player.jourConsecutifs;
		if(player.xp <0){
			player.xp=(player.niveau-1)*10 + player.xp;
			player.niveau--;
		}
		player.jourConsecutifs--;
		if(player.jourConsecutifs<0){
			player.jourConsecutifs=0;
		}

		player.annulationClick=1;
	}

    var e = document.getElementById("score");
    e.innerHTML = player.score;
    save_game();
    update_view();

}

function save_game() {
   localStorage['SaveChain'] = btoa(JSON.stringify(player));
}

function load_game() {
	 calculDateJour();

    if (!localStorage['SaveChain']) return;
    var save_data = JSON.parse(atob(localStorage['SaveChain']));
    player = save_data;
    update_view();
}

function update_view(){
	var e = document.getElementById("score");
    e.innerHTML = player.score;
    calculDateJour();

	var e = document.getElementById("Date");
    e.innerHTML = 'Date du jour :' + player.dateJour;
    var e = document.getElementById("DateDernierClick");
    var mois = player.moisClick+1;
    e.innerHTML = 'Date du dernier Touch :' + player.jourClick +' / '+ mois ;
    var e = document.getElementById("level");
    e.innerHTML='<p>Level <span>'+ player.niveau + '</span></p>'
    var e = document.getElementById("experience");
    e.innerHTML= player.xp;
    var e = document.getElementById("needExperience");
    var xpNeeded = player.niveau *10 - player.xp;
    e.innerHTML=  xpNeeded + 'left to level up';
}

function calculDateJour(){
	player.dateJour= new Date(); 


}


load_game();