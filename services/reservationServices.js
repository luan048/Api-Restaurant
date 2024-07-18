const cliente = require('../config/db')

async function getReservation() {
    try{
        await cliente.connect()

        const resultado = await cliente.query('SELECT * FROM reservation')
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

async function insertReservation(namerestaurant, nameperson, numbertable, quantperson, hour) {
    try{
        await cliente.connect()

        const result= await cliente.query("SELECT * FROM restaurant WHERE restaurantname = '"+namerestaurant+"';")

        if(result.rows.length > 0) {
            const resultUser = await cliente.query("SELECT * FROM users WHERE username = '"+nameperson+"';")
            
            if(resultUser.rows.length > 0) {
                const id_reservation = Math.floor(10000 + Math.random() * 90000)

                await cliente.query('INSERT INTO reservation("id_reservation", "namerestaurant", "nameperson", "numbertable", "quantperson", "hour") values (' + "'"+id_reservation+"', '" + namerestaurant + "', '" + nameperson + "', '" + numbertable + "', '" + quantperson + "', '"+hour+"');")
                console.log('Valor inserido na tabela')

                const resultado = await cliente.query('SELECT * FROM reservation')
                console.table(resultado.rows)
            }

            else{
                console.log('Usuário não existe')
            }
        }

        else{
            console.log('Restaurante não existe')
        }
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function delReservation(id_reservation) {
    try{
        await cliente.connect()

        await cliente.query("DELETE FROM reservation where id_reservation = '"+id_reservation+"';")
        console.log('Valor removido da tabela')

        const resultado = await cliente.query('SELECT * FROM reservation')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function upReservation(idreservation, newId, newRestaurant, newPerson, newTable, newquant) {
    try{
        await cliente.connect()

        await cliente.query("UPDATE reservation SET idreservation = '"+newId+ "',namerestaurant = '" + newRestaurant + "', nameperson = '"+newPerson+ "', numbertable = '" + newTable + "' WHERE idreservation = '" + idreservation + "';")

        const resultado = await cliente.query('SELECT * FROM reservation')
        console.table(resultado.rows)
        console.log('Valor atualizado na tabela')
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro:'+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

module.exports = {
    getReservation,
    insertReservation,
    delReservation,
    upReservation
}