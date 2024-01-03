export async function getGame (gameID: number) {
    return await fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
      .then(async res => await res.json())
  }