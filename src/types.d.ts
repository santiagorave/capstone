export interface Deal {
    internalName: string
    title: string
    metacriticLink: string
    dealID: string
    storeID: string
    gameID: string
    salePrice: string
    normalPrice: string
    isOnSale: string
    savings: string
    metacriticScore: string
    steamRatingText: SteamRatingText | null
    steamRatingPercent: string
    steamRatingCount: string
    steamAppID: string
    releaseDate: number
    lastChange: number
    dealRating: string
    thumb: string
  }
  
  export enum SteamRatingText {
    Mixed = 'Mixed',
    MostlyPositive = 'Mostly Positive',
    OverwhelminglyPositive = 'Overwhelmingly Positive',
    VeryPositive = 'Very Positive',
  }
  
  export interface Game {
    info: Info
    cheapestPriceEver: CheapestPriceEver
    deals: Dealgame[]
  }
  
  export interface CheapestPriceEver {
    price: string
    date: number
  }
  
  export interface Info {
    title: string
    steamAppID: string
    thumb: string
  }
  
  export interface Dealgame {
    storeID: string
    dealID: string
    price: string
    retailPrice: string
    savings: string
  }
  export interface CheaperStore {
    dealID: string
    storeID: string
    salePrice: string
    retailPrice: string
  }
  
  export interface DealGame {
    gameInfo: GameInfo
    cheaperStores: CheaperStore[]
    cheapestPrice: CheapestPriceEver
  }