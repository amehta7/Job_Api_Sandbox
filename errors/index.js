const CustomAPIError = require('./custom-api')
const BadRequestError = require('./badrequest')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found')

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
}
