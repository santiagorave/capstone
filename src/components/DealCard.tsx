import { type Deal } from '../types'
import { Link } from 'react-router-dom'
interface Props {
  deal: Deal
}
export default function DealCard ({ deal }: Props) {
  return (
    <Link to={`games/${deal.gameID}`}>
        <figure>
            <img src={deal.thumb} alt={deal.title} />
            <figcaption>
                <h3>{deal.title}</h3>
                <article>
                    <aside>
                        <del><small>{deal.normalPrice}</small></del>
                        <p>{deal.salePrice}</p>
                    </aside>
                    <aside>
                        <p className='discount'>{Math.floor(Number(deal.savings))}%</p>
                        <p>{deal.dealRating}</p>
                    </aside>
                </article>
            </figcaption>
        </figure>
         </Link>
  )
}