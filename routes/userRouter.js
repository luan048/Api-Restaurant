import {Router} from 'express'
import {getUser, creatUser, userValidation, delUser, updateMail, updateName, updatePassword} from '../controllers/userController.js'

const routerUser = Router()

routerUser.get("/users", async (req, res) => {
    return await getUser(req, res)
})

routerUser.post("/users", async(req, res) => {
    return await creatUser(req, res)
})

routerUser.delete("/users", async(req, res) => {
    return await delUser(req, res)
})

// Valida Usuário
routerUser.post("/usersLogin", async(req, res) => {
    return await userValidation(req, res)
})

// Métodos para Atualização

routerUser.post("/users", async(req, res) => {
    return await updateName(req, res)
})

routerUser.post("/users", async(req, res) => {
    return await updateMail(req, res)
})

routerUser.post("/users", async(req, res) => {
    return await updatePassword(req, res)
})

export {routerUser}