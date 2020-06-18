const mongoose = require("mongoose");

const baseballSchema = new mongoose.Schema(
  {
    Champion: {
        type: String,
        required: true,
    },
    League: {
      type: String,
      required: true,
    },
    Finalist: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    }
  }
);

const Baseball = mongoose.model("Baseball", baseballSchema);

module.exports = Baseball;
