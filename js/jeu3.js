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
	niveau:1,
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

function choixGars(){
	player.gender=1;
	save_game(); 
}
function choixFille(){
	player.gender=2;
	save_game(); 
}

function choixNom(){
	var e = document.getElementById("name").value;
	player.nom=e;
	save_game();
}

function save_game() {
   localStorage['SaveChain'] = btoa(JSON.stringify(player));
}

function load_game() {

    if (!localStorage['SaveChain']) return;
    var save_data = JSON.parse(atob(localStorage['SaveChain']));
    player = save_data;

    if(player.nom != ""){
    	document.location.href="../index.html"
    }
    if(player.gender!=0){
    	document.location.href="creation-name.html"
    }

}


load_game();