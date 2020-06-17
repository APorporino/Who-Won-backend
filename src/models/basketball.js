const mongoose = require("mongoose");

const basketballSchema = new mongoose.Schema(
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

const Basketball = mongoose.model("Basketball", basketballSchema);

module.exports = Basketball;
