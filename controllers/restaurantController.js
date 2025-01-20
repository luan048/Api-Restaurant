import {RestaurantService} from '../services/restaurantServices.js'

const instanceRestaurantService = new RestaurantService()

export async function getRestaurant(req, res) {
    try {
        const result = await instanceRestaurantService.getRestaurant()
        return res.status(200).json({result})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export async function insertRestaurant(req, res) {
    const {restaurantname, quantable} = req.body

    try {
        const result = await instanceRestaurantService.insertRestaurant(restaurantname, quantable)
        return res.status(200).json({result})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export async function delRestaurant(req, res) {
    const {id} = req.params

    try {
        await instanceRestaurantService.delRestaurant(id)
        return res.status(200).json({message: 'Sucessfully'})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export async function upRestaurant(req, res) {
    const {idrestaurant} = req.params
    const {newId} = req.body

    try {
        await instanceRestaurantService.upRestaurant(idrestaurant, newId)
        return res.status(200).json({message: 'Sucessfully'})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}