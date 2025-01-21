import {Router} from 'express'
import {getReservation, insertReservation, upReservation, delReservation} from '../controllers/reservationController.js'

const routerReservation = Router()

routerReservation.get("/reservations", async(req, res) => {
    return await getReservation(req, res)
})

routerReservation.post("/reservations", async(req, res) => {
    return await insertReservation(req, res)
})

routerReservation.delete("/reservations", async(req, res) => {
    return await delReservation(req, res)
})

routerReservation.put("/reservations", async(req, res) => {
    return await upReservation(req, res)
})

export {routerReservation}