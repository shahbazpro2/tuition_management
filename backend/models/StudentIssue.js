import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    inventories: { type: [Schema.Types.ObjectId], ref: 'inventory', required: true },
}, { timestamps: true });

export default mongoose.model('studentIssue', schema)