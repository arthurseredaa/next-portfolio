const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  name: {
    type: String,
    maxlength: [30, "Maximum length is 30 chanracters"],
    minlength: [2, "Minimum length is 2 characters"],
  },
  username: {
    type: String,
    required: true,
    minlength: [6, "Minimum username is 6 characters"],
    maxlength: [20, "Maximum username is 20 characters"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Minimum password is 6 characters"],
    maxlength: [42, "Maximum password is 42 characters"],
  },
  role: {
    type: String,
    enum: ["quest", "admin", "instructor"],
    required: true,
    default: "quest",
  },
  description: {
    type: String,
    createdAt: { type: Date, default: Date.now() },
  },
});

module.exports = new mongoose.model("User", userSchema);
