import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc/withErrorApi'

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import PersonFilms from '@components/PersonPage/PersonFilms'

import { getApiResource } from '@utils/network'
import { getPeopleImage } from '@helpers/getPeopleData'
import { API_PERSON } from '@constants/api'

import { useParams } from 'react-router'

import styles from './PersonPage.module.css'

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`)

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Weight', data: res.mass },
          { title: 'Hair color', data: res.hair_color },
          { title: 'Skin color', data: res.skin_color },
          { title: 'Eye color', data: res.eye_color },
          { title: 'Birth year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ])

        // films: 'https://swapi.dev/api/films/1/'

        setPersonName(res.name)
        setPersonPhoto(getPeopleImage(id))

        res.films.length && setPersonFilms(res.films)

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [id, setErrorApi])

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName} />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && <PersonFilms personFilms={personFilms} />}
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
