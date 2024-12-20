var testArray;
var data = [];
var carro;

var xhttp;

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        testArray = this.response;
        testArray = JSON.parse(testArray);
        console.log(testArray);
        go();
    }
};
xhttp.open("POST", "../Portfolio2.0/php/my-work/my-work.php");
xhttp.send("q");


function go() {
    carro = new Carroussel(testArray, 3);

    leftCard[0].textContent = carro.getActiveCards()[0].title;
    leftCard[1].textContent = carro.getActiveCards()[0].disc;
    leftCard[2].src = "http://localhost/portfolio2.0/" + carro.getActiveCards()[0].img

    centerCard[0].textContent = carro.getActiveCards()[1].title;
    centerCard[1].textContent = carro.getActiveCards()[1].disc;

    rightCard[0].textContent = carro.getActiveCards()[2].title;
    rightCard[1].textContent = carro.getActiveCards()[2].disc;

}

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

function nextCard() {
    carro.nextCard();
    leftCard[0].textContent = carro.getActiveCards()[0].title;
    leftCard[1].textContent = carro.getActiveCards()[0].disc;

    centerCard[0].textContent = carro.getActiveCards()[1].title;
    centerCard[1].textContent = carro.getActiveCards()[1].disc;

    rightCard[0].textContent = carro.getActiveCards()[2].title;
    rightCard[1].textContent = carro.getActiveCards()[2].disc;
}

function prevCard() {
    carro.prevCard();
    leftCard[0].textContent = carro.getActiveCards()[0].title;
    leftCard[1].textContent = carro.getActiveCards()[0].disc;

    centerCard[0].textContent = carro.getActiveCards()[1].title;
    centerCard[1].textContent = carro.getActiveCards()[1].disc;

    rightCard[0].textContent = carro.getActiveCards()[2].title;
    rightCard[1].textContent = carro.getActiveCards()[2].disc;
}