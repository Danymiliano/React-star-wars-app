import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions'

import favoriteIcon from './img/favorite.svg'
import favoriteIconFill from './img/favorite-fill.svg'

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({
  personPhoto,
  personFavorite,
  setPersonFavorite,
  personName,
  personId,
}) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      )
    }
    setPersonFavorite(!personFavorite)
  }

  return (
    <>
      <div className={styles.container}>
      <img
        src={personFavorite ? favoriteIconFill : favoriteIcon}
        className={styles.favorite}
        onClick={dispatchFavoritePeople}
        alt='Add to favorite'
      />
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
    </>
  )
}

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonPhoto
