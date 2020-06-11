
function Error404Handler (req, res, next) {
  res.status(404).json({message : "Sorry dude. I can't find that!"})
}

function errorHandler (err, req, res, next) {
  const message = err.message || 'Wow, something broke...'
  const statusCode = err.status || 500
  res.status(statusCode).json({message: message})
}


module.exports = { 
  Error404Handler,
  errorHandler,
};
