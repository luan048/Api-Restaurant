import { cliente } from "../config/db.js"

export class RestaurantService {
    
    async getRestaurant() {
        try {
            await cliente.connect()

            const resultado = await cliente.query('SELECT * FROM restaurant')
            console.table(resultado.rows)
        }

        catch (ex) {
            console.log('Ocorreu um erro ao conectar-se. Erro: ' + ex)
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

            await cliente.query(`INSERT INTO restaurant ($1, $2, $3)`, [restaurantname, quantable, restaurantId])
            console.log('Valor inserido na tabela')

            const resultado = await cliente.query('SELECT * FROM restaurant')
            console.table(resultado.rows)
        }

        catch (ex) {
            console.log('Ocorreu um erro ao conectar-se. Erro: ' + ex)
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

        catch (ex) {
            console.log('Ocorreu erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async upRestaurant(idrestaurant, newId) {
        try {
            await cliente.connect()

            await cliente.query(`UPDATE restaurant SET idrestaurant = $1 WHERE idrestaurant = $2`, [newId, idrestaurant])

            const resultado = await cliente.query('SELECT * FROM restaurant')
            console.table(resultado.rows)
        }

        catch (ex) {
            console.log('Ocorreu erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }
}