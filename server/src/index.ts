require("dotenv").config();
import express = require("express");
import mongoose from "mongoose";
import BodyParser from "body-parser";
import user from "./routes/user";
import list from "./routes/list";
import cookieParser from "cookie-parser";
import todo from "./routes/todo";

const { DB_URL, DB_NAME, DB_USER, DB_PASS } = process.env;
//`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_NAME}?retryWrites=true`

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_NAME}?retryWrites=true`
);

const app = express();
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cookieParser());
app.use("/api/users", user);
app.use("/api/lists", list);
app.use("/api/todos", todo);

app.listen(8080, function() {
  console.log("App listening on port 8080!");
});
