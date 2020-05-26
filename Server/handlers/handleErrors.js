const { GeneralError } = require('../utils/errors');

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

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
  throw new ErrorHandler(400, "Sorry, can't find that!")
}

function serverError (err, req, res, next) {
  throw new ErrorHandler(500, 'Something went wrong...')
}


module.exports = { 
  logErrors,
  handleErrors,
  endpointError,
  serverError
};