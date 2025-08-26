export class ActionManager {
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

    skillCheck(attackType, attacker, defender) {
        switch(attackType) {
            case "resistance": {
                if (attacker.type.SkillType == "Pierce") {return false;}
                return false;

            }
            case "weakness": {
                console.log("checking skills for weakness hit")
                if (attacker.type.SkillType == "OneMore" && defender.type.Tier == 2 && (attacker.isBishop != defender.isBishop)) {return true}
                return false
            }
            case "neutral": {
                return true
            }
            default: return true;

        }
    }
}