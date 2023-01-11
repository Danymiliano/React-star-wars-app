import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeConcurrentRequest, changeHTTP } from '@utils/network'

import styles from './PersonFilms.module.css'

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([])

  useEffect(() => {
    ;(async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url))
      const response = await makeConcurrentRequest(filmsHTTPS)

      console.log(response)

      setFilmsName(response)
    })()
  }, [])

  console.log(personFilms)
  return (
    <>
      <div>
        <ul>
          {filmsName.map(({ title, episode_id }) => {
            return (
              <li key={episode_id}>
                <span>Episode {episode_id}</span>
                <span> : </span>
                <span>{title}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
}

export default PersonFilms
