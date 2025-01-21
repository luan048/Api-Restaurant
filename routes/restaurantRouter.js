import {Router} from 'express'
import {getRestaurant, insertRestaurant, upRestaurant, delRestaurant} from '../controllers/restaurantController.js'

const routerRestaurant = Router()

routerRestaurant.get("/restaurant", async(req, res) => {
    return await getRestaurant(req, res)
})

routerRestaurant.post("/restaurant", async(req, res) => {
    return await insertRestaurant(req, res)
})

routerRestaurant.delete("/restaurant", async(req, res) => {
    return await delRestaurant(req, res)
})

routerRestaurant.put("/restaurant", async(req, res) => {
    return await upRestaurant(req, res)
})

export {routerRestaurant}