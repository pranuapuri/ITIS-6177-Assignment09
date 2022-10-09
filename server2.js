const express = require("express");
const expressapp = express();
const expressport = 3002;

const axios = require('axios').default;

var cors = require("cors");

expressapp.use(express.json());
expressapp.use(express.urlencoded({ extended: true }));

expressapp.use(cors());

expressapp.get("/say",async(req,res)=>{
  const url = "https://4xzbdsvq22giab4fc72s4qozky0yguut.lambda-url.us-east-1.on.aws/?keyword="+req.query.keyword;
  console.log("inside");
  axios.get(url)
  .then((response)=>{
       res.send(response.data);
  }).catch((error)=>{
       console.log(error);
       res.send(error);
  })
});

app.listen(expressport, () => {
  console.log("App is listening at http://localhost:${expressport}");
});