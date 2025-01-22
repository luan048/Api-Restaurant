import { cliente } from '../config/db.js'

export class ReservationService {

    async getReservation() {
        try {
            await cliente.connect()

            const resultado = await cliente.query('SELECT * FROM reservation')
            console.table(resultado.rows)
        }

        catch (error) {
            console.log('Ocorreu erro ao conectar-se. Erro: ' + error)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async insertReservation(namerestaurant, nameperson, numbertable, quantperson, hour) {
        try {
            await cliente.connect()

            const result = await cliente.query(`SELECT * FROM restaurant WHERE restaurantname = $1`, [namerestaurant])

            if (result.rows.length > 0) {
                const resultUser = await cliente.query(`SELECT * FROM users WHERE username = $1`, [nameperson])

                if (resultUser.rows.length > 0) {
                    const id_reservation = Math.floor(10000 + Math.random() * 90000)

                    await cliente.query(`INSERT INTO reservation (id_reservation, namerestaurant, nameperson, numbertable, quantperson, hour) VALUES ($1, $2, $3, $4, $5, $6)`, [id_reservation, namerestaurant, nameperson, numbertable, quantperson, hour])
                    console.log('Valor inserido na tabela')

                    const resultado = await cliente.query('SELECT * FROM reservation')
                    console.table(resultado.rows)
                }

                else {
                    console.log('Usuário não existe')
                }
            }

            else {
                console.log('Restaurante não existe')
            }
        }

        catch (error) {
            console.log('Ocorreu erro ao conectar-se. Erro: ' + error)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async delReservation(id_reservation) {
        try {
            await cliente.connect()

            await cliente.query(`DELETE FROM reservation where id_reservation = $1`, [id_reservation])
            console.log('Valor removido da tabela')

            const resultado = await cliente.query('SELECT * FROM reservation')
            console.table(resultado.rows)
        }

        catch (error) {
            console.log('Ocorreu erro ao conectar-se. Erro: ' + error)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado')
        }
    }

    async upReservation(idreservation, newId, newRestaurant, newPerson, newTable) {
        try {
            await cliente.connect()

            await cliente.query(`UPDATE reservation SET idreservation = $1, namerestaurant = $2, nameperson  = $3, numbertable = $4 WHERE idreservation = $5`, [newId, newRestaurant, newPerson, newTable, idreservation])

            const resultado = await cliente.query('SELECT * FROM reservation')
            console.table(resultado.rows)
            console.log('Valor atualizado na tabela')
        }

        catch (error) {
            console.log('Ocorreu erro ao conectar-se. Erro:' + error)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }
}