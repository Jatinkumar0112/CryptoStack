import React, { useContext, useRef } from 'react'
import Search from './Search'
import submitIcon from '../assets/submit-icon.svg'
import { CryptoContext } from '../context/CryptoContext'

const Filters = () => {
  let {setCurrency} = useContext(CryptoContext)
  const currencyRef = useRef(null);
  // console.log(currencyRef.current.value)

  const handleCurrencySubmit = (e) => {
    e.preventDefault()
    let val = currencyRef.current.value;
    // console.log(val)
    setCurrency(val)
    currencyRef.current.value = "";

  }
  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative'>
    
    <Search/>
    
    <div className='flex mr-7'>
     <form className='relative flex items-center font-nunito mr-12' onSubmit={handleCurrencySubmit}>
      <label htmlFor='currency'>currency</label>
      <input type='text' name='currency' ref={currencyRef} className='w-16 rounded bg-gray-200 placeholder:text-gray-200 pl-2 required outline-0 border border-transparent focus:border-fuchsia' />
      <button type='submit' className='ml-1 cursor-pointer'>
        <img src={submitIcon} alt='submit' />
      </button>
     </form>
    </div>
    <div>
      <label>
      <span >sort by:</span>
      <select name='sortby' >
        <option value='market_cap_desc'></option>
      </select>
      </label>
    </div>
    </div>
  )
}

export default Filters
