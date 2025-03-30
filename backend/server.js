import express from "express"
import cros from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()
const port = 4000

// middleware 

// middleare to request frontend to backend that pass using json
app.use(express.json())

// axcess backent to frontend
app.use(cros())

// db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

// request data from server
app.get("/", (req, res) => {

    res.send("API Working")

})

// run the express server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
