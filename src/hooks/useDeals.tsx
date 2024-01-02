import { type Deal } from '../types'
import { useEffect, useState } from 'react'
import { getDeals } from '../services/getDeals'
export default function useDeals () {
  const [deals, setDeals] = useState<Deal[]>([])
  const fetchDeals = function (storeID: number = 1) {
    getDeals(storeID).then(setDeals).catch(err => { console.error(err) })
  }
  useEffect(() => {
    fetchDeals(1)
  }, [])

  return {
    deals,
    setDeals,
    fetchDeals
  }
}