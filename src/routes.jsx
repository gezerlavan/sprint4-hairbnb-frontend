import { Dashboard } from './pages/Dashboard.jsx'
import { StayIndex } from './pages/StayIndex.jsx'
import { UserTrips } from './pages/UserTrips.jsx'
import { UserWishList } from './pages/UserWishlist.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <StayIndex />,
        label: '',
    },
    {
        path: 'trip',
        component: <UserTrips />,
        label: 'Trips'
    },
    {
        path: 'wishlist',
        component: <UserWishList />,
        label: 'Wishlist'
    },
    {
        path: 'dashboard',
        component: <Dashboard />,
        label: 'Dashboard'
    }
]

export default routes