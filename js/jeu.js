var player={
	score :0,
	dateJour : Date(),
	argent :0,
	xp:0,
	firstCo:0,
	moisClick:0,
	jourClick:0,
	annulationClick:0,
	jourConsecutifs:0,
	niveau:0,
	habitude : Array(),
	shoesG : 0,
	pantsG : 0,
	hautG : 0,
	hatG : 0,
	shoesX : 0,
	pantsX : 0,
	hautX : 0,
	hatX : 0,
	shoes:1,
	pants : 1,
	haut :1,
	hat :1, 
	nom :"",
	gender: 0
};



function clickMoney(){
	//var anneeDernier=player.dateDernierClick.getYear();
	calculDateJour();
	if((player.jourClick!= player.dateJour.getDate())|| (player.moisClick!= player.dateJour.getMonth())|| player.annulationClick==1){
		var ancienJour = player.jourClick;
		var ancienMois = player.moisClick;
		player.jourClick=player.dateJour.getDate();
		player.moisClick=player.dateJour.getMonth();

		//Gain d'argent
		if(player.shoesG + player.pantsG + player.hautG + player.hatG != 0){
			player.score= player.score + (player.jourConsecutifs+1) + Math.round((player.jourConsecutifs+1)*(player.shoesG + player.pantsG + player.hautG + player.hatG)/100);
		}else{
			player.score= player.score + (player.jourConsecutifs+1);
		}

		//Gain d'xp
		if(player.shoesX + player.pantsX + player.hautX + player.hatX != 0){
			player.xp = player.xp +(player.jourConsecutifs+1)+ Math.round((player.jourConsecutifs+1)*(player.shoesX + player.pantsX + player.hautX + player.hatX)/100);
		}else{
			player.xp = player.xp + player.jourConsecutifs+1;
		}



		if(player.xp >= player.niveau * 10){
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
		if(player.xp!=0){
			if(player.shoesG + player.pantsG + player.hautG + player.hatG != 0){
				player.score= player.score - (player.jourConsecutifs)- Math.round((player.jourConsecutifs)*(player.shoesG + player.pantsG + player.hautG + player.hatG)/100);
			}else{
				player.score= player.score -(player.jourConsecutifs);
			}

			if(player.shoesX + player.pantsX + player.hautX + player.hatX != 0){
				player.xp = player.xp- (player.jourConsecutifs) - Math.round((player.jourConsecutifs)*(player.shoesX + player.pantsX + player.hautX + player.hatX)/100);
			}else{
				player.xp= player.xp -(player.jourConsecutifs);
			}
			


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

    var e = document.getElementById("speudo");
    e.innerHTML= '<p>' + player.nom + '</p> ';

    var e = document.getElementById("habitude");
    e.innerHTML= '';
    for (var i=0;i<player.habitude.length;i++){
    	e.innerHTML= e.innerHTML + '<option value=' + player.habitude[i] +'> '+ player.habitude[i]+ '</option>';
	}

	var e = document.getElementById("personnage");
	if(player.gender==2){
		e.innerHTML= '<img class="personnage-item" id="base" src="../img/character-items/base.svg" alt="base" /><img class="personnage-item" id="pants" src="../img/character-items/pants-' + player.pants +'.svg" alt="pants" /> <img class="personnage-item" id="top" src="../img/character-items/top-'+ player.haut +'.svg" alt="top" /><img class="personnage-item" id="hair" src="../img/character-items/hairstyles/hairgirl-1.svg" alt="hair" /><img class="personnage-item" id="shoes" src="../img/character-items/shoes-'+player.shoes+ '.svg" alt="shoes" />';
	}else{
		e.innerHTML= '<img class="personnage-item" id="base" src="../img/character-items/base.svg" alt="base" /><img class="personnage-item" id="pants" src="../img/character-items/pants-' + player.pants +'.svg" alt="pants" /> <img class="personnage-item" id="top" src="../img/character-items/top-'+ player.haut +'.svg" alt="top" /><img class="personnage-item" id="hair" src="../img/character-items/hairstyles/hairboy-1.svg" alt="hair" /><img class="personnage-item" id="shoes" src="../img/character-items/shoes-'+player.shoes+ '.svg" alt="shoes" />';

	}
	//Ajout du personnage


}

function ajoutHabit() {
	var e = document.getElementById("habitudeAAjouter").value;
	if(e.length> 3){

		player.habitude.push(e);
		save_game();
		update_view();
	}else{
		document.getElementById("habitudeAAjouter").value = "";
	}
}

function deleteHabit(){
	var e =document.getElementById('habitude').value;
	for (var i=0;i<player.habitude.length;i++){
    	if(e==player.habitude[i]){
    		player.habitude.splice(i,1);
    	}
	}
	save_game();
	update_view();
}

function calculDateJour(){
	player.dateJour= new Date(); 


}


load_game();