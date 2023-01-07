import React from 'react'
import PropTypes from 'prop-types'

import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, image }) => {
        return (
          <li key={id} className={styles.list__item}>
            <a href='#'>
              <img src={image} className={styles.person__photo} alt={name} />
              <p>{name}</p>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList
