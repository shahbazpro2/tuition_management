import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, unique: true },
    contactNumber: String
});

export default mongoose.model('ProgramIntentCode', schema)