import { url_attendence, url_center, url_course, url_editStudent, url_hq, url_login, url_registerStudent, url_student } from './components/functions/pageUrls'
import { Login, HqMain, Center, Student, RegisterStudent, Course, Attendence } from './pages'
export const routes = [
    { element: <Login />, path: '/' },
    { element: <Login />, path: url_login },
    { element: <HqMain />, path: url_hq },
    { element: <Center />, path: url_center },
    { element: <Student />, path: url_student },
    { element: <RegisterStudent />, path: url_registerStudent },
    { element: <RegisterStudent />, path: url_editStudent },
    { element: <Course />, path: url_course },
    { element: <Attendence />, path: url_attendence },
]