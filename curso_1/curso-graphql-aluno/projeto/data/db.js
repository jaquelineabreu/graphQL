const usuarios = [{
    id:1,
    nome:'João da Silva',
    email:'joaosilva@email.com',
    idade:29,
    perfil_id:1
},{
    id:2,
    nome:'Rafael Junior',
    email:'rafajunior@email.com',
    idade:31,  
    perfil_id:2
},{
    id:3,
    nome:'Daniela Smith',
    email:'danismith@email.com',
    idade:24,  
    perfil_id:1

}]

const perfis = [
    {id:1, nome:'comum'},
    {id:2, nome:'administrador'}
]


module.exports = {usuarios, perfis}