/* eslint-disable react/jsx-key */
import { url_addCenter, url_addCourse, url_addDiscount, url_addInventory, url_addPackage, url_addStudent, url_attendence, url_attendenceHistory, url_centerInvoice, url_centerInvoicing, url_centerKpi, url_centers, url_courses, url_dicounts, url_editCenter, url_editCourse, url_editDiscount, url_editInventory, url_editPackage, url_editStudent, url_hq, url_inventories, url_login, url_packageAddOthers, url_packageEditOthers, url_packageOthers, url_packages, url_payHq, url_payHqPaymentHistory, url_studentInvoice, url_studentInvoicing, url_students, url_viewCourse } from './components/functions/pageUrls'

import { Login, HqMain, Centers, AddCenter, Courses, AddCourse, EditCourse, EditCenter, Attendence, ViewCourse, CenterKpi, Packages, AddPackage, EditPackage, Discounts, AddDiscount, EditDiscount, Others, AddOthers, EditOthers, Inventories, AddInventory, EditInventory, StudentInvoicing, StudentInvoice, CenterInvoicing, CenterInvoice, Students, AddStudent, EditStudent, AttendenceHistory, PayHq, PaymentHistory } from './pages'


export const routes = [
    [<Login />, '/'],
    [<Login />, url_login],
    [<HqMain />, url_hq],
    [<Centers />, url_centers],
    [<AddCenter />, url_addCenter],
    [<EditCenter />, url_editCenter],
    [<Courses />, url_courses],
    [<AddCourse />, url_addCourse],
    [<EditCourse />, url_editCourse],
    [<ViewCourse />, url_viewCourse],
    [<CenterKpi />, url_centerKpi],
    [<Packages />, url_packages],
    [<AddPackage />, url_addPackage],
    [<EditPackage />, url_editPackage],
    [<Discounts />, url_dicounts],
    [<AddDiscount />, url_addDiscount],
    [<EditDiscount />, url_editDiscount],
    [<Others />, url_packageOthers],
    [<AddOthers />, url_packageAddOthers],
    [<EditOthers />, url_packageEditOthers],
    [<Inventories />, url_inventories],
    [<AddInventory />, url_addInventory],
    [<EditInventory />, url_editInventory],
    [<StudentInvoicing />, url_studentInvoicing],
    [<StudentInvoice />, url_studentInvoice],
    [<CenterInvoicing />, url_centerInvoicing],
    [<CenterInvoice />, url_centerInvoice],
    [<Students />, url_students],
    [<AddStudent />, url_addStudent],
    [<EditStudent />, url_editStudent],
    [<Attendence />, url_attendence],
    [<AttendenceHistory />, url_attendenceHistory],
    [<PayHq />, url_payHq],
    [<PaymentHistory />, url_payHqPaymentHistory],
]