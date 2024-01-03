import { type Deal } from '../types'
export async function getDeals (storeID = 1): Promise<Deal[]> {
  return await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}`)
    .then(async res => await res.json())
}