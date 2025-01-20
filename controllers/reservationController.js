import {ReservationService} from '../services/reservationServices.js'

const instanceReservationService = new ReservationService()

export async function getReservation(req, res) {
    try {
        const result = await instanceReservationService.getReservation()
        return res.status(200).json({result})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export async function insertReservation(req, res) {
    const {namerestaurant, nameperson, numbertable, quantperson, hour} = req.body

    try{
        const result = await instanceReservationService.insertReservation(namerestaurant, nameperson, numbertable, quantperson, hour)
        return res.status(200).json({result})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export async function delReservation(req, res) {
    const {id} = req.params

    try{
        await instanceReservationService.delReservation(id)
        return res.status(200).json({message: 'Sucessfully'})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export async function upReservation(req, res) {
    const {id} = req.params
    const {newId, newRestaurant, newPerson, newTable} = req.body

    try{
        await instanceReservationService.upReservation(
            id,
            newId,
            newRestaurant,
            newPerson,
            newTable
        )

        return res.status(200).json({message: 'Sucessfully'})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    }
}