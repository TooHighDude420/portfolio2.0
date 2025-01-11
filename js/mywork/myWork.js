var testArray;
var carro;
var xhttp;

// making the cards into objects
const leftCardTotal = {
    Ent: document.getElementById("leftCardEnt"),
    Title: document.getElementById("leftTitle"),
    SubText: document.getElementById("leftSubtext"),
    Image: document.getElementById("leftImage")
}

const centerCardTotal = {
    Ent: document.getElementById("centerCardEnt"),
    Title: document.getElementById("centerTitle"),
    SubText: document.getElementById("centerSubtext"),
    Image: document.getElementById("centerImage")
}

const rightCardTotal = {
    Ent: document.getElementById("rightCardEnt"),
    Title: document.getElementById("rightTitle"),
    SubText: document.getElementById("rightSubtext"),
    Image: document.getElementById("rightImage")
}

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        testArray = this.response;
        testArray = JSON.parse(testArray);
        go();
    }
};

//reset before pushing (add ../ before!!!)
xhttp.open("POST", "php/my-work/my-work.php");
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

function setCards() {
    leftCardTotal.Title.textContent = carro.getActiveCards()[0].title;
    leftCardTotal.SubText.textContent = carro.getActiveCards()[0].disc;
    leftCardTotal.Image.src = carro.getActiveCards()[0].img;
    leftCardTotal.Image.alt = carro.getActiveCards()[0].alt;
    leftCardTotal.Ent.onclick = function () {
        setModalContent([
            carro.getActiveCards()[0].title,
            carro.getActiveCards()[0].img,
            carro.getActiveCards()[0].long_disc,
            carro.getActiveCards()[0].down_path,
            carro.getActiveCards()[0].file_name
        ]);
    }

    centerCardTotal.Title.textContent = carro.getActiveCards()[1].title;
    centerCardTotal.SubText.textContent = carro.getActiveCards()[1].disc;
    centerCardTotal.Image.src = carro.getActiveCards()[1].img;
    centerCardTotal.Image.alt = carro.getActiveCards()[1].alt;
    centerCardTotal.Ent.onclick = function () {
        setModalContent([
            carro.getActiveCards()[1].title,
            carro.getActiveCards()[1].img,
            carro.getActiveCards()[1].long_disc,
            carro.getActiveCards()[1].down_path,
            carro.getActiveCards()[1].file_name
        ]);
    }

    rightCardTotal.Title.textContent = carro.getActiveCards()[2].title;
    rightCardTotal.SubText.textContent = carro.getActiveCards()[2].disc;
    rightCardTotal.Image.src = carro.getActiveCards()[2].img;
    rightCardTotal.Image.alt = carro.getActiveCards()[2].alt;
    rightCardTotal.Ent.onclick = function () {
        setModalContent([
            carro.getActiveCards()[2].title,
            carro.getActiveCards()[2].img,
            carro.getActiveCards()[2].long_disc,
            carro.getActiveCards()[2].down_path,
            carro.getActiveCards()[2].file_name
        ]);
    }
}

