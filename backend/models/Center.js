import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, unique: true },
    address: String,
    regNumber: String,
    pic: { type: Schema.Types.ObjectId, ref: 'ProgramIntentCode' },
    bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
    officeNumber: String,
    kpi: { type: Schema.Types.ObjectId, ref: 'Kpi' },
    status: { default: 'inactive', type: String, enum: ['active', 'inactive'] },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('center', schema)