import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    role: {
        type: String,
        enum: ['admin', 'hq', 'teacher'],
        required: true
    },
    password: { type: String, required: [true, 'Password is required'], select: false },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema)