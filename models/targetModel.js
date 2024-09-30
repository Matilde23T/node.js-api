import mongoose from 'mongoose';

const targetModelSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  interval: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interval', 
    required: true,
  }
}, { timestamps: true });

const Target = mongoose.model('Target', targetModelSchema);

export default Target;


