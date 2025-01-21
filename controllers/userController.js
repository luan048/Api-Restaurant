import { UserService } from '../services/userServices.js'

const instanceUserService = new UserService()

export async function getUser(req, res) {
    const {email} = req.params

    try {
        const result = await instanceUserService.getUser(email)
        return res.status(200).json({result})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export async function creatUser(req, res) {
    const {userName, email, password} = req.body

    try {
        const result = await instanceUserService.creatUser(userName, email, password)
        return res.status(200).json({result})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export async function userValidation(req, res) {
    const {email, password} = req.body

    try {
        const response = await instanceUserService.userValidation(email, password)
        return res.status(200).json({response})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export async function updateName(req, res) {
    const {newName, email} = req.body

    try {
        const result = await instanceUserService.updateName(newName, email)
        return res.status(200).json({result})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export async function updateMail(req, res) {
    const {newEmail, email} = req.body

    try {
        const result = await instanceUserService.updateMail(newEmail, email)
        return res.status(200).json({result})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export async function updatePassword(req, res) {
    const {email, newPassword} = req.body

    try {
        const result = await instanceUserService.updatePassword(email, newPassword)
        return res.status(200).json({result})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export async function delUser(req, res) {
    const {id} = req.params

    try {
        const result = await instanceUserService.delUser(id)
        return res.status(200).json({result})
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}