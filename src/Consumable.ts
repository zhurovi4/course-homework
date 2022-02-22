import { Item } from "./Item";

export abstract class Consumable extends Item {
    consumed: boolean = false;
    spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(value, name, weight);
        this.spoiled = spoiled
    }

    isConsumed(): boolean {
        return this.consumed
    }

    isSpoiled(): boolean {
        return this.spoiled
    }

    setConsumed(value: boolean): void {
        this.consumed = value
    }

    setSpoiled(): void {
        this.spoiled = true
    }

    eat(): string {
        return this.spoiled ? `You eat the ${this.name}. \n You feel sick.` :  `You eat the ${this.name}`
    }

    use(): string {
        if (this.consumed) {
            return `There is nothing left of the bread to consume.`
        }
        return this.eat()
    }
}