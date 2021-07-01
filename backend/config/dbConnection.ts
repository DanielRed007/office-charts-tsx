import mongoose from "mongoose";

const envs = {
  local: "mongodb://localhost:27017/supplies",
};

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(envs.local, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Error Office Supplies API : ${error.message}`);
    process.exit(1);
  }
};
