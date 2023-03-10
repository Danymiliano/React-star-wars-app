// Common
export const HTTPS = 'https://'
export const HTTP = 'http://'

// Star Wars API
export const SWAPI_ROOT = 'swapi.dev/api/'
export const SWAPI_PEOPLE = 'people'
export const SWAPI_PARAM_PAGE = '/?page='
export const SWAPI_PARAM_SEARCH = '/?search='

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE
export const API_SEARCH = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH

// Visual Guide API
const GUIDE_ROOT_IMAGE = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters'
export const GUIDE_IMAGE_EXTENSION = '.jpg'

export const URL_IMAGE_PERSON = GUIDE_ROOT_IMAGE + GUIDE_PEOPLE