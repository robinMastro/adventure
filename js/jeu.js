var player={
	score :0
}


function clickMoney(){
	player.score++;

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
    e.innerHTML = player.score;

}


load_game();