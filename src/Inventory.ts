import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(comparator?: ItemComparator) {
    if (comparator) {
      return this.items.sort(comparator.compare);
    }
    return this.items.sort((a, b) => a.value - b.value);
  }

  toString(): string {
      return this.items.join(', ')
  }
}
