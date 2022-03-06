import BankRoute from './BankRoute.js'
import CenterRoute from './CenterRoute.js'
import Enums from './Enums.js'
import KpiRoute from './KpiRoute.js'
import PicRoute from './PicRoute.js'
import UserRoute from './UserRoute.js'

const allRoutes = [
    [UserRoute, 'user'],
    [PicRoute, ''],
    [BankRoute, ''],
    [KpiRoute, ''],
    [CenterRoute, ''],
    [Enums, '']
]

export default allRoutes