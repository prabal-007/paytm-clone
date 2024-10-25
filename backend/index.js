const express = require("express");
const cors = require('cors')
const rootRouter = require("./routes/index")

app.use(cors())
app.use(express.json())

const app = express();
const port = 3000;


app.use("api/v1", rootRouter);

app.listen(port)