import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    religion: { type: String, required: true, enum: ['muslim', 'hindu'] },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    package: { type: Schema.Types.ObjectId, ref: 'package', required: true },
    courses: { type: [Schema.Types.ObjectId], ref: 'Course', required: true },
    health: { type: Boolean, required: true },
    language: { type: String, required: true },
}, { strict: false, timestamps: true });

export default mongoose.model('Student', schema)