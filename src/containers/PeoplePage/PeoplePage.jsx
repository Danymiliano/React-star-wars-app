import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import PeopleNavigation from '@components/PeopleNavigation/PeopleNavigation'
import { getApiResource, changeHTTP } from '@utils/network'
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from '@helpers/getPeopleData'
import { API_PEOPLE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')

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

      setPrevPage(changeHTTP(body.previous))
      setNextPage(changeHTTP(body.next))
      setCounterPage(getPeoplePageId(url))

      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [])

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)
