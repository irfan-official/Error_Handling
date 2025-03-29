import ErrorHandler from "../utils/errorHandler.utils..js";
import userModels from "../models/user.models.js";
export const newUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    // const userExist = await userModels.findOne({});
    // if (userExist) {
    //   return next(new ErrorHandler("user already exist ", 400));
    // }
    //const { name, email } = req.body;
    const newUser = await userModels.create({
      name: "Irfans",
      email: "contact@irfans.dev",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 900));
  }

  res.status(201).json({ message: "user created successfully" });
};
