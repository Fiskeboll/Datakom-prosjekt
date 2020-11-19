const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index/7+1)  + 's';
            }

        });
        // Burger Animation
        burger.classList.toggle('toggle')

    });

}



navSlide();


//Dark mode
function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");

    var navbar = document.getElementById('navbar');
    navbar.classList.toggle("darkModeNav");

    var tipsbtn = document.getElementById("tipsButton");
    tipsbtn.classList.toggle("darkModeTips");

}


//Strings containing tips to the different tasks
var counter = 0;
const tips101 = "Har du riktig verdi på resistansene? Du skal måle over en 10kΩ resistans, den andre resistansen skal være 1kΩ.\n"
const tips105 = "Har du brukt en ADC-pinne?\n"
const tips102 = "Har du husket å definere verdien for spenning som en float?\n"
const tips103 = "Har du husket at avlest verdi er en integer? \n"
const tips104 = "Omgjøringsformel for spenning: input_voltage = (analog_value) / 1024.0 \n"

const tips201 = "Har du riktig formel for å regne ut temperatur? Det finnes mye tips og hjelp på nettet som kan hjelpe med dette."
const tips202 = "Temperaturen skal være et heltall, altså en integer. "

const tips301 = "Har du riktig formel for å regne ut spenning over photoresistoren?"
const tips302 = "Spenningen over photoresistoren skal være et heltall, altså integer"


//Tips for the first task. The counter registers each click on the tips button and
// ads a new tip with each click.
function tipsFunction1() {

    if (counter == 1) {
        var x = document.getElementById("tips").innerHTML = "<li>"+tips101+"</li>";
    }
    if (counter == 2){
        var x = document.getElementById("tips").innerHTML +="<li>"+tips105+"</li>";
    }
    if (counter == 3){
        var x = document.getElementById("tips").innerHTML +="<li>"+tips102+"</li>";
    }
    if (counter == 4){
        var x = document.getElementById("tips").innerHTML += "<li>"+tips103+"</li>";
    }
    if (counter == 5){
        var x = document.getElementById("tips").innerHTML += "<li>"+tips104+"</li>";
    }
    if (counter == 6){
        var img = document.createElement("img");

        img.src = "arduino spenningsdeling.png";
        var src = document.getElementById("tips");

        src.appendChild(img);
    }
    counter += 1;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

//Similar functions for tips in tasks 2 and 3.

function tipsFunction2() {

    if (counter == 1) {
        var x = document.getElementById("tips").innerHTML = "<li>"+tips201+"</li>";
    }
    if (counter == 2){
        var x = document.getElementById("tips").innerHTML +="<li>"+tips202+"</li>";
    }
    if (counter == 3){
        var x = document.getElementById("tips").innerHTML +="<li>"+tips105+"</li>";
    }
    if (counter == 4){
        var img = document.createElement("img");

        img.src = "arduino temperatursensor.png";
        var src = document.getElementById("tips");

        src.appendChild(img);
    }
    counter += 1;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

function tipsFunction3() {

    if (counter == 1) {
        var x = document.getElementById("tips").innerHTML = "<li>"+tips301+"</li>";
    }
    if (counter == 2){
        var x = document.getElementById("tips").innerHTML +="<li>"+tips302+"</li>";
    }
    if (counter == 3){
        var x = document.getElementById("tips").innerHTML +="<li>"+tips105+"</li>";
    }
    if (counter == 4){
        var img = document.createElement("img");

        img.src = "arduino fotorestistor.png";
        var src = document.getElementById("tips");

        src.appendChild(img);
    }
    counter += 1;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

tipsFunction1();
tipsFunction2();
tipsFunction3();


