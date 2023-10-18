import { Character } from "../Character/Character";
import type CharacterDataType from "../types";

export class Fighter extends Character {
  weapon: string;
  dexterity: number;

  constructor(
    characterData: CharacterDataType,
    weapon: string,
    dexterity: number,
  ) {
    super(characterData);
    this.weapon = weapon;
    this.dexterity = this.filterDexterity(dexterity);
  }

  communicate(): string {
    return `${super.communicate()}First I hit and then I ask`;
  }

  filterDexterity(dexterity: number): number {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}
