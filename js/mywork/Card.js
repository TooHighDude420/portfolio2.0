class Card {

    title = "";
    disc = "";
    img = "";
    alt = "";
    down_path = "";
    file_name = "";
    long_disc = "";
    index = 0;

    constructor(title, disc, long_disc, file_name, img, index) {
        this.title = title;
        this.disc = disc;
        this.long_disc = long_disc;
        this.file_name = file_name;
        this.down_path = "http://nataroajaouin.online/img/programs/" + file_name;
        this.alt = img;
        this.img = "http://nataroajaouin.online/img/programs/" + img;
        this.index = index;
    }

    toString() {
        return this.title + "\n" + this.disc + "\n" + this.img + "\n" + this.index;
    }
}