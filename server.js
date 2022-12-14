const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const routes = require("./routes/apiRoutes.js");
const path = require("path");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://comments-section-client-rrich.herokuapp.com",
      "https://comments-section-client-6xwcyhtlm-rrich-kray.vercel.app",
      "https://comments-section-client-k5ssms8mj-rrich-kray.vercel.app",
      "https://comments-section-client-aqwq695xr-rrich-kray.vercel.app",
      "https://comments-section-client.vercel.app",
    ],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});
