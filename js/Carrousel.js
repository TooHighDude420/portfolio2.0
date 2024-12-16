class Carrousel{
    data; container; left; leftIndex; center; centerIndex; right; rightIndex;  
    
    constructor(data, container){
        this.container = container;
        this.data = data;
        for (i = 0; i < data.size(); i++){
            if (this.left == null){
                this.left = data[i];
                this.leftIndex = i;
            } else if (this.center == null){
                this.center = data[i];
                this.centerIndex = i;
            } else if (this.right == null){
                this.right = data[i]
                this.rightIndex = i;
            } else {
                break;
            }
        }
    }

    getLeft(){
        return this.left;
    }

    getCentre(){
        return this.center;
    }

    getRight(){
        return this.right;
    }

    setGroup(c){
        if (c == '+'){
            this.leftIndex++;
            this.centerIndex++;
            this.rightIndex++;
        } else if (c == '-'){
            this.leftIndex--;
            this.centerIndex--;
            this.rightIndex--;
        }
        this.left = data[this.leftIndex];
        this.center = data[this.centerIndex];
        this.right = data[this.rightIndex];
    }
}