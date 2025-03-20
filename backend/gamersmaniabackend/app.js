const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes/route");

// read the json code or data
app.use(express.json());

// use middleware cors
app.use(cors());

app.use(express.urlencoded({ extended: true })); 

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

app.use(router);

// app.get("/", (req, res) => {
//     res.json({
//         statuscode: 200,
//         message: "Hello World!"
//     });
// });