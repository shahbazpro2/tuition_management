import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, unique: true },
    subject: { type: Number, required: true },
    days: { type: Number, required: true },
    amount: { type: Number, required: true },
    status: { default: 'inactive', type: String, enum: ['active', 'inactive'] },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('package', schema)