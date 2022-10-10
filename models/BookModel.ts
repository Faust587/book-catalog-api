import { model, Schema } from "mongoose";

export type BookType = {
  _id: string,
  authorId: number,
  name: string,
  release: string
}

const BookSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "Author.ts",
      required: true,
      unique: false
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    release: {
      type: String,
      required: true,
      unique: false
    }
  },
  {
    collection: "books"
  }
);

export default model("Book", BookSchema);
