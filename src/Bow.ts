import { Weapon } from "./Weapon";

export class Bow extends Weapon {
    constructor(value, weight, baseDamage, baseDurability) {
        super('bow', value, weight, baseDamage, baseDurability);
        this.name = 'bow';
    }

    polish() {
        const newValue = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
        this.setDurabilityModifier(newValue >= 1 ? 1 : newValue);
    }
}