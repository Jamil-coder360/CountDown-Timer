const day = document.querySelector("#day span");
const hours = document.querySelector("#hours span");
const minutes = document.querySelector("#minutes span")
const seconds = document.querySelector("#seconds span");
const offerEnd = document.querySelector(".offer-end");

const offerEndDate = new Date();
offerEndDate.setMinutes(offerEndDate.getMinutes()+3);
function updateCountdown(){
    const now = new Date();
    const diff = offerEndDate - now;   
        if (diff <= 0) {
        offerEnd.innerText = "⛔ Offer Ended";
        day.innerText = hours.innerText = minutes.innerText = seconds.innerText = "0";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    day.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    offerEnd.innerText = "Offer ends on: " + offerEndDate.toDateString();
}
// updateCountdown();
setInterval(updateCountdown, 1000);

// console.log(offerEndDate);