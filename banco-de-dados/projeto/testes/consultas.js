const db = require('../config/db')
/*
db('perfis')
.then( res => res.map( p => p.nome) )
.then( nomes => console.log(nomes) )
.finally(() => res => db.destroy())
*/

/*
db('perfis').select('nome', 'id')
.then(res => console.log(res))
.finally(() => db.destroy)
*/
/*
db.select('nome', 'id')
.from('perfis')
.limit(2).offset(2)
.then(res => console.log(res))
.finally(() => db.destroy)
*/

db.select('nome', 'id')
.from('perfis')
.where({ id: 2}).first()
.then(res => console.log(res))
.finally(() => db.destroy)