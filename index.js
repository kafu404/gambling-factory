const increment = document.getElementById('increment');
const tokenId = document.getElementById('token');
const friendUpgrade = document.getElementById('friend-upgrade');
var token = 0;
increment.addEventListener("click", wingardiumLeviosa);
friendUpgrade.addEventListener("click", avadaKedavra)

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




//gamble
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

function randObject() {

}
