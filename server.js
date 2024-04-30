const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRouter = require("./routes/usersroutes.js");
const massageRouter = require("./routes/massageRoutes.js");
const app = express();
const path = require("path");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  // allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on ${process.env.PORT || 3001}`);
});
app.use("/massage", massageRouter);
app.use("/users", usersRouter);

app.use(express.static(path.join(__dirname, "client/panicRest/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./client/panicRest/dist", "index.html")
  );
});
