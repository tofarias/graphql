const usuarios = [{
    id: 1,
    nome: 'John Doe',
    email: 'jd@email.com',
    idade: 31,
    perfil_id: 1
},{
    id: 2,
    nome: 'Jane Doe',
    email: 'jnd@email.com',
    idade: 38,
    perfil_id: 2
},{
    id: 3,
    nome: 'Martin Doe',
    email: 'md@email.com',
    idade: 26,
    perfil_id: 1
}]

const perfis = [
    {id: 1, nome: 'comum 123' },
    {id: 2, nome: 'administrador' }
]

module.exports = { usuarios, perfis }