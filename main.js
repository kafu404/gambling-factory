const message = document.getElementById('message');
var price = 1;
var money = 0;
const market = document.getElementById('market');
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//timer pour le marché
setInterval(() => {
    price = getRandomArbitrary(5, 31) / 10;
    market.innerHTML = price;
}, 1000);
//refresh token and money 
setInterval(() => {
    tokenId.innerHTML = `${token} token`;
    moneyId.innerHTML = `${Math.floor(money)}`;
}, 100);

const increment = document.getElementById('increment');
const tokenId = document.getElementById('token');

var token = 0;
increment.addEventListener("click", wingardiumLeviosa);

function wingardiumLeviosa() {
    token++
}


//-------------- gacha -----------------
function randObject() {
    //ouais test git push
}
///////////////////////////////////////////////
//à modifier
// const gachaPool = [
//     { name: "Common Sword", weight: 0.70 },   // 70% chance
//     { name: "Rare Shield", weight: 0.25 },    // 25% chance
//     { name: "Ultra Rare Dragon", weight: 0.05 } // 5% chance
// ];

// function rollGacha(pool) {
//     const random = Math.random(); // Generates number between 0 (inclusive) and 1 (exclusive)
//     let cumulativeWeight = 0;

//     for (const item of pool) {
//         cumulativeWeight += item.weight;
//         if (random < cumulativeWeight) {
//             return item.name; // Return the dropped item
//         }
//     }
// }
// console.log(rollGacha(gachaPool));
////////////////////////////////////////////////
//-------------- exchange -------------- 

const exchange = document.getElementById('exchange');

const moneyId = document.getElementById('money');
exchange.addEventListener("click", marketExchange);

function marketExchange() {
    money += Math.floor(token * price);
    token = 0;
    moneyId.innerHTML = `${money}`;
}

//-------------- upgrades -------------- 
const friendUpgrade = document.getElementById('friend-upgrade');
friendUpgrade.addEventListener("click", avadaKedavra)
var base = [10, 20, 30, 40];
var incrementUpgrade = [1, 1, 1, 1];
var start = false;
var friendInterval = null;
// //friend ++
function avadaKedavra() {

    if (money >= base[0]) {
        if (start == true) {
            clearInterval(friendInterval);
            incrementUpgrade[0]++;
            console.log(incrementUpgrade);
            // le clearinterval ne fonctionne pas, il cumule au lieux de s'enlever
        }
        friendInterval = setInterval(() => token += incrementUpgrade[0], 1000);

        money -= base[0];
        base[0] *= 1.1;
        console.log(base[0]);
        start = true;
    }
}