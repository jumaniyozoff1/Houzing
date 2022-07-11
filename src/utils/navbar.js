import Generic from '../pages/Generic'
import HomePage from '../pages/Home'
import PropertiesPage from '../pages/Properties'
import SelectedHousePage from '../pages/SelectedHouse'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export const navbar = [ 
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element:<HomePage/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 2,
        title: 'Properties',
        path: '/properties',
        element:<PropertiesPage/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 3,
        title: 'Contacts',
        path: '/contacts',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 4,
        title: 'Sign in',
        path: '/signin',
        element:<SignIn/>,
        search: '?',
        hidden: true,
        private: true
    },
    {
        id: 5,
        title: 'Sign up',
        path: '/signup',
        element:<SignUp/>,
        search: '?',
        hidden: true,
        private: true
    },
    {
        id: 6,
        title: 'Product',
        path: '/properties/:id',
        element:<SelectedHousePage/>,
        search: '?',
        hidden: true,
        private: true
    }
]