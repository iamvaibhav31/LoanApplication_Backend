const loanServices = require("../Services/loansService");
exports.apply = (req, res, next) => {
  loanServices.apply(req.body, (err, result) => {
    if (err) {
      return next(err);
    }
    console.log("apply", req.body);
    return res.status(200).send({
      success: true,
      data: result,
    });
  });
};

exports.loans = (req, res, next) => {
  loanServices.loans(req.body, (err, result) => {
    if (err) {
      return next(err);
    }

    return res.status(200).send({
      success: true,
      data: result,
    });
  });
};

exports.loanDetails = (req, res, next) => {
  const { id } = req.params;
  loanServices.loanDetails({ id }, (err, result) => {
    if (err) {
      return next(err);
    }

    return res.status(200).send({
      success: true,
      data: result,
    });
  });
};
