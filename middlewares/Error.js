const errorMiddlewar = (err, rq, res, next) => {
  return res.status(err.statusCode).json({
    success: false,
    messsage: err.message,
    statusCode: err.statusCode,
  });
};
export default errorMiddlewar;
