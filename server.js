import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>AUTOMATTEEDDD. 100% EPIC 4. Merry Christmas!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
