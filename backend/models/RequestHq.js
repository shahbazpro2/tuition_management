import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    centerId: { type: Schema.Types.ObjectId, ref: 'center', required: true },
    inventories: { type: [Schema.Types.ObjectId], ref: 'inventory', required: true },
}, { timestamps: true });

export default mongoose.model('requestHq', schema)