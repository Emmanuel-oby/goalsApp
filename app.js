require("dotenv").config()
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3500
const {errorHandler} = require("./middleware/errorMiddleware")

// @middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// @route
app.use("/api/goals", (require("./routes/goalRoutes")))
app.use(errorHandler)


// Server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
