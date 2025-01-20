import express from 'express'

const server = express()
const port = 8000

server.use(express.json())

server.listen(port, () => {
    console.log(`Running on port: ${port}`)
})