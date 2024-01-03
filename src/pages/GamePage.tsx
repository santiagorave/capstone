import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../services/getGame'
import GameUI from '../components/GameUI'
import { type Game } from '../types'
export default function GamePage () {
  const INITIAL_VALUE = {
    info: {
      title: '',
      steamAppID: '',
      thumb: ''
    },
    cheapestPriceEver: {
      price: '',
      date: 1588087352
    },
    deals: [
      {
        storeID: '1',
        dealID: '',
        price: '',
        retailPrice: '',
        savings: ''
      },
      {
        storeID: '',
        dealID: '1',
        price: '',
        retailPrice: '',
        savings: ''
      }
    ]
  }
  const gameID = Number(useParams().gameID)
  const [game, setGame] = useState<Game>(INITIAL_VALUE)

  useEffect(() => {
    getGame(gameID).then(setGame).catch(error => { console.log(error) })
  }, [])

  return (
    <>
      <GameUI game={game} />
    </>
  )
}