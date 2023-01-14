import PeoplePage from '@containers/PeoplePage'
import HomePage from '@containers/HomePage'
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage'
import FavoritesPage from '@containers/FavoritesPage'
import SearchPage from '@containers/SearchPage'
import ErrorMessage from '@components/ErrorMessage'


import getId from '@helpers/getId'

const routesConfig = [
    {
        id: getId(),
        path: '/',
        element: <HomePage />
    },
    {
        id: getId(),
        path: '/people',
        element: <PeoplePage />
    },
    {
        id: getId(),
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        id: getId(),
        path: '/search',
        element: <SearchPage />
    },
    {
        id: getId(),
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        id: getId(),
        path: '*',
        exact: false,
        element: <NotFoundPage />
    },
    {
        id: getId(),
        path: '/fail',
        exact: false,
        element: <ErrorMessage />
    },
    {
        id: getId(),
        path: '/not-found',
        element: <NotFoundPage />
    },
]

export default routesConfig