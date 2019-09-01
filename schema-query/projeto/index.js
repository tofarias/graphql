const { ApolloServer, gql } = require ('apollo-server')

const typeDefs = gql`

    scalar Date

    type Produto{
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Usuario{
        id: ID!
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