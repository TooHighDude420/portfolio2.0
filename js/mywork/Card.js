class Card {

    title = "";
    disc = "";
    img = "";
    alt = "";
    index = 0;

    constructor(title, disc, img, index) {
        this.title = title;
        this.disc = disc;
        this.alt = img;
        this.img = "http://nataroajaouin.online/img/programs/" + img;
        this.index = index;
    }

    toString() {
        return this.title + "\n" + this.disc + "\n" + this.img + "\n" + this.index;
    }
}