export class ActionManger {
    constructor(board) {
        this.board = board
    }

    hitWeakness(attacker, defender) {
        if (attacker.type.AttackType == defender.type.Weakness){
            return true;
        }
        else if (defender.type.Weakness === "All") {
            return true;
        }
    }

    hitResistance(attacker, defender) {
        if (attacker.type.AttackType == defender.type.Resistance) {
            return true
        }   
    }
}