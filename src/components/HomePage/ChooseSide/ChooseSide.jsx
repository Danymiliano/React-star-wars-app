import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from '@context/ThemeProvider'
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgNeutralSide from './img/falcon.jpg'

import styles from './ChooseSide.module.css'

const ChooseSideItem = ({
  theme, text, img, classes
}) => {
  const isTheme = useTheme()

  return <>
  <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)} >
    <div className={styles.item__header}></div>
    <img className={styles.item__img} src={img} alt={text} />
  </div>
  </>
}

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}

const ChooseSide = () => {
  const themes = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: 'Neutral Side',
      img: imgNeutralSide,
      classes: styles.item__neutral,
    }
  ]

  return (
    <div className={styles.container}>
    {themes.map(({theme, text, img, classes}, index) => {
      return <ChooseSideItem key={index} theme={theme} text={text} img={img} classes={classes}/>
    })}
    </div>
  )
}

export default ChooseSide
