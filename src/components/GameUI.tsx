import { type Game } from '../types'

interface Props {
  game: Game
}

export default function GameUI ({ game }: Props) {
  console.log(new Date(game.cheapestPriceEver.date * 1000))
  const unixToDate = function (): string {
    const date = new Date(game.cheapestPriceEver.date * 1000)
    return date.toLocaleDateString('en-EG', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  return (
    <>
    <section className='game-container'>
    <h2>{game.info.title}</h2>
    <figure className='game'>
        <img src={game.info.thumb} alt={game.info.title} />
        <figcaption>
            <h4>Cheapest Price Ever</h4>
            <p>$ {game.cheapestPriceEver.price}</p>
            <p>on {unixToDate()}</p>
        </figcaption>
    </figure>
    <article>
        <h3>Current Deals</h3>
            <article className='deals'>
                {
                game.deals.filter(game => Number(game.savings) > 0).map(game => {
                  return (
                    <a target='blank' href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} key={game.dealID}>
                        <aside>
                            <del>{game.retailPrice}</del>
                            <p className='promo'>$ {game.price}</p>
                            <h5>Go to Deal</h5>
                        </aside>
                    </a>
                  )
                })
            }
            </article>
    </article>
    </section>

    </>
  )
}