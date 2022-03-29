import BankRoute from './BankRoute.js'
import CenterRoute from './CenterRoute.js'
import CourseLanguageRoute from './CourseLanguageRoute.js'
import CourseRoute from './CourseRoute.js'
import CourseTypeRoute from './CourseTypeRoute.js'
import DiscountRoute from './DiscountRoute.js'
import EnumsRoute from './Enums.js'
import InventoryCategoryRoute from './InventoryCategoryRoute.js'
import InventoryRoute from './InventoryRoute.js'
import KpiRoute from './KpiRoute.js'
import OthersRoute from './OthersRoute.js'
import PackageRoute from './PackageRoute.js'
import PicRoute from './PicRoute.js'
import UserRoute from './UserRoute.js'

const allRoutes = [
    [UserRoute, 'user'],
    [PicRoute],
    [BankRoute],
    [KpiRoute],
    [InventoryCategoryRoute],
    [CenterRoute],
    [EnumsRoute],
    [CourseRoute],
    [CourseTypeRoute],
    [CourseLanguageRoute],
    [PackageRoute],
    [DiscountRoute],
    [OthersRoute],
    [InventoryRoute]
]

export default allRoutes