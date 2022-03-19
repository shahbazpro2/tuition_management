import BankRoute from './BankRoute.js'
import CenterRoute from './CenterRoute.js'
import CourseLanguageRoute from './CourseLanguageRoute.js'
import CourseRoute from './CourseRoute.js'
import CourseTypeRoute from './CourseTypeRoute.js'
import EnumsRoute from './Enums.js'
import KpiRoute from './KpiRoute.js'
import PackageRoute from './packageRoute.js'
import PicRoute from './PicRoute.js'
import UserRoute from './UserRoute.js'

const allRoutes = [
    [UserRoute, 'user'],
    [PicRoute],
    [BankRoute],
    [KpiRoute],
    [CenterRoute],
    [EnumsRoute],
    [CourseRoute],
    [CourseTypeRoute],
    [CourseLanguageRoute],
    [PackageRoute]
]

export default allRoutes