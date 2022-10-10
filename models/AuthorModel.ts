import { model, Schema } from "mongoose";

export type AuthorType = {
  _id: string,
  name: string,
  birthday: string
}

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    birthday: {
      type: String,
      required: true,
      unique: false
    }
  },
  {
    collection: "authors"
  }
);

export default model("Author.ts", AuthorSchema);
