import mongoose from "mongoose";

const connectDatabase = async (mongoDbUrl: string) => {
  mongoose.set("strictQuery", false);
  mongoose.set("debug", true);
  mongoose.set("toJSON", {
    virtuals: true,
    transform(doc, ret) {
      delete ret._id;
      delete ret.__v;
    },
  });

  return mongoose.connect(mongoDbUrl);
};

export default connectDatabase;
