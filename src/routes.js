import { url_addCenter, url_attendence, url_centers, url_course, url_editCenter, url_editStudent, url_hq, url_login, url_registerStudent, url_student } from './components/functions/pageUrls'
import { Login, HqMain, Centers, AddCenter, EditCenter, Student, RegisterStudent, Course, Attendence } from './pages'
export const routes = [
    { element: <Login />, path: '/' },
    { element: <Login />, path: url_login },
    { element: <HqMain />, path: url_hq },
    { element: <Centers />, path: url_centers },
    { element: <AddCenter />, path: url_addCenter },
    { element: <EditCenter />, path: url_editCenter },
    { element: <Student />, path: url_student },
    { element: <RegisterStudent />, path: url_registerStudent },
    { element: <RegisterStudent />, path: url_editStudent },
    { element: <Course />, path: url_course },
    { element: <Attendence />, path: url_attendence },
]