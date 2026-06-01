const message = document.getElementById('message');
var price = 1;
const market = document.getElementById('market');
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//timer pour le marché
setInterval(() => {
    price = getRandomArbitrary(5, 30) / 10;
    market.innerHTML = price;
}, 5000);

//gamble
const increment = document.getElementById('increment');
const tokenId = document.getElementById('token');
const friendUpgrade = document.getElementById('friend-upgrade');
var token = 0;
increment.addEventListener("click", wingardiumLeviosa);
friendUpgrade.addEventListener("click", avadaKedavra)

function wingardiumLeviosa() {
    token++
    setInterval(() => { tokenId.innerHTML = `${token} token`; }, 100);

}

//friend ++
function avadaKedavra() {
    if (token >= 10) {
        setInterval(() => token++, 1000);
    }

}
//gacha for artefact
function randObject() {
    //ouais test git push
}

//-------------- exchange -------------- 

const exchange = document.getElementById('exchange');

const money = document.getElementById('money');
exchange.addEventListener("click", marketExchange);

function marketExchange() {
    var moneyExchange = Math.floor(token * price);
    token = 0;
    money.innerHTML = `${moneyExchange}`;
}