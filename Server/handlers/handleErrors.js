
function Error404Handler (req, res, next) {
  res.status(404).json("Sorry, can't find that!")
}

function errorHandler (err, req, res, next) {
  const message = err.message || 'Something broke...'
  const statusCode = err.status || 500
  res.status(statusCode).json({message: message})
}


module.exports = { 
  Error404Handler,
  errorHandler,
};
