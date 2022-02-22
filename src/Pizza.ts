import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  slicesEaten: number = 1;

  constructor(private numberOfSlices: number, spoiled: boolean) {
    super("pizza", 5, 400, spoiled);
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
      return `You eat a slice of pizza`;
    } else {
      return this.use();
    }
  }
}
