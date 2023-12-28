import DealList from '../components/DealList'
import Filter from '../components/Filter'
import Stores from '../components/Stores'
import { type Deal } from '../types'

interface Props {
  fetchDeals: (storeID: number) => void
  deals: Deal[]
  setDeals: React.Dispatch<React.SetStateAction<Deal[]>>
  sortState: boolean
  changeState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home ({ fetchDeals, setDeals, changeState, deals, sortState }: Props) {
  return (
        <main className='main-content'>
        <Stores fetchDeals={fetchDeals} />
        <Filter setDeals={setDeals} sortState={sortState} changeState={changeState} />
      <DealList deals={deals} />
      </main>
  )
}