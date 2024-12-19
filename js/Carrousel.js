class Carrousel {
    data;
    container;
    left;
    leftIndex;
    center;
    centerIndex;
    right;
    rightIndex;
    cardList = [];

    constructor(data) {
        this.data = data;
        
        for (var i = 0; i < data.length; i++) {
            this.cardList.push(new Card(data[i][0], data[i][1], i));
        }
    }

    getLeft() {
        return this.left;
    }

    setLeft(val) {
        this.left = val;
    }

    getCenter() {
        return this.center;
    }

    setCenter(val) {
        this.center = val;
    }

    getRight() {
        return this.right;
    }

    setRight(val) {
        this.right = val;
    }

    setGroup(c) {
        if (c == '+') {
            this.leftIndex++;
            this.centerIndex++;
            this.rightIndex++;
        } else if (c == '-') {
            this.leftIndex--;
            this.centerIndex--;
            this.rightIndex--;
        }
        this.left = this.data[this.leftIndex];
        this.center = this.data[this.centerIndex];
        this.right = this.data[this.rightIndex];
    }
}