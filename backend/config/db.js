import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://logeshkarthi782:YLWzsxdBggPXaEvw@cluster1.pkyc5ip.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
