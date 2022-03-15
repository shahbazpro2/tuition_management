import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, unique: true },
});

export default mongoose.model('CourseType', schema)