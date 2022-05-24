import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    invoiceDate: { type: String, required: true },
    package_qty: { type: Number },
    package_id: { type: Schema.Types.ObjectId, ref: 'package' },
    inventory_qty: { type: Number },
    inventory_id: { type: Schema.Types.ObjectId, ref: 'inventory' },
    other_qty: { type: Number },
    other_id: { type: Schema.Types.ObjectId, ref: 'others' },
    discount: { type: Schema.Types.ObjectId, ref: 'discount' },
    amount: { type: Number },
    payment_date: { type: Date },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
}, { strict: false, timestamps: true });

export default mongoose.model('studentInvoice', schema)