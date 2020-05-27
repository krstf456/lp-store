const { GeneralError } = require('../utils/errors');


const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    console.log(err)
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong...'
  });
}

function endpointError (err, req, res, next) {
  res.status(404).send("Sorry, can't find that!")
}

function serverError (err, req, res, next) {
  res.status(500).send("Something broke...")
}


module.exports = { 
  handleErrors,
  endpointError,
  serverError
};