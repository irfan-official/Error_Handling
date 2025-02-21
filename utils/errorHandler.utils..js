class ErrorHandler extends Error {
  constructor(message = "Inrternal Server Error", statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;
