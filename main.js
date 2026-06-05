const message = document.getElementById('message');
const goldenTokenId = document.getElementById('golden-token');
const market = document.getElementById('market');
const exchange = document.getElementById('exchange');
const moneyId = document.getElementById('money');
const slotMachineUpgrade = document.getElementById('slotMachine-upgrade');
const friendUpgrade = document.getElementById('friend-upgrade');
const blackjackUpgrade = document.getElementById('blackjack-upgrade');
const rouletteUpgrade = document.getElementById('roulette-upgrade');
const increment = document.getElementById('increment');
const tokenId = document.getElementById('token');
var price = 1;
var money = 0;
var token = 0;
var basePriceUpgrades = [10, 10000, 50000, 1000000];
var incrementUpgrade = [0, 0, 0, 0];

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
}, 10);

//-------------- clicker -----------------
increment.addEventListener("click", wingardiumLeviosa);
function wingardiumLeviosa() {
    token++
}


//-------------- Golden Token -----------------

const gachaPool = [
    { name: "5 token", weight: 0.26, mult: 5 },  // 28% chance
    { name: "10 token", weight: 0.24, mult: 10 }, // 22% chance
    { name: "25 token", weight: 0.19, mult: 25 }, // 19% chance
    { name: "50 token", weight: 0.12, mult: 50 }, // 14% chance
    { name: "100 token", weight: 0.10, mult: 100 }, // 10% chance
    { name: "500 token", weight: 0.06, mult: 500 },// 6% chance
    { name: "-500 token", weight: 0.06, mult: -500 },// 6% chance
    { name: "1000 token", weight: 0.01, mult: 1000 } // 1% chance
];
function goldenToken(pool) {
    const random = Math.random();
    let cumulativeWeight = 0;

    for (const item of pool) {
        cumulativeWeight += item.weight;
        if (random < cumulativeWeight) {
            return item.mult;
        }
    }
}
function ouais() {
    console.log(goldenToken(gachaPool));
    var mult = goldenToken(gachaPool);
    a(mult);
}

function a(mult) {
    var multInterval = setInterval(() => token *= mult, 1000);
    setTimeout(() => clearInterval(multInterval), 10000);
}
goldenTokenId.addEventListener("click", ouais)

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


exchange.addEventListener("click", marketExchange);

function marketExchange() {
    money += Math.floor(token * price);
    token = 0;
    moneyId.innerHTML = `${money}`;
}

//-------------- upgrades -------------- 


// //friend ++

friendUpgrade.addEventListener("click", avadaKedavra)
var friendInterval = null;

function avadaKedavra() {

    if (money >= basePriceUpgrades[0]) {
        clearInterval(friendInterval);
        incrementUpgrade[0]++;
        friendInterval = setInterval(() => token += incrementUpgrade[0], 1000);
        money -= basePriceUpgrades[0];
        basePriceUpgrades[0] *= 1.1;
    }
}

// slot machines

slotMachineUpgrade.addEventListener("click", slotMachine)
var slotmachineInterval = null;

function slotMachine() {

    if (money >= basePriceUpgrades[1]) {
        clearInterval(slotmachineInterval);
        incrementUpgrade[1] += 100;
        slotmachineInterval = setInterval(() => token += incrementUpgrade[1], 1000);
        money -= basePriceUpgrades[1];
        basePriceUpgrades[1] *= 1.2;
    }
}
//blackjack

blackjackUpgrade.addEventListener("click", blackjack)
var blackjackInterval = null;

function blackjack() {

    if (money >= basePriceUpgrades[2]) {
        clearInterval(blackjackInterval);
        incrementUpgrade[2] += 1000;
        blackjackInterval = setInterval(() => token += incrementUpgrade[2], 1000);
        money -= basePriceUpgrades[2];
        basePriceUpgrades[2] *= 2;
    }
}
//roulette

rouletteUpgrade.addEventListener("click", roulette)
var rouletteInterval = null;

function roulette() {

    if (money >= basePriceUpgrades[3]) {
        clearInterval(rouletteInterval);
        incrementUpgrade[3] += 10000;
        rouletteInterval = setInterval(() => token += incrementUpgrade[3], 1000);
        money -= basePriceUpgrades[3];
        basePriceUpgrades[3] *= 2;
    }
}