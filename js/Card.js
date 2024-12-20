class Card {

    title = "";
    disc = "";
    img = "";
    index = 0;

    constructor(title, disc, img, index) {
        this.title = title;
        this.disc = disc;
        this.img = img;
        this.index = index;
    }

    toString() {
        return this.title + "\n" + this.disc + "\n" + this.img + "\n" + this.index;
    }
}