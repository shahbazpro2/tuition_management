import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    discount: { type: Number, required: true },
    description: { type: String, required: true },
    status: { default: 'inactive', type: String, enum: ['active', 'inactive'] },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('others', schema)