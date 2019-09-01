const { usuarios, perfis } = require('../data/db')

module.exports = {
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