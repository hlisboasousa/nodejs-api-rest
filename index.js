const customExpress = require('./config/customExpress')
const conexao = require('./infrastrutura/conexao')
const Tabelas = require ('./infrastrutura/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(4001, () => console.log('Servidor rodando na porta 4001'))
    }
})