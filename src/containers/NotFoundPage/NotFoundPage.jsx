import React from 'react'

import { useLocation } from 'react-router-dom'
import img from './img/404.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()

  return (
    <div>
      <img className={styles.img} src={img} alt='' />
      <p className={styles.text}>
        No match address for <u>{location.pathname}</u>
      </p>
    </div>
  )
}

export default NotFoundPage
