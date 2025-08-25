export class enPassantTracker {
    constructor(){
    }
    #_enPassant = [,]

    set enPassant(newValue) {
        console.log(`Setting value to ${newValue}`);

        this.#_enPassant[0] = newValue[0];
        this.#_enPassant[1] = newValue[1];

    }

    get enPassant(){
        return this.#_enPassant
    }
}