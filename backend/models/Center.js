import mongoose from 'mongoose';
const { Schema } = mongoose;

const centerSchema = new Schema({
    name: { type: String, unique: true },
    Address: String,
    regNumber: String,
    pic: { type: Schema.Types.ObjectId, ref: 'Pic' },
    bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
    officeNumber: String,
    kpi: { type: Schema.Types.ObjectId, ref: 'Kpi' },
});

export default mongoose.model('center', centerSchema)