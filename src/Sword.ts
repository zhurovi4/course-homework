import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurabiluty: number,
    value: number,
    weight: number
  ) {
    super(value, "sword", weight, baseDamage, baseDurabiluty);
  }

  polish() {
    const damageLimit = this.baseDamage * 0.25;
    const newValue = this.damageModifier + this.MODIFIER_CHANGE_RATE;

    if (newValue <= damageLimit) {
      this.setDamageModifier(newValue);
    } else {
      this.setDamageModifier(damageLimit);
    }
  }
}
