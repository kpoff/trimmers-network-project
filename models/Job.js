const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const jobSchema = new Schema({

  jobTitle: {type: String, required: true},
  numberOfTrimmers: {type: Number, required: true},
  duration: {type: String, required: true},
  location: {type: String, required: true},
  payRate: {type: String, required: true},
  accommodations: {type: String, required: true},
  travelInfo: {type: String, required: true},
  notes: {type: String},
  postedBy: [{type: Schema.Types.ObjectId, ref: "User"}]
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const Job = mongoose.model("Job", jobSchema);


module.exports = Job;