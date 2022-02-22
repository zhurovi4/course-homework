import { Comparable } from "./Comparable";

let id = 0;
export abstract class Item implements Comparable<Item> {
  public compareTo(other: Item): number {
    if (this.value == other.value) {
      return this.name.toLowerCase() > other.name.toLowerCase() ? 1 : -1;
    }
    return this.value > other.value ? 1 : -1;
  }

  id: number;
  value: number;
  name: string;
  weight: number;

  constructor(value: number, name: string, weight: number) {
    this.value = value;
    this.name = name;
    this.weight = weight;
    this.id = id++;
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setWeight(weight: number) {
    this.weight = weight;
  }

  abstract use(): string;

  static reset(): void {
    id = 0;
  }
}
