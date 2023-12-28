import { useRef } from 'react'
import { type Deal } from '../types'
interface Props {
  sortState: boolean
  changeState: React.Dispatch<React.SetStateAction<boolean>>
  setDeals: React.Dispatch<React.SetStateAction<Deal[]>>
}

export default function Filter ({ sortState, changeState, setDeals }: Props) {
  const selectRef = useRef<HTMLSelectElement>(null)
  const changeSortHandler = function (): void {
    changeState((state) => !state)
  }

  const handleFilter = function (selectedValue: string | undefined): void {
    switch (selectedValue) {
      case 'title':
        if (!sortState) {
          setDeals((deal) => [...deal.sort((a, b) => a.title.localeCompare(b.title))])
        } else {
          setDeals((deal) => [...deal.sort((a, b) => b.title.localeCompare(a.title))])
        }
        break
      case 'savings':
        if (!sortState) {
          setDeals((deal) => [...deal.sort((a, b) => Number(a.savings) - Number(b.savings))])
        } else {
          setDeals((deal) => [...deal.sort((a, b) => Number(b.savings) - Number(a.savings))])
        }
        break
      case 'price':
        if (!sortState) {
          setDeals((deal) => [...deal.sort((a, b) => Number(a.salePrice) - Number(b.salePrice))])
        } else {
          setDeals((deal) => [...deal.sort((a, b) => Number(b.salePrice) - Number(a.salePrice))])
        }
        break
      default:
        if (!sortState) {
          setDeals((deal) => [...deal.sort((a, b) => Number(a.dealRating) - Number(b.dealRating))])
        } else {
          setDeals((deal) => [...deal.sort((a, b) => Number(b.dealRating) - Number(a.dealRating))])
        }
        break
    }
  }
  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    handleFilter(selectRef.current?.value)
  }
  return <form id="filterForm" onSubmit={handleSubmit}>
    <select ref={selectRef} name="filter" id="filter">
        <option defaultValue="deal-rating" value="deal-rating">Deal Rating</option>
        <option value="title">Title</option>
        <option value="savings">Savings</option>
        <option value="price">Price</option>
    </select>
    <button type='button' className="sortButton" onClick={changeSortHandler}><i className={`fa-solid fa-arrow-${sortState ? 'down' : 'up'}-wide-short`}></i></button>
    <button type="submit">Apply</button>
  </form>
}