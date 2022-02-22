import { Item } from "./Item";

export abstract class Weapon extends Item {
  readonly MODIFIER_CHANGE_RATE: number = 0.05;
  private effectiveDurability: number;

  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  durabilityModifier: number;


  constructor(value: number, name: string, weight: number, baseDamage: number, baseDurability: number) {
    super(value, name, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.damageModifier = this.MODIFIER_CHANGE_RATE;
    this.durabilityModifier = this.MODIFIER_CHANGE_RATE;
    this.effectiveDurability = this.baseDurability + this.durabilityModifier;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(
      2
    )}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(
      this.getDurability() * 100
    ).toFixed(2)}%`;
  }

  setEffectiveDurability(value: number): void {
    this.effectiveDurability = value;
  }

  setDamageModifier(value: number): void {
    this.damageModifier = value;
  }

  setDurabilityModifier(value: number): void {
    this.durabilityModifier = value;
  }

  use(): string {
    let message;

    if (this.effectiveDurability <= 0) {
      message = `You can't use the ${this.name}, it is broken.`;
    } else {
      message = `You use the ${this.name}, dealing ${this.getDamage().toFixed(
        2
      )} points of damage. The ${this.name} breaks.`;
    }

    this.setEffectiveDurability(
      this.effectiveDurability - this.MODIFIER_CHANGE_RATE
    );

    message =
      this.effectiveDurability > 0
        ? message
        : `${message} \n The ${this.name} breaks.`;

    return message;
  }

  abstract polish(): void;
}
