import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash';

import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@ui/UiInput'

import { getPeopleId, getPeopleImage } from '@helpers/getPeopleData'
import { withErrorApi } from '@hoc/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_SEARCH } from '@constants/api'

import styles from './SearchPage.module.css'


const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    

    const getResponse = async (param) => {
        const res = await getApiResource(API_SEARCH + param)

        if (res) {

            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img,
                }
            })

            setPeople(peopleList)

            setErrorApi(!res)
        }

    } 

    useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetResponse = useCallback(debounce(value => getResponse(value), 300), []) 

    const handleInputChange = (value) => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }

  return (
    <div>
      <h1 className='header__text'>Search</h1>
      <UiInput value={inputSearchValue} handleInputChange={handleInputChange} placeholder="Input character's name" classes={styles.input__search}/>
      <SearchPageInfo people={people} />
    </div>
  )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage)
