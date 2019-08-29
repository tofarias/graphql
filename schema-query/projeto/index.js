const { ApolloServer, gql } = require ('apollo-server')

const typeDefs = gql``

const resolvers = { }

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listem().then(({ url }) => {
    console.log(`Executando em ${url}`)
})