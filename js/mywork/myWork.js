var testArray;
var carro;
var xhttp;

var discs = [
    "Dit Java-programma is een implementatie van het spel Mastermind, waarbij de speler een geheime code van vier kleuren moet raden. De belangrijkste functionaliteiten zijn: het invoeren van een geheime code door de speler, waarbij de code uit vier kleuren bestaat, aangeduid door letters (bijv. 'y' voor geel, 'b' voor blauw); het geven van feedback na elke poging, waarbij het programma aangeeft of de kleur op de juiste plaats zit, of de kleur in de code voorkomt maar op de verkeerde plaats staat; en het bieden van een maximaal aantal beurten, waarbij de speler maximaal 10 beurten heeft om de juiste code te raden. De belangrijkste functies van het programma zijn: stringToChars(String s), die de ingevoerde string converteert naar een char-array voor verwerking, en compare(char input, char code), die de ingevoerde kleur vergelijkt met de geheime code om te bepalen of ze gelijk zijn. Dit was mijn eerste Java-opdracht in de Software Development opleiding, waarin ik gewerkt heb met loops, conditionals en gebruikersinvoer.",
    "Dit programma is een geavanceerde versie van Mastermind voor één of twee spelers, waarbij de speler probeert een geheime code van vier kleuren te raden binnen een bepaald aantal beurten. De geheime code kan willekeurig worden gegenereerd of door de tweede speler worden ingevoerd. Na elke gok krijgt de speler feedback over de juistheid van de gok. Het spel eindigt wanneer de speler de code raadt of het aantal beurten is bereikt.",
    "Dit project was mijn eerste HTML/CSS-opdracht binnen de opleiding Websites, waarbij de opdracht was om een gegeven ontwerp na te maken. Het betreft een website voor Pink-Goose, een platform voor gedecentraliseerde autonome organisaties (DAO's). De taak bestond uit het recreëren van de lay-out en styling volgens het aangeleverde ontwerp, inclusief elementen zoals een navigatiebalk, interactieve knoppen, en verschillende secties (zoals Home, Learn, About en Contact). De website is responsive en maakt gebruik van externe Google Fonts voor typografie. Dit project was een uitstekende oefening in het toepassen van HTML en CSS om een visueel aantrekkelijk en functionele website te bouwen volgens een bestaand ontwerp.",
    "De Cafetaria Kribbe website is een project in ontwikkeling voor mijn software developer opleiding. Het maakt gebruik van Tailwind CSS voor de styling, PHP voor de server-side logica, en een database voor het beheren van menu-items en bestellingen. Deze website is mijn derde grote opdracht en dient als introductie in CRUD-systemen (Create, Read, Update, Delete). Klanten kunnen eenvoudig het menu bekijken, bestellingen plaatsen en het cafetaria beheren via een gebruiksvriendelijke interface. Dit project helpt me mijn vaardigheden in front-end en back-end ontwikkeling te verbeteren.",
    "Themed 2048 is een unieke variant van het klassieke 2048-puzzelspel, ontwikkeld in Unity met C#. Het spel biedt de klassieke mechanics van het originele 2048, waarbij je blokken met gelijke waarden combineert om steeds grotere getallen te maken, maar met een creatieve twist het heeft verschillende thema’s die de visuele ervaring verbeteren. In plaats van de standaardblokken, heb ik op maat gemaakte graphics toegevoegd die de ervaring zowel visueel als interactief interessanter maken",
    "De game maakt gebruik van Unity's krachtige game-ontwikkelingstools, waaronder de ingebouwde physics-engine en inputsystemen, en is volledig geschreven in C# om optimale prestaties en flexibiliteit te garanderen. Dit project gaf me de kans om mijn vaardigheden in object-georiënteerd programmeren, gebruikersinterface-ontwerpen en game-ontwikkeling verder te ontwikkelen.",
    "Deze website is mijn tweede grote opdracht voor de software developer opleiding. Het portfolio is gebouwd met Tailwind CSS voor de styling, PHP voor de server-side logica, en maakt gebruik van een database voor het opslaan van gegevens. Er is ook veel JavaScript gebruikt om interactieve elementen, zoals een carrousel en modals, te implementeren. Deze website toont mijn werk, ervaringen en biedt een contactformulier waarmee bezoekers met mij in contact kunnen komen. Het project helpt me verder mijn vaardigheden in front-end en back-end ontwikkeling te versterken."
]

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
xhttp.open("POST", "http://nataroajaouin.online/php/my-work/my-work.php");
xhttp.send("q");


function go() {
    for (var o = 0; o < 6; o++) {
        testArray[o].long_disc = discs[o];
    }
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
            carro.getActiveCards()[0].long_disc
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
            carro.getActiveCards()[1].long_disc
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
            carro.getActiveCards()[2].long_disc
        ]);
    }
}

