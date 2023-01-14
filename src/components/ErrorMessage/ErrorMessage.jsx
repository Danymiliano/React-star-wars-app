import React from 'react'

import UiVideo from '@ui/UiVideo'
import video from './video/coastline.mp4'

import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>Тёмная сторона победила. <br/> 
      Мы не можем отобразить данные. <br/> 
      Вернитесь, когда мы всё починим.</p>

      <UiVideo src={video} classes={styles.video} />
    </>
  )
}

export default ErrorMessage