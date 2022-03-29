import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, unique: true },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('inventoryCategory', schema)