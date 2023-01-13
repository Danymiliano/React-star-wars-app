import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import styles from './Favorite.module.css'
import icon from './img/bookmark.svg'

const Favorite = () => {
    const storeData = useSelector(state => state.favoriteReducer)
    const [count, setCount] = useState()

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)

    }, [setCount, storeData])

  return (
    <div className={styles.container} >
        <Link to='/favorites'>
            <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt='Favorites' />
        </Link>
    </div>
  )
}

export default Favorite