import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  HTTP,
  HTTPS,
  GUIDE_IMAGE_EXTENSION,
  URL_IMAGE_PERSON,
} from '../constants/api'

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')

  return id
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = (id) => `${URL_IMAGE_PERSON}/${id + GUIDE_IMAGE_EXTENSION}`
