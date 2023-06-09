function authValidator(data, callback) {
  if (data.email === undefined) {
    return callback({
      message: "Please enter your Email address",
    });
  }
  if (data.password === undefined) {
    return callback({
      message: "Please enter your Password",
    });
  }
}

module.exports = {
  authValidator,
};
