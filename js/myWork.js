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

var destruct;

var cashedCards = []; // hoef niet elke keer identieke kaarten te maken
// methode: je hebt 3 kaarten om mee te beginnen dus ook 1,2,3 en dan als je op de + knop drukt moet er nieuwe kaart 
// gemaakt worden die de vorrige vervangt en dan de laatste kaart moet verwijdert en gecashed worden

var activeCards = [];

const cardContainer = document.getElementById("cardContainer");

var carro = new Carrousel(testArray, cardContainer);

// cashing the cards
for (var i = 0; i < carro.cardList.length; i++){
    cashedCards[i] = carro.cardList[i];
    console.log(carro.cardList[i].refId);
}

for (var ii = 0; ii < 3; ii++){
    carro.cardList[ii].createCard(cardContainer, ii);
    activeCards.push([carro.cardList[ii], carro.cardList[ii].refId])
}

cashedCards[3].createCard(cardContainer, cashedCards.refId);

function carUp() {
    destruct =  activeCards[0][0];
    destruct.destroyCard();
    activeCards.pop();
}

function carDown() {
    carro.setGroup('-');
}