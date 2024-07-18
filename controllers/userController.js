const Cliente = require('../config/db')

const {getRestaurant} = require('../services/restaurantServices')

// getRestaurant()

const {insertReservation} = require('../services/reservationServices')

// insertReservation('Ally', 'Luan', 5, 8, '20:00:00')

const {delReservation} = require('../services/reservationServices')

// delReservation()

const {upReservation} = require('../services/reservationServices')

// upReservation()

const { getUser, creatUser, userValidation, updateName, updateMail,  updatePassword,  delUser} = require('../services/userServices')

// getUser()
// creatUser('Luan', 'luan033@hotmail.com', 123)
// userValidation('luki90@mail.com', 1278)
// updateName('LuanP', 'luan10@gmail.com')
// updateMail('LuanMont@hotmail.com', 'Lua1Mont@hotmail.com')
// updatePassword('luan@gmail.com', '123')
// delUser(7350)