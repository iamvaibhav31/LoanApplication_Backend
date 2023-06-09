const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
});

const loanSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  businessDocument: {
    type: String, // Proprietorship or Partnership or Limited Liability Partnership (LLP) or Private Limited (Pvt Ltd)
    required: true,
  },
  adhaarCardNumber: {
    type: String,
    required: true,
  },
  adhaarCardPhoto: fileSchema, // Use the fileSchema to store file information
  businessSitePhoto: fileSchema, // Use the fileSchema to store file information
  businessAddress: {
    buildingName: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanInterestPerMonth: {
    type: Number,
    required: true,
  },
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
