const { ApolloServer, gql } = require ('apollo-server')

const usuarios = [{
    id: 1,
    nome: 'John Doe',
    email: 'jd@email.com',
    idade: 31
},{
    id: 2,
    nome: 'Jane Doe',
    email: 'jnd@email.com',
    idade: 38
},{
    id: 3,
    nome: 'Martin Doe',
    email: 'md@email.com',
    idade: 26
}]

const perfis = [
    {id: 1, nome: 'comum' },
    {id: 2, nome: 'administrador' }
]

const typeDefs = gql`

    scalar Date

    type Produto{
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Perfil {
        id: Int
        nome: String
    }

    type Usuario{
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entrada da sua API!
    type Query{
        ola: String!
        horaAtual: Date!
        usuarioLogado: Usuario
        prdutoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: Int): Perfil
    }
`

const resolvers = {

    Usuario:{
        salario(usuario){
            return usuario.salario_real
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
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})