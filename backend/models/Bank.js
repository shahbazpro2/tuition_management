import mongoose from 'mongoose';
const { Schema } = mongoose;

const bandSchema = new Schema({
    name: { type: String, unique: true },
    accountNumber: String
});

export default mongoose.model('Bank', bandSchema)