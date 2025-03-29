const errorMiddlewar = (err, rq, res, next) => {
  if (err.code === 11000) {
    err.message = "Duplicate key error";
    err.statusCode = 400;
  }

  return res.status(err.statusCode).json({
    success: false,
    messsage: err.message,
    statusCode: err.statusCode,
  });
};
export default errorMiddlewar;
