import React from 'react'
import { useSelector } from 'react-redux'
// import store from './utils/store'
const Favourite = () => {
    const favourite = useSelector((store)=>store.favourite.items)
    console.log(favourite)
  return (
    <div>Favourite</div>
  )
}

export default Favourite