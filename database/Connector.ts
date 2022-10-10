import mongoose from "mongoose";

export function connect() {
  const DATABASE_CONNECTION_URI = process.env.DATABASE_CONNECTION_URI;
  if (typeof DATABASE_CONNECTION_URI !== "string") {
    throw "DATABASE CONNECTION URI IS NOT VALID";
  }
  mongoose.connect(DATABASE_CONNECTION_URI, {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  }, (error) => {
    if (error) {
      console.log(error); // TODO: CREATE LOGGER
      throw error;
    } else {
      console.log("MongoDB is connected");
    }
  });
}
