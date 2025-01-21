import express from 'express'

import {routerReservation} from './routes/reservationRoute.js'
import {routerRestaurant} from './routes/restaurantRouter.js'
import {routerUser} from './routes/userRouter.js'

const server = express()
const port = 8000

server.use(express.json())
server.use(routerReservation)
server.use(routerRestaurant)
server.use(routerUser)

server.listen(port, () => {
    console.log(`Running on port: ${port}`)
})