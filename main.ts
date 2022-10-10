import express from "express";
import dotenv from "dotenv";
import { connect } from "./database/Connector";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";

dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => console.log("Server has been started...."));
