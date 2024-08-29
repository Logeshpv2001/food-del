import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://logeshkarthi782:logeshpv2001@cluster1.pkyc5ip.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
