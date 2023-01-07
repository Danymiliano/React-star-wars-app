import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import { getApiResource } from '@utils/network'
import { getPeopleId, getPeopleImage } from '@helpers/getPeopleData'
import { API_PEOPLE } from '@constants/api'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)

  const getResource = async (url) => {
    const body = await getApiResource(url)

    if (body) {
      const peopleList = body.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const image = getPeopleImage(id)

        return {
          id,
          name,
          image,
        }
      })

      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE)
  }, [])

  return ( <>
  <h1 className='header__text'>Navigation</h1>
  {people && <PeopleList people={people}/>}
  </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)
