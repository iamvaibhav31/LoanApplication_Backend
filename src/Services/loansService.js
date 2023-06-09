const loansModel = require("../Models/loansModels");

async function apply(params, callback) {
  try {
    const loan = new loansModel(params);
    const savedLoan = await loan.save();
    return callback(null, savedLoan);
  } catch (error) {
    return callback(error);
  }
}

async function loans(params, callback) {
  try {
    const loans = await loansModel.find();
    return callback(null, loans);
  } catch (error) {
    return callback(error);
  }
}

async function loanDetails(params, callback) {
  try {
    const loans = await loansModel.findById(params.id);
    return callback(null, loans);
  } catch (error) {
    return callback(error);
  }
}

module.exports = {
  loans,
  apply,
  loanDetails,
};
