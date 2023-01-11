import React from 'react'

import { useNavigate } from 'react-router'

import styles from './PersonLinkBack.module.css'
import leftArrowIcon from './img/back.svg'

const PersonLinkBack = () => {
  const navigate = useNavigate()

  const handleGoBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }
  return (
    <a href='#' onClick={handleGoBack} className={styles.link}>
      <img
        className={styles.link__img}
        src={leftArrowIcon}
        alt='Go back left arrow'
      />
      Go back
    </a>
  )
}

export default PersonLinkBack
