import mongoose from "mongoose";



    const sampleSchema = mongoose.Schema({
        // _id: mongoose.Schema.Types.ObjectId, // Optional, but explicit for clarity
        ts: {
          type: Number,
          required: true
        },
        machine_status: {
          type: Number,
          required: true
        },
        vibration: {
          type: Number,
          required: true
        }
      });


export const sampleData = mongoose.model('sampleData', sampleSchema);

