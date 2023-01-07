import PeoplePage from '@containers/PeoplePage'
import HomePage from '@containers/HomePage'
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
    }
]

export default routesConfig