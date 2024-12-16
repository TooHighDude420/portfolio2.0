var container;
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
var car;

function startCarrousel(){
    const cardContainer = document.getElementById("cardContainer");
    container = cardContainer.children[1];
    car = new Carrousel(testArray, container);
}

function carUp(){
    car.setGroup('+');
}

function carDown(){
    car.setGroup('-');
}



