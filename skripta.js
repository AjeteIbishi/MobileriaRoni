//window.alert("Mobileria-Roni ofron zbritje 18-20 janar");


//incializimi i konstanteve per butona te filtert dhe fotografi te kategorive
const butoni = document.querySelectorAll(".button");
const image = document.querySelectorAll(".image");

//kushtezimi i cili grumbullon te gjitha fotografit e kategoribve permes klases image dhe i dallon apo i kategorizon ne baze klases femij , nese prindi eshte klase eshte image ateher femiu i prindit eshte kuzhina  dmth mirret apo zgjedhet image kuzhina ,tashkudo qe ka klase te thirru image kuzhina,kudoo qe ka klase te thirrum image kuzhina shfaqet veten ajo ndersa tjerat jo.

//kushtezimi per filtrim dhe  kategorzimin e fotografive
for (i = 0; i < butoni.length; i++) //nese jane 4 buton ne faqe sic eshte te gjitha,kuzhina ... i grumbullon te gjithe
{
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        image.forEach((image) => {
            if (filter === "tegjitha") {
                image.style.display = "block";
            } else {
                if (image.classList.contains(filter)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            }
        })
    })
}


//ndryshimi i fotografive tek sektori rreth nesh
function mousimbi() {
    document.getElementById("first-photo").style.display = "none";
}
function mousijasht(){
    document.getElementById("second-photo").style.display = "block";
}

//shfaqja e contetit tek sektori i informatave
function shfaqPunimet() {
    document.getElementById("shfaq").style.display = "block";
     document.getElementById("shfaq-button").style.display = 'none';
}

//ndryshimi i titullit kryesor tek sektori hero
function ndryshotitullin() {
    document.getElementById("titulli-i-ri").innerHTML = "Modelet e fundit i gjeni tek ne!";
}


//funksioni per te ekzekutuar animacionin e kartave pra paraqitjen e back-ut
const cards = document.querySelectorAll(".card")
function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//llogaritja e cmimit per meter
const metri = document.getElementById("input1");
const cmimimeter = document.getElementById("input2");

function ndryshoInputin2() {
    cmimimeter.value = metri.value * 300;
}

metri.addEventListener("input", ndryshoInputin2);

// validimi apo kushtezimi i fushave kontaktuse
const emriInput = document.getElementById("emriInput");
const emailInput = document.getElementById("emailInput");
const pershkrimiInput = document.getElementById("pershkrimiInput");
const sendButton = document.getElementById("send-button");

function dergo() { //operatori OSE || operatori DHE &
    if (emriInput.value === "" || emailInput.value === "" || pershkrimiInput.value === "") {
        window.alert("Ju lutem mbusheni te gjitha format!");
    } else {
        sendButton.value = "Duke u derguar...";
    }
}

sendButton.addEventListener("click", dergo);

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();