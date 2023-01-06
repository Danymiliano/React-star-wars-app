import React from 'react'
import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>Тёмная сторона победила. <br/> 
      Мы не можем отобразить данные. <br/> 
      Вернитесь, когда мы всё починим.</p>
    </>
  )
}

export default ErrorMessage