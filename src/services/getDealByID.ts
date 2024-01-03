import { type DealGame } from '../types'
export async function getDealByID (dealID: string = ''): Promise<DealGame> {
  return await fetch(`https://www.cheapshark.com/api/1.0/deals?id=${dealID}`)
    .then(async res => await res.json())
}