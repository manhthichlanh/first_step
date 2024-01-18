const express = require("express");
const app = express();
const PORT = 3333;

app.get("/", (req, res) => {
    return res.send("Chào mày!")
})


app.listen(PORT, () => {
    console.log(`Server run successfully with port ${PORT}`);
})
