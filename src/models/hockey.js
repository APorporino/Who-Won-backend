const mongoose = require("mongoose");

const hockeySchema = new mongoose.Schema(
  {
    Champion: {
        type: String,
        required: true,
    },
    Finalist: {
        type: String,
        required: true,
    },
    League: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    }
  }
);

const Hockey = mongoose.model("Hockey", hockeySchema);

module.exports = Hockey;
