const { ApolloServer, gql } = require('apollo-server')

const usuarios = [{
    id:1,
    nome:'João da Silva',
    email:'joaosilva@email.com',
    idade:29,
},{
    id:2,
    nome:'Rafael Junior',
    email:'rafajunior@email.com',
    idade:31,  
},{
    id:3,
    nome:'Daniela Smith',
    email:'danismith@email.com',
    idade:24,  

}]

const typeDefs = gql`
    scalar Date

    type Produto{
        nome:String!
        preco:Float!
        desconto:Float       
        precoComDesconto:Float
    }

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
        produtoEmDestaque:Produto
        numerosMegaSena:[Int!]!
        usuarios:[Usuario]
    }
`

const resolvers = {
    Produto:{
        precoComDesconto(produto){
            if(produto.desconto){
                return produto.preco * (1 - produto.desconto)       
            }else{
                return produto.preco
            }
        }
    },
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
        },
        produtoEmDestaque(){
            return{
                nome:'Notebook Games',
                preco:'4890.89',
                desconto:'0.5'
            }
        },
        numerosMegaSena(){
           // return[4,8,13,27,33,54]
            const crescente = (a,b) => a - b
            return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente) 

        },

        usuarios(){
            return usuarios
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