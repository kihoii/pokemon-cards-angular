import { CardAttackResponse } from './CardAttackResponse';
import { CardWeaknessResponse } from './CardWeaknessResponse';

export interface CardResponse {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  rules: string[];
  attacks: CardAttackResponse[];
  weaknesses: CardWeaknessResponse[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: 146;
    total: 146;
    legalities: {
      unlimited: string;
      expanded: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
    expanded: string;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    };
  };
}
