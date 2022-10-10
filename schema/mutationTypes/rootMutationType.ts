import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { BookQueryType } from "../entityTypes/BookQueryType";
import BookModel from "../../models/BookModel";

export const rootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ( {
    addBook: {
      type: GraphQLNonNull(BookQueryType),
      description: "Add new book to database",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLString) },
        release: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        return BookModel.create({
          name: args.name,
          authorId: args.authorId,
          release: args.release
        });
      }
    },
    deleteBook: {
      type: BookQueryType,
      description: "Delete a book from database",
      args: {
        id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        return BookModel.findByIdAndDelete(args.id);
      }
    }
  } )
});
