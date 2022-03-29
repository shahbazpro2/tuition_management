import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    description: String,
    category: { type: Schema.Types.ObjectId, ref: 'inventoryCategory' },
    qty: Number,
    status: { default: 'inactive', type: String, enum: ['active', 'inactive'] },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('inventory', schema)