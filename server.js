import express from 'express'
const app = express()
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! some changes')
})

app.listen(port, () => {
  console.log(`server app listening on port http://localhost:${port}`)
})