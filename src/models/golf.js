const mongoose = require("mongoose");

const golfSchema = new mongoose.Schema(
  {
    Champion: {
        type: String,
        required: true,
    },
    Major: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    }
  }
);

const Golf = mongoose.model("golf_majors", golfSchema);

module.exports = Golf;
