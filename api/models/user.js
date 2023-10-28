const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  joiningDate: { type: Date, default: Date.now },
  sentFollowRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  receiveFollowrequests: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  verfified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  token: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
