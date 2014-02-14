var player={
	score :0,
	dateJour : Date(),
	//dateDernierClick : Date(),
	argent :0,
	xp:0,
	firstCo:0,
	moisClick:0,
	jourClick:0
};


function clickMoney(){
	//var anneeDernier=player.dateDernierClick.getYear();

	if((player.jourClick!= player.dateJour.getDate())|| (player.moisClick!= player.dateJour.getMonth())){
		player.jourClick=player.dateJour.getDate();
		player.moisClick=player.dateJour.getMonth();
		player.score++;
	//	player.dateDernierClick = new Date();
	}else{
		player.score--;
	}

    var e = document.getElementById("score");
    e.innerHTML = player.score;
    save_game();

}

function save_game() {
   localStorage['SaveChain'] = btoa(JSON.stringify(player));
}

function load_game() {

    if (!localStorage['SaveChain']) return;
    var save_data = JSON.parse(atob(localStorage['SaveChain']));
    player = save_data;
    update_view();
}

function update_view(){
	var e = document.getElementById("score");
    e.innerHTML = player.firstCo;
    calculDateJour();

	var e = document.getElementById("Date");
    e.innerHTML = 'Date du jour :' + player.dateJour;
    var e = document.getElementById("DateDernierClick");
    var mois = player.moisClick+1;
    e.innerHTML = 'Date du dernier Touch :' + player.jourClick +' / '+ mois ;

}

function calculDateJour(){
	player.dateJour= new Date(); 


}


load_game();