import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { BookQueryType } from "./BookQueryType";
import { AuthorType } from "../../models/AuthorModel";
import BookModel from "../../models/BookModel";

export const AuthorQueryType = new GraphQLObjectType({
  name: "Author",
  description: "This is the author of some books",
  fields: () => ( {
    _id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    birthday: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: GraphQLList(BookQueryType),
      resolve: async (author: AuthorType) => {
        return BookModel.find({ authorId: author._id });
      }
    }
  } )
});
