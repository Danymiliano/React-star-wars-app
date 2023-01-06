import React, { useState, useEffect } from 'react'
import styles from './PeoplePage.module.css'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../helpers/getPeopleData'
import PeopleList from '../../components/PeoplePage/PeopleList'
import { withErrorApi } from '../../hoc/withErrorApi' 

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
  <h1>Navigation</h1>
  {people && <PeopleList people={people}/>}
  </>
  )
}

export default withErrorApi(PeoplePage)
