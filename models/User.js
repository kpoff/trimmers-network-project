const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({

  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  role: {type: String, enum: ['Farmer', 'Trimmer'], required: true},
  firstName: {type: String, required: true},
  lastName: {type: String},
  imgName: {type: String},
  imgPath: {type: String},
  vouchedBy: [{ type: Schema.Types.ObjectId, ref: "User"}],
  compliments: [{user_id: { type: Schema.Types.ObjectId, ref: "User"}}],
  reviews: [{user_id: { type: Schema.Types.ObjectId, ref: "User"}}]
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const User = mongoose.model("User", userSchema);


module.exports = User;


