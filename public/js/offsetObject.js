
class offsetObject {
    constructor() {

    this.height = 0;
    this.speed = 0;
    }

    update(newHeight,newSpeed){
        this.height = newHeight;
        this.speed = newSpeed;
    }

    getHeight(){
        return(this.height);
    }

    getSpeed(){
        return(this.speed);
    }

}

export default offsetObject;