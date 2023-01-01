const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    offer: { type: Boolean },
    delivery: { type: Boolean, required: true },
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    phone: { type: Number, required: true },
    note: { type: String },
    saveInfo: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("formData", formSchema);
