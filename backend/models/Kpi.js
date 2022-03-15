import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, unique: true },
    amt: String
});

export default mongoose.model('Kpi', schema)