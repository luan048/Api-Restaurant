import { cliente } from "../config/db.js"

export class UserService {

    async getUser(email) {
        try {
            await cliente.connect()

            const resultado = await cliente.query(`SELECT * FROM users WHERE email = $1`, [email])

            if (resultado.rows.length > 0) { //rows.length representa as linhas do DB, se === 0, significa que não existe nenhuma linha com esse email
                console.table(resultado.rows)
            }

            else {
                console.log('Usuário não encontrado')
            }
        }

        catch (ex) {
            console.log('Ocorreu um erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado')
        }
    }

    async creatUser(userName, email, password) {
        try {
            await cliente.connect()

            const userId = Math.floor(1000 + Math.random() * 9000)

            await cliente.query(`INSERT INTO users ($1, $2, $3, $4)`, [userName, email, password, userId])

            const resultado = await cliente.query('SELECT * FROM users')
            console.table(resultado.rows)
        }

        catch (ex) {
            console.log('Ocorreu um erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado')
        }
    }

    async userValidation(email, password) { //É para LOGIN
        try {
            await cliente.connect()

            const query = 'SELECT * FROM users WHERE email = $1'
            const values = [email];
            const result = await cliente.query(query, values);
            const user = result.rows[0];

            if (!user || user.password !== password) {
                console.log('Email ou senha incorretos')
            }

            else {
                console.log('Logado com sucesso!')
            }
        }
        catch (ex) {
            console.log('Erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async updateName(newName, email) {
        try {
            await cliente.connect()

            const resultado = await cliente.query(`UPDATE users SET username = $1 WHERE email = $2`, [newName, email])

            if (resultado.rowCount === 0) {
                console.log('Email não encontrado')
            }
            else {
                const newUser = await cliente.query(`SELECT * FROM users WHERE email = $1`, [email])
                console.table(newUser.rows)
            }
        }

        catch (ex) {
            console.log('Erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async updateMail(newEmail, email) {
        try {
            await cliente.connect()

            const resultado = await cliente.query(`UPDATE users SET email = $1 WHERE email = $2`, [newEmail, email])

            if (resultado.rowCount === 0) {
                console.log('Email não existe!')
            }

            else {
                const Emailnew = await cliente.query(`SELECT * FROM users WHERE email = $1`, [newEmail])
                console.table(Emailnew.rows)
            }
        }

        catch (ex) {
            console.log('Erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async updatePassword(email, newPassword) {
        try {
            await cliente.connect()

            const resultado = await cliente.query(`UPDATE users SET password = $1 WHERE email = $2`, [newPassword, email])

            if (resultado.rowCount === 0) {
                console.log('Email não existe!')
            }

            else {
                const newPassword = await cliente.query(`SELECT * FROM users WHERE email = $1`, [email])
                console.table(newPassword.rows)
            }
        }

        catch (ex) {
            console.log('Erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }

    async delUser(iduser) {
        try {
            await cliente.connect()

            await cliente.query(`DELETE FROM users WHERE id_identifier = $1`, [iduser])

            const resultado = await cliente.query('SELECT * FROM users')
            console.table(resultado.rows)
        }

        catch (ex) {
            console.log('Erro ao conectar-se. Erro: ' + ex)
        }

        finally {
            await cliente.end()
            console.log('Cliente desconectado...')
        }
    }
}