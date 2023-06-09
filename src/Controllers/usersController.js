const bcryptjs = require("bcryptjs");
const validator = require("../Validator/usersValidator");
const userService = require("../Services/usersService");

exports.register = (req, res, next) => {
  validator.authValidator(req.body, (err) => {
    if (err) {
      return next(err);
    }
  });

  const salt = bcryptjs.genSaltSync(10);
  req.body.password = bcryptjs.hashSync(req.body.password, salt);
  const { email, password } = req.body;
  userService.register({ email, password }, (err, result) => {
    if (err) {
      return next(err);
    }

    return res.status(200).send({
      success: true,
      data: result,
    });
  });
};

exports.login = (req, res, next) => {
  validator.authValidator(req.body, (err) => {
    if (err) {
      return next(err);
    }
  });

  const { email, password } = req.body;
  console.log(req.body);

  userService.login({ email, password }, (err, result) => {
    if (err) {
      return next(err);
    }

    return res.status(200).send({
      success: true,
      data: result,
    });
  });
};
