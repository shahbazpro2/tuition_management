import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    date: { type: Date, unique: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    students: { type: [Schema.Types.ObjectId], ref: 'Student', required: true },
});

export default mongoose.model('Attendance', schema)