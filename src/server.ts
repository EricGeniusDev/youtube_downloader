import express from "express"
import { routes } from "./routes"

const PORT = 8080
const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})