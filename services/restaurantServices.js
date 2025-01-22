import { cliente } from "../config/db.js"

export class RestaurantService {
    
    async getRestaurant() {
        try {
            await cliente.connect()

            const resultado = await cliente.query('SELECT * FROM restaurant')
            console.table(resultado.rows)
        }

        catch (error) {
            console.log('Ocorreu um erro ao conectar-se. Erro: ' + error)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async insertRestaurant(restaurantname, quantable) {
        try {
            await cliente.connect()

            const restaurantId = Math.floor(10000 + Math.random() * 90000)

            await cliente.query(`INSERT INTO restaurant (restaurantname, quantable, id_identifier) VALUES ($1, $2, $3)`, [restaurantname, quantable, restaurantId])
            console.log('Valor inserido na tabela')

            const resultado = await cliente.query('SELECT * FROM restaurant')
            console.table(resultado.rows)
        }

        catch (error) {
            console.log('Ocorreu um erro ao conectar-se. Erro: ' + error)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async delRestaurant(id_identifier) {
        try {
            await cliente.connect()

            await cliente.query(`DELETE FROM restaurant WHERE id_identifier = $1`, [id_identifier])
            console.log('Restaurante removido da tabela')

            const resultado = await cliente.query('SELECT * FROM restaurant')
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

    async upRestaurant(id_identifier, newId) {
        try {
            await cliente.connect()

            await cliente.query(`UPDATE restaurant SET id_identifier = $1 WHERE id_identifier = $2`, [newId, id_identifier])

            const resultado = await cliente.query('SELECT * FROM restaurant')
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
}