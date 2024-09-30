import mongoose from 'mongoose';

const intervalModelSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  targets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Target'  
  }]
}, { timestamps: true });

const Interval = mongoose.model('Interval', intervalModelSchema);

export default Interval;
