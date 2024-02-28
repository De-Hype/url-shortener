const express = require("express");
require("dotenv").config();
const createHttpError = require("http-errors");
const shortId = require("shortid");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const ShortUrl = require("./model");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected Succesfully");
  } catch (error) {
    console.error(error);
  }
};
connect();

app.post("/v1/generate", async (req, res) => {
  const { url, hostname } = req.body;

  if (url == "" || !url) {
    return res
      .status(400)
      .json({ status: "Error", messsage: "Please Provide A Valid Url" });
  }
  const lowercaseUrl = url.toLowerCase().trim()
  try {
    const url_link = await ShortUrl.findOne({ url:lowercaseUrl });
    if (url_link) {
      return res.status(202).json({
        status: "OK",
        messsage: `${hostname}/${url_link.shortId}`,
      });
    }
    const shortUrl = await ShortUrl({ lowercaseUrl, shortId: shortId.generate() });
    const result = await shortUrl.save();
    return res.status(202).json({
      status: "OK",
      messsage: `${hostname}/${result.shortId}`,
    });
  } catch (error) {
    console.error(error);
  }
});

app.get("/v1/:shortId", async (req, res) => {
  const { shortId } = req.params;
  try {
    const result = await ShortUrl.findOne({ shortId });
    if (!result) {
      return res.status(404).json({
        status: "Error",
        messsage: `URL does not exist`,
      });
    }
    return res
      .status(202)
      .json({
        status: "OK",
        messsage: `Redirecting to the new url`,
        site:result.url
      });
  } catch (error) {
    console.error(error);
  }
});

// app.get("/", async (req, res) => {});
const Port = process.env.PORT || 8080;

app.listen(Port, () =>
  console.log(`Server runing on http://localhost:${Port}`)
);
