import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { AuthorQueryType } from "./AuthorQueryType";
import { BookType } from "../../models/BookModel";
import AuthorModel from "../../models/AuthorModel";

export const BookQueryType = new GraphQLObjectType({
  name: "Book",
  description: "This is a book",
  fields: () => ( {
    _id: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    release: { type: GraphQLNonNull(GraphQLString) },
    author: {
      type: GraphQLNonNull(AuthorQueryType),
      resolve: async (book: BookType) => {
        return AuthorModel.findById(book.authorId);
      }
    }
  } )
});
