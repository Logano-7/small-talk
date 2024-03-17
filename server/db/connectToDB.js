import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err.message} `);
  }
};


export default connectToDB;