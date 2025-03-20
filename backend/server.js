import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve('dist')))

app.post('/registration', (req, res) => {
  return res.json({ message: 'Nice! You made a post request.' })
})

app.use('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
})

app.listen(3000, () => {
  console.log(`Listening at http://localhost:${3000}`)
})