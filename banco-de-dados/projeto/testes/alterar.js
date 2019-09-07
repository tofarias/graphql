const db = require('../config/db')

const novoUsuario = {
    nome: 'John Doe',
    email: 'jd@email.com',
    senha: '951753'
}

async function exercicio(){

    // count
    const { qtde } =  await db('usuarios')
    .count('* as qtde').first()

    // console.log( qtde )

    // inserir
    if( qtde === 0 ){
        await db('usuarios').insert(novoUsuario)
    }

    // consultar
    let {id} = await db('usuarios').select('id').limit(1).first()

    // alterar
    await db('usuarios').where( {'id': id}).update({nome: 'Pedro Garcia', email: 'pg@email.com'})

    return db('usuarios').where({id})
}

exercicio()
.then( usuario => console.log(usuario))
.finally(() => db.destroy)