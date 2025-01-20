import { cliente } from "../config/db.js"

async function getRestaurant() {
    try{
        await cliente.connect()

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu um erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function insertRestaurant(restaurantname, quantable) {
    try{
        await cliente.connect()

        const restaurantId = Math.floor(10000 + Math.random() * 90000)

        await cliente.query('INSERT INTO restaurant("restaurantname", "quantable", "id_identifier") values ('+"'"+restaurantname+"', '"+quantable+"', '"+restaurantId+"');")
        console.log('Valor inserido na tabela')

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu um erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function delRestaurant(id_identifier) {
    try{
        await cliente.connect()

        await cliente.query("DELETE FROM restaurant WHERE id_identifier = '"+id_identifier+"';")
        console.log('Restaurante removido da tabela')

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function upRestaurant(idrestaurant, newId) {
    try{
        await cliente.connect()

        await cliente.query("UPDATE restaurant SET idrestaurant = '"+newId+"' WHERE idrestaurant = '"+idrestaurant+"'; ")

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

export {
    getRestaurant,
    insertRestaurant,
    delRestaurant,
    upRestaurant
}