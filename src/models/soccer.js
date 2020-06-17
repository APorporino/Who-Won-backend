const mongoose = require("mongoose");

const soccerSchema = new mongoose.Schema(
  {
    Champion: {
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

const Soccer = mongoose.model("international_soccer", soccerSchema);

module.exports = Soccer;
