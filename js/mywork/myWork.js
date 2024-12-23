var testArray;
var carro;
var xhttp;

const leftCard = [
    document.getElementById("leftTitle"),
    document.getElementById("leftSubtext"),
    document.getElementById("leftImage")
];

const centerCard = [
    document.getElementById("centerTitle"),
    document.getElementById("centerSubtext"),
    document.getElementById("centerImage")
];

const rightCard = [
    document.getElementById("rightTitle"),
    document.getElementById("rightSubtext"),
    document.getElementById("rightImage")
];

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        testArray = this.response;
        testArray = JSON.parse(testArray);
        go();
    }
};
xhttp.open("POST", "../Portfolio2.0/php/my-work/my-work.php");
xhttp.send("q");

function go() {
    carro = new Carroussel(testArray, 3);
    setCards()
}

function nextCard() {
    carro.nextCard();
    setCards();
}

function prevCard() {
    carro.prevCard();
    setCards();
}

function setCards(){
    leftCard[0].textContent = carro.getActiveCards()[0].title;
    leftCard[1].textContent = carro.getActiveCards()[0].disc;
    leftCard[2].src = carro.getActiveCards()[0].img;
    leftCard[2].alt = carro.getActiveCards()[0].alt;

    centerCard[0].textContent = carro.getActiveCards()[1].title;
    centerCard[1].textContent = carro.getActiveCards()[1].disc;
    centerCard[2].src = carro.getActiveCards()[1].img;
    centerCard[2].alt = carro.getActiveCards()[1].alt;

    rightCard[0].textContent = carro.getActiveCards()[2].title;
    rightCard[1].textContent = carro.getActiveCards()[2].disc;
    rightCard[2].src = carro.getActiveCards()[2].img;
    rightCard[2].alt = carro.getActiveCards()[2].alt;
}