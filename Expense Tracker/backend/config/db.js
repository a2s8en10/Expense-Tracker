import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anusahu9589_db_user:4AmZ3bMk6SiOvce2@cluster0.pty89nn.mongodb.net/Expense",
    )
    .then(() => console.log("DB CONNECTED"));
};
