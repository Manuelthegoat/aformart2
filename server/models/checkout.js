const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema(
  {
    email: { type: String },
    offer: { type: Boolean },
    delivery: { type: Boolean },
    fName: { type: String },
    lName: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    state: { type: String },
    phone: { type: Number },
    note: { type: String },
    saveInfo: { type: Boolean },
  },
  { timestamps: true }
);

const checkoutData = mongoose.model("checkoutForm", formSchema);
module.exports = checkoutData;
