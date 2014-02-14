var player={
	score :0
}


function clickMoney(){
	player.score++;

    var e = document.getElementById("score");
    e.innerHTML = player.score;



}