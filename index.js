const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(
  (addActiveTime = (req, res, next) => {
    let requestAt = new Date().getHours();

    if (requestAt <= 9 || requestAt >= 22) {
      res.send("no access");
    } else {
      next();
    }
  })
);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/Home.html"));
});
// app.get('/ContactUs',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/public/ContactUs.html'))
// })
// app.get('/ourService',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/public/OurServices.html'))
// })
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
