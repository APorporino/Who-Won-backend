const mongoose = require("mongoose");

const footballSchema = new mongoose.Schema(
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

const Football = mongoose.model("Football", footballSchema);

module.exports = Football;
