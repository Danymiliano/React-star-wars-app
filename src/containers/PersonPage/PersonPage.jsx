import React, { useEffect, useState, Suspense } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc/withErrorApi'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import UiLoading from '@ui/UiLoading'

import { getApiResource } from '@utils/network'
import { getPeopleImage } from '@helpers/getPeopleData'
import { API_PERSON } from '@constants/api'

import { useParams } from 'react-router'

import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(() =>
  import('@components/PersonPage/PersonFilms')
)

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeData = useSelector((state) => state.favoriteReducer)
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`)

      setPersonFavorite(!!storeData[id]);
      setPersonId(id)

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

        setPersonName(res.name)
        setPersonPhoto(getPeopleImage(id))

        res.films.length && setPersonFilms(res.films)

      }
      setErrorApi(!res)
    })()
  }, [id, setErrorApi, storeData])

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
