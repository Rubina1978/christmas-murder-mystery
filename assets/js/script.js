
const barbara = document.getElementById("barbara");
const frosty = document.getElementById("frosty");
const gumdrom = document.getElementById("gumdrop");
const headElf = document.getElementById("head-elf");
const mrFircone = document.getElementById("mr-fircone");
const mrsClaus = document.getElementById("mrs-claus");
const patch = document.getElementById("patch");
const policeman = document.getElementById("policeman");
const rudolph= document.getElementById("rudolph");
const santa = document.getElementById("santa");
const stableBoy = document.getElementById("stable-boy");
const tinyTim = document.getElementById("tiny-tim");

let character = ["barbara", "frosty", "gumdrop", "head-elf", "mr-fircone", "mrs-claus", "patch", "policeman", "rudolph", "santa", "scrooge", "stable-boy", "tiny-tim"];

let submitBtn = document.getElementById("submitBtn");
let suspectInput = document.getElementById("suspect");

let guiltySuspect = "scrooge";  // the one who is guilty

submitBtn.addEventListener('click', () => {
    const selected = suspectInput.value.trim().toLowerCase();

    if (selected === guiltySuspect) {
        alert("it was me");
    } else {
        alert("it wasn't me");
    }
});




