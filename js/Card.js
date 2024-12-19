class Card{
    refId;
    cardOuter;
    cardInner;
    link;
    title;
    subtext;

    constructor(name, disc, refId){    
        this.refId = refId;

        this.cardOuter = Object.assign(document.createElement("div"), { className: "small-card dark:bg-gray-800 dark:border-gray-700", id: refId});
        this.cardInner = Object.assign(document.createElement("img"), { className: "w-[100%] h-[20vh] rounded-lg",  id: refId});
        this.link = Object.assign(document.createElement("a"), {href: "#",  id: refId});
        this.title = Object.assign(document.createElement("h5"), {className: "small-titles ubuntu-regular", id: refId});
        this.subtext = Object.assign(document.createElement("p"), {className: "small-subtext lato-regular", id: refId});

        this.setName(name);
        this.setDisc(disc);
    }

    createCard(target){
        target.append(this.cardOuter);
        var newDiv = document.getElementById(this.refId);
        newDiv.append(this.cardInner);
        newDiv.append(this.link);
        newDiv = document.getElementById(this.refId);
        newDiv.append(this.title);
        newDiv = document.getElementById(this.refId);
        newDiv.append(this.subtext);
    }

    destroyCard(){
        var toRemove = document.getElementById(this.refId);
        toRemove.remove();
    }

    setName(val){
        this.title.innerHTML = val;
    }

    setDisc(val){
        this.subtext.innerHTML = val;
    }
}