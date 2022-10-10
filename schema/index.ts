import { GraphQLSchema } from "graphql";
import { rootQueryType } from "./queryTypes/rootQueryType";
import { rootMutationType } from "./mutationTypes/rootMutationType";

export const schema = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType
});
