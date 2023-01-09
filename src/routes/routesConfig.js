import PeoplePage from '@containers/PeoplePage'
import HomePage from '@containers/HomePage'
import NotFoundPage from '@containers/NotFoundPage'

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
        path: '*',
        exact: false,
        element: <NotFoundPage />
    },
    {
        id: getId(),
        path: '/not-found',
        element: <NotFoundPage />
    },
]

export default routesConfig