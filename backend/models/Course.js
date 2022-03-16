import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    type: { type: Schema.Types.ObjectId, ref: 'CourseType', required: true },
    language: { type: Schema.Types.ObjectId, ref: 'CourseLanguage', required: true },
    description: { type: String, required: true },
    file: String,
    status: { default: 'inactive', type: String, enum: ['active', 'inactive'] },
});

export default mongoose.model('Course', schema)
