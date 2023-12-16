import mongoose from "mongoose";

const db = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@CLUSTER_NAME.ve1ldoj.mongodb.net/`
    )
    .then(() => console.log(`Connected to database`))
    .catch((err) => {
      console.log(`Error connecting to database:`, err.message);
    });
};

export default db;
