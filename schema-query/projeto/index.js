const { ApolloServer, gql } = require ('apollo-server')
const { importSchema } = require('graphql-import')

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

const resolvers = {
    
    Usuario:{
        salario(usuario){
            return usuario.salario_real
        },
        perfil(usuario){
            const selecionados = perfis.filter(p => p.id === usuario.perfil_id)
            return selecionados ? selecionados[0] : null
        }
    },
    Produto:{
        precoComDesconto(produto){
            return produto.preco - produto.desconto
        }
    },
    Query: {
        ola(){
            return 'Oi Tiago'
        },
        horaAtual(){
            return `${new Date}`
        },
        usuarioLogado(){
            return{
                id: 1,
                nome: 'Ana da Web',
                email: 'anadaweb@email.com',
                idade: 23,
                salario_real: 4520,
                vip: true
            }
        },
        prdutoEmDestaque(){
            return {
                nome: 'Todinho',
                preco: 4.60,
                desconto: 0.01
            }
        },
        numerosMegaSena(){
            //return [4,8,13,27,33,54]
            const crescrente = (a,b) => a - b
            return Array(6).fill(0).map(
                n => parseInt(Math.random() * 60 + 1)
            ).sort(crescrente)
        },
        usuarios(){
            return usuarios
        },
        usuario(_,args){
            const selecionados = usuarios.filter(u => u.id === args.id)
            return selecionados ? selecionados[0] : null
        },
        perfis(){
            return perfis
        },
        perfil(_, args){
            const selecionados = perfis.filter(p => p.id === args.id)
            return selecionados ? selecionados[0] : null
        }
    }
 }

const server = new ApolloServer({ 
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})