document.querySelector("button").addEventListener('click', function() {
    var plr1 = Math.floor(Math.random() * 6);
    var plr2 = Math.floor(Math.random() * 6);
    var imgs = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    document.querySelectorAll('img')[0].setAttribute("src", imgs[plr1]);
    document.querySelectorAll('img')[1].setAttribute("src", imgs[plr2]);;
    if (plr1 > plr2) {
        document.querySelector('h1').textContent = '🎲Player1 Wins';
    } else if (plr2 > plr1) {
        document.querySelector('h1').textContent = 'Player2 Wins🎲';
    } else {
        document.querySelector('h1').textContent = "🎲It's a Draw!!🎲"
    }
});