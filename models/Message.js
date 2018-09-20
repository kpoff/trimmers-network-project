const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const messageSchema = new Schema({
  regardingJob: [{type: Schema.Types.ObjectId, ref: "Job"}],
  messageSender: [{type: Schema.Types.ObjectId, ref: "User"}],
  messageReceiver: [{ type: Schema.Types.ObjectId, ref: "User"}],
  message: {type: String, required: true}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const Message = mongoose.model("Message", messageSchema);


module.exports = Message;