import { url_addCenter, url_addCourse, url_attendence, url_centers, url_courses, url_editCenter, url_editCourse, url_editStudent, url_hq, url_login, url_registerStudent, url_student, url_viewCourse } from './components/functions/pageUrls'
import { Login, HqMain, Centers, AddCenter, Courses, AddCourse, EditCourse, EditCenter, Student, RegisterStudent, Attendence, ViewCourse } from './pages'
export const routes = [
    { element: <Login />, path: '/' },
    { element: <Login />, path: url_login },
    { element: <HqMain />, path: url_hq },
    { element: <Centers />, path: url_centers },
    { element: <AddCenter />, path: url_addCenter },
    { element: <EditCenter />, path: url_editCenter },
    { element: <Courses />, path: url_courses },
    { element: <AddCourse />, path: url_addCourse },
    { element: <EditCourse />, path: url_editCourse },
    { element: <ViewCourse />, path: url_viewCourse },
    { element: <Student />, path: url_student },
    { element: <RegisterStudent />, path: url_registerStudent },
    { element: <RegisterStudent />, path: url_editStudent },
    { element: <Attendence />, path: url_attendence },
]