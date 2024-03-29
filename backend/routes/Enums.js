import express from 'express'
import Bank from '../models/Bank.js';
import Course from '../models/Course.js';
import CourseLanguage from '../models/CourseLanguage.js';
import CourseType from '../models/CourseType.js';
import InventoryCategory from '../models/InventoryCategory.js';
import Kpi from '../models/Kpi.js';
import Others from '../models/Others.js';
import Package from '../models/Package.js';
import Pic from '../models/Pic.js';
import User from '../models/User.js';
import Inventory from '../models/Inventory.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
import Discount from '../models/Discount.js';
const EnumsRoute = express.Router();


EnumsRoute.route('/enums')
    .get(async (_req, _res) => {
        try {
            const pic = Pic.find()
            const bank = Bank.find()
            const kpi = Kpi.find()
            const courseType = CourseType.find()
            const courseLanguage = CourseLanguage.find()
            const inventoryCategory = InventoryCategory.find()
            const packages = Package.find()
            const teachers = User.find({ role: 'teacher' })
            const courses = Course.find({ teacher: { $exists: true } }).populate(["language", "type", "teacher"])
            const others = Others.find()
            const inventories = Inventory.find()
            const discounts = Discount.find()
            Promise.all([pic, bank, kpi, courseType, courseLanguage, inventoryCategory, packages, teachers, courses, others, inventories, discounts])
                .then((values) => {
                    return _res.status(200).json(formateRes('Enums fetched successfully',
                        {
                            pic: values[0], bank: values[1], kpi: values[2],
                            courseType: values[3], courseLanguage: values[4],
                            inventoryCategory: values[5], packages: values[6],
                            teachers: values[7], courses: values[8],
                            others: values[9], inventories: values[10],
                            discounts: values[11]
                        }))
                });

        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default EnumsRoute





