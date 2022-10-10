import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { BookQueryType } from "../entityTypes/BookQueryType";
import bookModel from "../../models/BookModel";
import AuthorModel from "../../models/AuthorModel";
import { AuthorQueryType } from "../entityTypes/AuthorQueryType";

export const rootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root queryTypes",
  fields: () => ( {
    book: {
      type: BookQueryType,
      description: "Information about book",
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return bookModel.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookQueryType),
      description: "List of all books",
      resolve: async () => bookModel.find({})
    },
    authors: {
      type: new GraphQLList(AuthorQueryType),
      description: "List of all authors",
      resolve: async () => AuthorModel.find({})
    }
  } )
});
