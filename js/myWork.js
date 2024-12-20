var testArray = [
    [
        "hallo",
        "test omschrijving",
        "img/cool.png"
    ],

    [
        "hallo2",
        "test omschrijving2",
        "img/cool.png2"
    ],

    [
        "hallo3",
        "test omschrijving3",
        "img/cool.png3"
    ],

    [
        "hallo4",
        "test omschrijving4",
        "img/cool.png4"
    ],

    [
        "hallo5",
        "test omschrijving5",
        "img/cool.png5"
    ],

    [
        "hallo6",
        "test omschrijving6",
        "img/cool.png6"
    ]
];

carro = new Carroussel(testArray, 3);

const leftCard = [
    document.getElementById("leftTitle"),
    document.getElementById("leftSubtext")
];

const centerCard = [
    document.getElementById("centerTitle"),
    document.getElementById("centerSubtext")
];

const rightCard = [
    document.getElementById("rightTitle"),
    document.getElementById("rightSubtext")
];

leftCard[0].textContent = carro.getActiveCards()[0].title;
leftCard[1].textContent = carro.getActiveCards()[0].disc;

centerCard[0].textContent = carro.getActiveCards()[1].title;
centerCard[1].textContent = carro.getActiveCards()[1].disc;

rightCard[0].textContent = carro.getActiveCards()[2].title;
rightCard[1].textContent = carro.getActiveCards()[2].disc;

function nextCard() {
    carro.nextCard();
    leftCard[0].textContent = carro.getActiveCards()[0].title;
    leftCard[1].textContent = carro.getActiveCards()[0].disc;

    centerCard[0].textContent = carro.getActiveCards()[1].title;
    centerCard[1].textContent = carro.getActiveCards()[1].disc;

    rightCard[0].textContent = carro.getActiveCards()[2].title;
    rightCard[1].textContent = carro.getActiveCards()[2].disc;
}

function prevCard(){
    carro.prevCard();
    leftCard[0].textContent = carro.getActiveCards()[0].title;
    leftCard[1].textContent = carro.getActiveCards()[0].disc;

    centerCard[0].textContent = carro.getActiveCards()[1].title;
    centerCard[1].textContent = carro.getActiveCards()[1].disc;

    rightCard[0].textContent = carro.getActiveCards()[2].title;
    rightCard[1].textContent = carro.getActiveCards()[2].disc;
}