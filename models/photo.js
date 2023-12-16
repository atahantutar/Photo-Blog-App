import mongoose from "mongoose";

const Schema = mongoose.Schema();

const photoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: { type: Date, default: Date.now },
});

const photo = mongoose.model(`photo`, photoSchema);

export default photo;
