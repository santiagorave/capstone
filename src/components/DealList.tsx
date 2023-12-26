import { type Deal } from '../types'
import DealCard from './DealCard'
interface Props {
  deals: Deal[]
}
export default function DealList ({ deals }: Props) {
  return (
    <section className='deals'>
    {
        deals.map(deal => (
          <DealCard key={deal.dealID} deal={deal} />
        )
        )
    }
    </section>
  )
}