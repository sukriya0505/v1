import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import passport from "./src/auth/auth.js";
import connectDB from "./src/db/connection.js";
import menuRoutes from "./src/routes/menu.route.js";
import personRoutes from "./src/routes/person.route.js";

const app = express();
dotenv.config();
// mongo connection
connectDB();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function logReq(req, res, next) {
  console.log(`[${new Date()}]:  Req made to ${req.originalUrl}`);
  next();
}
app.use(logReq);

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.use(passport.initialize());

const localAuth = passport.authenticate("local", { session: false });

app.get("/", localAuth, (req, res) => {
  res.send("hello world!");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
