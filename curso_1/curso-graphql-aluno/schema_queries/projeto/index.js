const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario{
        id: ID!
        nome:String!
        email:String!
        idade:Int
        salario: Float
        vip:Boolean
        blabla:String
    }

    #Pontos de entrada da sua API!
    type Query{
        ola:String
        horaAtual:Date!
        usuarioLogado: Usuario
    }
`

const resolvers = {
    //resolve salario 
    Usuario:{
        salario(usuario){
            return usuario.salario_real
        },
        blabla(usuario){
            return 'Opa'
        }
    },
    Query: {
        ola(){
            return 'Olá, mundo!'
        },
        horaAtual(){
            return new Date
        },
        usuarioLogado(obj){
            console.log(obj)
            return{
                id:1,
                nome:'Ana da Web',
                email:'anadaweb@email.com',
                idade:23,
                salario_real:1234.56,
                vip: true
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`)
})