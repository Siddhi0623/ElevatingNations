require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRouter = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/contact', contactRouter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Elevating Nations CIC API' })
})

app.listen(PORT, () => {
  console.log(`Elevating Nations backend running on http://localhost:${PORT}`)
})
