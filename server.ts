import express from "express"
const app = express()
const PORT = 8080

app.get('/', function (req, res) {
  res.send('API is working')
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})