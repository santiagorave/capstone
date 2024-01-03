import { useLocation } from 'react-router-dom'
import { type DealGame } from '../types'
import { useState, useEffect } from 'react'
import { getDealByID } from '../services/getDealByID'

export default function DealPage () {
  const INITIAL_VALUE = {
    gameInfo: {
      storeID: '',
      gameID: '',
      name: '',
      steamAppID: '',
      salePrice: '',
      retailPrice: '',
      steamRatingText: '',
      steamRatingPercent: '',
      steamRatingCount: '',
      metacriticScore: '',
      metacriticLink: '',
      releaseDate: 1364169600,
      publisher: '',
      steamworks: '',
      thumb: ''
    },
    cheaperStores: [
      {
        dealID: 'vb3EqB4KpKbSyV83DXQYAZCSBS60LaOMgLCXSt8pQxw%3D',
        storeID: '23',
        salePrice: '5.89',
        retailPrice: '29.99'
      },
      {
        dealID: 'boC2N0Q7SMCKxv6UKjRw%2BLFY6%2BNLEeWM2Bf1i80clx0%3D',
        storeID: '21',
        salePrice: '5.99',
        retailPrice: '29.99'
      },
      {
        dealID: 'tbqfs8HsmHWn0mMk2QRCPd7KWLidkHrIYZX3FbYCyk0%3D',
        storeID: '30',
        salePrice: '7.19',
        retailPrice: '29.99'
      },
      {
        dealID: 'r%2FGHYdW6GKpZfaqR4DQrjKD7vBoWiFPP7npVpVw4350%3D',
        storeID: '34',
        salePrice: '7.20',
        retailPrice: '29.99'
      },
      {
        dealID: 'OVrkWmI7sl5RN61pxpA44euybrH826w%2FjvlV%2BYKc2oA%3D',
        storeID: '2',
        salePrice: '7.49',
        retailPrice: '29.99'
      },
      {
        dealID: '5ptxhcM1fatjVrZSnNNpbSz6okheevZEhcBAZm4AUfU%3D',
        storeID: '35',
        salePrice: '7.50',
        retailPrice: '29.99'
      },
      {
        dealID: 'DQ%2BYLI9do4mm0H2%2BDUd6npgoQoK8bseNvyjJe%2B%2F3dEo%3D',
        storeID: '15',
        salePrice: '26.28',
        retailPrice: '29.99'
      },
      {
        dealID: 'kj2H%2FvwfkyU40jW9s2g88CAW4PuR0etKlYvkQLitgvQ%3D',
        storeID: '29',
        salePrice: '26.99',
        retailPrice: '29.99'
      },
      {
        dealID: 'fq0cNHiR3Z4TpZyV7WH865C1%2BCBlmufYUc%2Bu2HqyUHE%3D',
        storeID: '27',
        salePrice: '26.99',
        retailPrice: '29.99'
      }
    ],
    cheapestPrice: {
      price: '4.49',
      date: 1682548425
    }
  }
  const test = useLocation().pathname.split('/')[2]
  const [deal, setdeal] = useState<DealGame>(INITIAL_VALUE)
  useEffect(() => {
    getDealByID(test).then(setdeal).catch(error => { console.log(error) })
  }, [])
  return (
    <section className='dealPage'>
      <section className='deal-container'>
        {
          <>
          <h1>{deal.gameInfo.name}</h1>
          <article>
          <aside>
            <p>Steam Rating: {deal.gameInfo.steamRatingText}</p>
            <p>Meta Critic Score: {deal.gameInfo.metacriticScore}</p>
          </aside>
          <img src={deal.gameInfo.thumb} alt={deal.gameInfo.name} />
          </article>
          </>
        }
      </section>
    </section>

  )
}