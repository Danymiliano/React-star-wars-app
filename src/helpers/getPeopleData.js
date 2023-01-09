import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  HTTP,
  HTTPS,
  GUIDE_IMAGE_EXTENSION,
  URL_IMAGE_PERSON,
  SWAPI_PARAM_PAGE
} from '@constants/api'

export const getPeoplePageId = url => {
  const position = url.lastIndexOf(SWAPI_PARAM_PAGE)
  const id = url.slice(position + SWAPI_PARAM_PAGE.length)
  
  return Number(id)
}

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')

  return id
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = (id) => `${URL_IMAGE_PERSON}/${id + GUIDE_IMAGE_EXTENSION}`
