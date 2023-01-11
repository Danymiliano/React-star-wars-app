import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, image }) => {
        return (
          <li key={id} className={styles.list__item}>
            <Link to={`/people/${id}`}>
              <img src={image} className={styles.person__photo} alt={name} />
              <p>{name}</p>
              </Link>
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
