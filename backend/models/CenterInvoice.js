import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    center: { type: Schema.Types.ObjectId, ref: 'center', required: true },
    invoiceDate: { type: String, required: true },
    inventory_id: { type: Schema.Types.ObjectId, ref: 'inventory' },
    discount: { type: Schema.Types.ObjectId, ref: 'discount' },
    amount: { type: Number },
    payment_date: { type: Date },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('centerInvoice', schema)