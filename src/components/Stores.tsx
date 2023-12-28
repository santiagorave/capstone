interface Props {
    fetchDeals: (storeID: number) => void
  
  }
  export default function Stores ({ fetchDeals }: Props) {
    const stores = [
      {
        name: 'Steam',
        storeID: 1,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg'
      },
      {
        name: 'Origin',
        storeID: 8,
        img: 'https://cdn.worldvectorlogo.com/logos/origin-1.svg'
      },
      {
        name: 'Epic Games Store',
        storeID: 25,
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg'
      },
      {
        name: 'Blizzard Shop',
        storeID: 31,
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Blizzard_Entertainment_Logo.svg'
      }
    ]
    const storeClickHandler = function (storeID: number): void {
      fetchDeals(storeID)
    }
    return (
          <>
              <section className="stores">
                  {stores.map(store => {
                    return (
                          <aside onClick={() => { storeClickHandler(store.storeID) }} key={store.storeID}>
                              <img src={store.img} alt={store.name} />
                          </aside>
                    )
                  })}
              </section>
          </>
    )
  }